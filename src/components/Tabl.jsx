import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Tabl() {

    var [people,setPeople] = useState([])

    useEffect(()=>{
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                console.log(res.data)
                setPeople(res.data)
            })
            .catch((error)=>{console.log(error);})
    },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
                <TableCell style={{color:'red'}}>NAME</TableCell>
                <TableCell style={{color:'red'}}>EMAIL</TableCell>
                <TableCell style={{color:'red'}}>Username</TableCell>
                <TableCell style={{color:'red'}}>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {people.map((val,i) => {
                return(
                    <TableRow>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.email}</TableCell>
                        <TableCell>{val.username}</TableCell>
                        <TableCell>{val.address.city}</TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
