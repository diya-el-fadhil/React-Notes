import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import './Second.css';

const Second = () => {
  const [name, setName] = useState('DEF');

  const changeName = (newName) => {
    setName(newName);
  }

  return (
    <div className="second-container">
      <Typography variant="h3">Welcome to {name}</Typography>
      <br/>
      <Button variant="text" onClick={() => { changeName('Home') }}>HOME</Button> &nbsp;
      <Button variant="text" onClick={() => { changeName('Contact') }}>Contact</Button>
    </div>
  )
}

export default Second;
