import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function SwitchExample() {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
      <Form.Check
        disabled
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
      />
    </Form>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div>

        <SwitchExample />
        <Button as="a" variant="primary">
          Button as link
        </Button>
      </header>
    </div>
  );
}

export default App;
