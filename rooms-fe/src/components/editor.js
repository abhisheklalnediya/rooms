import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { RoomConsumer } from '../context';
import BuildingEditorForm from './editorBuilding';
import RoomEditorForm from './editorRoom';

function Editors({
  buildings, rooms, deleteBuilding, updateBuilding, addUpdateRoom, deleteRoom,
}) {
  const selectedBuilding = buildings.find(x => x.selected);
  const selectedRoom = rooms.find(x => x.selected);
  return (
    <React.Fragment>
      {selectedBuilding
      && (
        <BuildingEditorForm
          onDelete={deleteBuilding}
          onSubmit={updateBuilding}
          initialValues={selectedBuilding}
        />
      )}
      {selectedRoom
      && (
        <RoomEditorForm
          onDelete={deleteRoom}
          onSubmit={addUpdateRoom}
          initialValues={selectedRoom}
        />
      )}
      {!selectedBuilding && <span className="empty">No Building Selected</span>}
    </React.Fragment>
  );
}

export default () => (
  <RoomConsumer>
    {data => (
      <React.Fragment>
        <div className="editor">
          <Editors {...data} />
        </div>
      </React.Fragment>
    )}
  </RoomConsumer>

);


Editors.propTypes = {
  addUpdateRoom: PropTypes.func.isRequired,
  buildings: PropTypes.array.isRequired,
  deleteBuilding: PropTypes.func.isRequired,
  deleteRoom: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired,
  updateBuilding: PropTypes.func.isRequired,
};
