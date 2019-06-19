import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Buildings from './components/buildings';
import Rooms from './components/rooms';
import Editor from './components/editor';

import { RoomProvider } from './context';

const App = () => (
  <div className="App">
    <RoomProvider>
      <h2 className="head">
        Rooms
      </h2>
      <div className="container">
        <Buildings />
        <Rooms />
        <Editor />
      </div>
    </RoomProvider>
  </div>
);


export default App;
