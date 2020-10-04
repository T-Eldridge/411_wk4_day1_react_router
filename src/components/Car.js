import React from 'react'
import cars from '../cars.json'
import {Container, Paper, Chip, Typography, makeStyles} from '@material-ui/core';
// import material ui components here //
// Container, Paper, Chip //

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    containerSm: {
        padding: '40px',
    },
    carName: {
        fontSize: 20,
        fontWeight: 'bold',
    }
}))


const Car = (props) => {
    const classes = useStyles()
    const id = parseInt(props.match.params.id)
    const foundcar = cars.find(car => id === car.id)
    console.log(foundcar)
    return (
       <Container className={classes.containerLarge} maxWidth="sm">
           <Paper className="car-container">
               <Container maxWidth='xs' className={classes.containerSm}>
                   <Typography className={classes.carName}>
                       {foundcar.Name}
                   </Typography>
                   <br/>
                   <Chip label={`ID: ${foundcar.id}`}/>
                   <Chip label={`MPG: ${foundcar.Miles_per_Gallon}`}/>
                   <Chip label={`Cylinders: ${foundcar.Cylinders}`}/>
                   <Chip label={`Displacement: ${foundcar.Displacement}`}/>
                   <Chip label={`Horsepower: ${foundcar.Horsepower}`}/>
                   <Chip label={`Weight: ${foundcar.Weight_in_lbs}`}/>
                   <Chip label={`Acceleration: ${foundcar.Acceleration}`}/>
                   <Chip label={`Year: ${foundcar.Year}`}/>
                   <Chip label={`Origin: ${foundcar.Origin}`}/>
               </Container>

           </Paper>
        
       </Container>
    )
}

export default Car