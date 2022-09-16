import React, { useEffect, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LinearProgress } from '@mui/material';
import useInterval from '../useInterval';
import { Box } from '@mui/system';
import { Service } from '../ServiceModel';

let interval:any = 5000;

const ServiceCard = (props:any) => {

  const [progress, setProgress] = useState(0);
  const isRunning = useRef(false);
  
  useInterval(async () => {
    
    const result:any = await fetchServiceProgress();
    isRunning.current = true;
    setProgress(100);
    interval = null;

    if(result.status == '200')
     {
       setProgress(100);
       interval = null;
     }

  }, interval);


  const fetchServiceProgress = async () => {

    let response;
    let data;
    try{
      response = await fetch('WeatherForecast');
      data = await response.arrayBuffer();
      debugger;

    }catch(error){
      console.log(error);
    }
   
    return data;

  }


    return (
        <Card sx={{ maxWidth: 245 }}>
          <div style={{background:props.data.color, width:'100%', height:'100px'}}></div>
            <Box hidden={isRunning.current}>          
              <LinearProgress />
            </Box>

          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.data.name}
            </Typography>
            <Typography variant="inherit" color="text.secondary">
              This is a service created using Devhub
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Delete</Button>
          </CardActions>
          
        </Card>
      );
    }

export default ServiceCard;