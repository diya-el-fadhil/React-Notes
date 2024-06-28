import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'

export default function Cards() {

    const[product, setProduct] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            console.log(response.data)
            setProduct(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

  return (
    <div className='cardContainer'>
    {product.map((value, i) => (
        <Card sx={{ maxWidth: 400 }} key={i}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image={value.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {value.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value.description}
        </Typography>
      </CardContent>
    </Card>
    
    ))}
    </div>
  );
}
