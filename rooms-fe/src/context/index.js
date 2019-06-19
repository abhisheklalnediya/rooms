import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  getBuildings, deleteBuilding, addBuilding, updateBuilding,
  getRooms, addRoom, deleteRoom,
} from './actions';

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      buildings: [],
      rooms: [],
    };
    this.addBuilding = this.addBuilding.bind(this);
    this.addRoom = this.addRoom.bind(this);
    this.addUpdateRoom = this.addUpdateRoom.bind(this);
    this.deleteBuilding = this.deleteBuilding.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
    this.getRooms = this.getRooms.bind(this);
    this.selectBuilding = this.selectBuilding.bind(this);
    this.selectRoom = this.selectRoom.bind(this);
    this.updateBuilding = this.updateBuilding.bind(this);
  }

  componentDidMount() {
    getBuildings().then(({ data }) => {
      const buildings = _.sortBy([...data.map((b) => {
        const {
          name, address, landmarks, id,
        } = b;
        const [landmark1, landmark2, landmark3] = landmarks;
        return {
          name, address, landmark1, landmark2, landmark3, id,
        };
      })], 'id');
      this.setState({
        buildings,
      });
    });
  }

  getRooms(id) {
    this.setState({
      rooms: [],
    });
    getRooms(id).then(({ data }) => this.setState({
      rooms: data,
    }));
  }

  deleteBuilding() {
    const { buildings } = this.state;
    const b = buildings.find(x => x.selected);
    return deleteBuilding(b.id).then(() => {
      this.setState(state => ({ buildings: state.buildings.filter(x => x.id !== b.id) }));
    });
  }

  deleteRoom() {
    const { buildings, rooms } = this.state;
    const b = buildings.find(x => x.selected);
    const r = rooms.find(x => x.selected);
    return deleteRoom(b.id, r.id).then(() => {
      this.setState(state => ({ rooms: state.rooms.filter(x => x.id !== r.id) }));
    });
  }

  selectBuilding(id) {
    this.setState(state => ({
      buildings: state.buildings.map(b => ({
        ...b,
        selected: b.id === id,
      })),
    }), () => {
      this.getRooms(id);
    });
  }

  selectRoom(id) {
    this.setState(state => ({
      rooms: state.rooms.map(b => ({
        ...b,
        selected: b.id === id,
      })),
    }));
  }

  updateBuildingState(data) {
    this.setState(state => ({ buildings: _.sortBy([...state.buildings.map(x => (x.id === data.id ? data : x))], 'id') }));
  }

  updateRoomState({ isNew, ...data }) {
    if (!isNew) {
      this.setState(state => ({ rooms: _.sortBy([...state.rooms.map(x => (x.id === data.id ? data : x))], 'id') }));
    } else {
      this.setState(state => ({ rooms: _.sortBy([...state.rooms.filter(x => x.id), data], 'id') }));
    }
  }

  updateBuilding(bd) {
    return new Promise((resolve) => {
      updateBuilding(bd).then(({ data }) => {
        this.updateBuildingState({ ...data, selected: true });
        resolve();
      }).catch((e) => {
        resolve(e.response.data);
      });
    });
  }


  addBuilding(bd) {
    return addBuilding(bd).then(({ data }) => {
      this.setState(state => ({ buildings: [...state.buildings, data] }));
    });
  }

  addRoom(rd) {
    this.setState(state => ({ rooms: [...state.rooms, { ...rd, selected: true }] }));
  }

  addUpdateRoom(bd) {
    const { buildings } = this.state;
    const b = buildings.find(x => x.selected);
    return new Promise((resolve) => {
      addRoom({ ...bd, buildingId: b.id }).then(({ data }) => {
        this.updateRoomState({ ...data, selected: true, isNew: !bd.id });
        resolve();
      }).catch((e) => {
        resolve(e.response.data);
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          addBuilding: this.addBuilding,
          addRoom: this.addRoom,
          addUpdateRoom: this.addUpdateRoom,
          deleteBuilding: this.deleteBuilding,
          deleteRoom: this.deleteRoom,
          selectBuilding: this.selectBuilding,
          selectRoom: this.selectRoom,
          updateBuilding: this.updateBuilding,
        }}
      >
        {children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer };

RoomProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
