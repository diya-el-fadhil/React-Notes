import React, { useState } from 'react'
import { TextField } from '@mui/material'
import {Typography} from '@mui/material'
import {Button} from '@mui/material'

const Third = (props) => {
    var[input,setInput] = useState()

    const inputHandler = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    var[displayinput,setDisplayinput] = useState()
        const displayHandler = () => {
            setDisplayinput(input)
        }

  return (
    <div style={{textAlign:'center'}}>
        <Typography variant="h3">Hello {displayinput}</Typography>
        <br/>
        <TextField label="Name" variant="outlined" onChange={inputHandler}/><br/>
        <Button variant='contained' onClick={displayHandler} style={{margin:'30px'}}>Display</Button>
        <Typography>Hi, My name is {props.data.name} and i am {props.data.age} years old</Typography>
    </div>
  )
}

export default Third