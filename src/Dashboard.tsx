import React, { useRef, useState } from 'react';
import {Button, Grid, TextField} from '@mui/material';
import ServiceCard from './components/service-card';

import { Service } from './ServiceModel';



export const Dashboard = (props:any) => {

    let [services, setServices] = useState<Service[]>([]);
    const inputRef = useRef<HTMLInputElement>();
    const id = useRef(0);

    const addService = () => {

        id.current = Number(id.current + 1);
        //const path = inputRef1.current?.value;

         const newService:Service = {
            id: id.current,
            name:'WeatherForecast',
            url: 'WeatherForecast',
            type: 'Service',
            color:selectColor(Math.floor(Math.random() * 999)),
            status:'inProgress'
        }

        setServices([...services, newService]);

    }

    function selectColor(number:any) {
        const hue = number * 137.508; // use golden angle approximation
        return `hsl(${hue},50%,75%)`;
      }

    return (
        <div style={{margin:20}}>
            <Grid container spacing={2} rowSpacing={4} >
                    
                <Grid container item xs={12} md={12} lg={12} justifyContent={'center'} >
                    <TextField id="outlined-basic" label="Enter Service URL" variant="outlined" style = {{width: 500,padding:5}} inputRef={inputRef} />
                    <Button variant="contained" onClick={addService}>Add</Button>
                </Grid>
                
                <Grid item xs={12} md={12} lg={12}>
                </Grid>

                {services.map( (item:Service) => <Grid item xs={5} md={2} lg={2} key={item.id}>
                    <ServiceCard data={item} />
                </Grid>)}
                
            
            </Grid>
        </div>
 );
}
