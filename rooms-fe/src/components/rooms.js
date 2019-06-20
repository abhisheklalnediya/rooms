import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import './styles.css';
import { Button } from 'antd';
import { RoomConsumer } from '../context';

const RoomItem = ({ room, onSelect }) => (
  <div className={`buildingItem ${room.selected ? 'selected' : ''}`} onClick={() => onSelect(room.id)}>
    <span className={`bHeader ${!room.flat_number ? 'faded' : ''}`}>
      {room.flat_number || 'New Room'}
    </span>
    <span>
      {`Type: ${room.room_type || ''}`}
    </span>
  </div>
);

class AddRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const values = this.state;
    values[e.target.name] = e.target.value;
    this.setState(values);
  }

  onSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const defRoom = {
      flat_number: null,
      room_type: null,
      bathrooms_count: null,
      area: null,
      rent: null,
      maintenance_amount: null,
      electricity_account_number: null,
    };
    onSubmit(defRoom);
  }

  render() {
    return (
      <div className="addRoomFrm">
        <Button onClick={this.onSubmit} type="primary">Add New Room</Button>
      </div>
    );
  }
}

const Rooms = ({
  buildings, rooms, selectRoom, addRoom,
}) => {
  const building = buildings.find(x => x.selected);
  const newRoomExists = rooms.find(x => !x.id);
  return (
    (building
      && (
        <React.Fragment>
          <div className="buildings-group">
            {rooms.map(x => (
              <RoomItem key={x.id} room={x} onSelect={selectRoom} />))}
          </div>
          {!rooms.length && <span className="empty">No Rooms in this Building</span>}
          {!newRoomExists && <AddRoom onSubmit={addRoom} />}
        </React.Fragment>
      )) || <span className="empty">No Building Selected</span>
  );
};

export default () => (
  <RoomConsumer>
    {data => (
      <div className="rooms">
        <h3>Rooms</h3>
        <Rooms {...data} />
      </div>

    )}
  </RoomConsumer>

);


RoomItem.propTypes = {
  room: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

AddRoom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
