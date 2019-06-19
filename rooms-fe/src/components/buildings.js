import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Button } from 'antd';
import { RoomConsumer } from '../context';

const BuildingItem = ({ building, onSelect }) => (
  <div className={`buildingItem ${building.selected ? 'selected' : ''}`} onClick={() => onSelect(building.id)}>
    <span className="bHeader">
      {building.name}
    </span>
    <span>
      {`id: ${building.id}`}
    </span>
  </div>
);

class AddBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    console.log(e.target.name);
    const values = this.state;
    values[e.target.name] = e.target.value;
    this.setState(values);
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const defBuilding = {
      name: 'No Name',
      address: 'No Address',
    };
    onSubmit(defBuilding);
  }

  render() {
    return (
      <div className="addBuildingFrm">
        <Button onClick={this.onSubmit} type="primary">Add New Building</Button>
      </div>
    );
  }
}


export default () => (
  <RoomConsumer>
    {data => (
      <React.Fragment>
        <div className="buildings">
          <div className="buildings-group">
            {data.buildings.map(x => (
              <BuildingItem key={x.id} building={x} onSelect={data.selectBuilding} />))}
          </div>
          {!data.buildings.length && <span className="empty">Start by adding a Building</span>}
          <AddBuilding onSubmit={data.addBuilding} />
        </div>
      </React.Fragment>
    )}
  </RoomConsumer>

);


BuildingItem.propTypes = {
  building: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

AddBuilding.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
