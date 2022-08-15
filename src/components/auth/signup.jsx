import { DialogActions, DialogContent, Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Error from 'components/Error/error';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from 'components/gql/createUser';

function Signup() {
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
    const [validFirstname, setValidFirstname] = useState(false);
    const [validLastName, setValidLastName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [createUser, {loading, error: mutationError}] = useMutation(CREATE_USER, {
        variables: {
            "name": firstName + " " + lastName,
            "email": email,
            "password": password
        }
    });
    const validate = () => {
        let isValid = true;
        if(email === "") {
            setValidEmail(true);
            isValid = false;
        };
        if(lastName === "") {setValidLastName(true);  isValid = false;};
        if(firstName === "") {setValidFirstname(true);  isValid = false;};
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
            createUser();
            navigate("/feed");
        }
    }

    if(loading) return <p>Creating user....</p>
    if(mutationError) return <p>Sign up failed, try again.</p>
    return (
        <>
            <Button variant='outlined' onClick={handleClickOpen}>
                Sign up
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle align='center'>Create an account</DialogTitle>
                <DialogContent >
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                error={validFirstname}
                                autoFocus
                                id="firstName"
                                label="First Name"
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}/>
                            <TextField
                                error={validLastName}
                                autoFocus
                                id="lastName"
                                label="Last Name"
                                type="text"
                                onChange={(e) => setLastName(e.target.value)}/>
                        </Stack>
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
                    <Button onClick={onSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Signup;