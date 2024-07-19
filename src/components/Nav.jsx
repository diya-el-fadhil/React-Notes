import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Web App
          </Typography>
          <Button color="secondary" variant="container">
            <Link to="/" className="nav-link">Home</Link>
          </Button>
          <Button color="secondary" variant="container">
            <Link to="/s" className="nav-link">Buttons</Link>
          </Button>
          <Button color="secondary" variant="container">
            <Link to="/t" className="nav-link">Inputs</Link>
          </Button>
          <Button color="secondary" variant="container">
            <Link to="/ta" className="nav-link">Table</Link>
          </Button>
          <Button color="secondary" variant="container">
            <Link to="/c" className="nav-link">Cards</Link>
          </Button>
          <Button color="secondary" variant="container">
            <Link to="/i" className="nav-link">Add Product</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
