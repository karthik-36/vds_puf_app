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

const minDiv = function () {
    return (<div>hello</div>)
}


let leftLegendStyle = { transform: "rotate(270deg) " , translate : " 122px 0px 0px"  , textAlign : "center" , fontWeight: "bold" , }
let headerStyle = { height: "3vh", margin: "2px", fontWeight: "bold" ,  }
let blockStyle = { border: "2px solid rgba(0,0,0,0.5)", height: "22vh", margin: "2px", borderRadius: "5px" }
let panelStyle = { border: "2px solid rgba(0,0,0,0.5)", height: "88vh", margin: "2px", }


function LeftLegend() {
    return (

        <React.Fragment>


            <Grid style={leftLegendStyle} xs={3}>
                APUFs Unordered
            </Grid>
            <Grid style={leftLegendStyle} xs={3}>
                APUFs Ordered
            </Grid>
            <Grid style={leftLegendStyle} xs={3}>
                Histogram
            </Grid>
            <Grid style={leftLegendStyle} xs={3}>
                Uniqueness
            </Grid>
           


        </React.Fragment>
    );
}


function FormRow() {
    return (

        <React.Fragment>


            <Grid style={headerStyle} xs={3.9}>
                Good PUF
            </Grid>
            <Grid style={headerStyle} xs={3.9}>
                U Fault Apufs
            </Grid>
            <Grid style={headerStyle} xs={3.9}>
                a Fault APUFs
            </Grid>


            <Grid style={blockStyle} xs={3.9}>
                Item 1
            </Grid>
            <Grid style={blockStyle} xs={3.9}>
                Item 2
            </Grid>
            <Grid style={blockStyle} xs={3.9}>
                Item 3
            </Grid>



            <Grid style={blockStyle} xs={3.9}>
                Item 4
            </Grid>
            <Grid style={blockStyle} xs={3.9}>
                Item 5
            </Grid>
            <Grid style={blockStyle} xs={3.9}>
                Item 6
            </Grid>


            <Grid style={blockStyle} xs={3.9}>
                Item 7
            </Grid>
            <Grid style={blockStyle} xs={3.9}>
                Item 8
            </Grid>
            <Grid style={blockStyle} xs={3.9}>
                Item 9
            </Grid>


            <Grid style={blockStyle} xs={3.9}>
                Item 10
            </Grid>
            <Grid style={blockStyle} xs={3.9}>
                Item 11
            </Grid>
            <Grid style={blockStyle} xs={3.9}>
                Item 12
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
                <Grid direction="column" container spacing={1}  xs={0.5}>

                    <LeftLegend/>

                </Grid>
                <Grid spacing={1} container xs={8.5}>

                    <FormRow />

                </Grid>
                <Grid style={panelStyle} xs={3}>Control Panel






                </Grid>




            </Grid>
        </Box>
    );
}