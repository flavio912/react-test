import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Homepage() {
  return (
    <div className="App d-flex flex-grow-1">
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <Button className="purple mr-3">
          <Link to="/all">Button A</Link>
        </Button>
        <Button className="orange">
          <Link to="/us">Button B</Link>
        </Button>
      </div>
    </div>
  );
}

export default Homepage;