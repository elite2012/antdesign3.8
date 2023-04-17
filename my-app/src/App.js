import React from 'react';
import { Button } from 'antd';
//import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
  </div>
);

export default App;