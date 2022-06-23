import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'
import background from './test.jfif';
import FormGroup from '@mui/material/FormGroup';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Login(username) {
    const paperStyle = {
        padding: 20, height: '100', width: 200, margin: '20px auto'
    }
    // const avatarStyle = {
    //     backgroundColor: 'pink',
    // }
    const imageStyle = {
        marginTop: '20px',
        width: '100px', height: '100px'
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <img src={background} style={imageStyle} alt="Background" />
                    <h1>test</h1>
                    {/* <Avatar style={avatarStyle} ><EmailOutlinedIcon fontSize="small" /></Avatar> */}
                    <h4>test@gmail.com</h4>
                </Grid>
                <FormGroup>
                    {/* <FormControlLabel control={<Checkbox defaultChecked />} label="follow me" /> */}
                </FormGroup>
                <Button style={{ marginTop: '90px' }} type='submit' color='primary' fullWidth variant="contained">Edit profile</Button>
            </Paper>
        </Grid>
    )
}
export default Login