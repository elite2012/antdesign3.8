import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';


export default function buttons() {
    return (
      <div className="Buttons">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    );
}
