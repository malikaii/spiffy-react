import { DialogActions, DialogContent, Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Error from 'components/Error/error';

function Login() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const validate = () => {
        let isValid = true;
        if(email === "") {
            setValidEmail(true);
            isValid = false;
        };
        if(password === "") {setValidPassword(true);  isValid = false;};
        return isValid;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!validate()){
            setOpen(true);
            setError(true);
        }
        else{
            navigate("/feed");
        }
    }
    return (
        <>
            <Button variant='outlined' onClick={handleClickOpen}>
                Login
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle align='center'>Log in </DialogTitle>
                <DialogContent >
                    <Stack spacing={2}>
                       <TextField
                       error={validEmail}
                        autoFocus
                        id="email"
                        label="Email Address"
                        type="email"
                        onChange={(e) => {setEmail(e.target.value)}}/>

                        <TextField
                        error={validPassword}
                        autoFocus
                        id="password"
                        label="Password"
                        type="password"
                        onChange={(e) => {setPassword(e.target.value)}}/>
                        {error && <Error/>} 
                    </Stack>
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={onSubmit}>Enter</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Login;