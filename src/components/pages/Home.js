import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 20,
      borderRadius: 10,
      boxShadow: '0 3px 9px 3px rgba(255, 105, 135, .3)',
      color: 'blue',
      height: 40,
      padding: '0 10px',
    },
  });
function Home() {
    // const classes = useStyles(); 
 
    return ({
        <>
        <div className={classes.root}> 
        <Button variant="contained">Home</Button>
        <Button variant="contained" color="primary">
       Posts       
        // {/* </Button> */}     
        //    {/* <Button className={classes.root}>Styled with Hook</Button> */}
        <React.Fragment>
  <Button color="red">Red</Button>
  <Button color="blue">Blue</Button>
</React.Fragment>
      </div> 
    
 </>
    )
    }
}

export default Home;
