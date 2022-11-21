import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: '22vh',
    color: theme.palette.text.secondary,
}));

const ControlPanel = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: '88vh',
    color: theme.palette.text.secondary,
}));

const minDiv = function(){
    return (<div>hello</div>)
}

let blockStyle = {border : "2px solid black" , height : "22vh" , margin : "2px"  }
let panelStyle = {border : "2px solid black" , height : "88vh" , margin : "2px"  }

function FormRow2() {
    return (

        <React.Fragment>
          
                <Grid style = {blockStyle} xs={3.9}>
                    Item 1
                </Grid>
                <Grid style = {blockStyle}  xs={3.9}>
                    Item 2
                </Grid>
                <Grid style = {blockStyle}  xs={3.9}>
                    Item 3
                </Grid>
           

          
                <Grid style = {blockStyle} xs={3.9}>
                    Item 1
                </Grid>
                <Grid style = {blockStyle}  xs={3.9}>
                    Item 2
                </Grid>
                <Grid style = {blockStyle}  xs={3.9}>
                    Item 3
                </Grid>

                
                <Grid style = {blockStyle} xs={3.9}>
                    Item 1
                </Grid>
                <Grid style = {blockStyle}  xs={3.9}>
                    Item 2
                </Grid>
                <Grid style = {blockStyle}  xs={3.9}>
                    Item 3
                </Grid>
         

                <Grid style = {blockStyle} xs={3.9}>
                    Item 1
                </Grid>
                <Grid style = {blockStyle}  xs={3.9}>
                    Item 2
                </Grid>
                <Grid style = {blockStyle}  xs={3.9}>
                    Item 3
                </Grid>
            

        </React.Fragment>
    );
}


function FormCp() {
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <ControlPanel>Control Panel</ControlPanel>
            </Grid>
        </React.Fragment>
    );
}

export default function NestedGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container direction="row">
                <Grid spacing = {1} container xs = {9}>

                <FormRow2/>
                
                </Grid>
                <Grid style = {panelStyle} xs = {3}>Control Panel
                
                
                
                
                
                
                </Grid>
          

            

            </Grid>
        </Box>
    );
}