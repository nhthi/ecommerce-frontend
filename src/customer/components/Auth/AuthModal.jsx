import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react'
import Login from './Login';
import { useLocation, useSearchParams } from 'react-router-dom';
import Register from './Register';
import ForgortPassword from './ForgotPassword';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    outline: 'none',
    p: 4,
    borderRadius: 5
};

const AuthModal = ({ open, handleClose }) => {

    const location = useLocation()
    const [searchParams] = useSearchParams();

    const openUrl = searchParams.get('open');

    return (
        <div>
            <Modal
                open={open || openUrl==='true'}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {location.pathname === '/account/register' ? <Register handleClose={handleClose} /> : location.pathname === '/account/login' ? <Login handleClose={handleClose} /> : location.pathname === '/account/forgotPassword/true' ? <ForgortPassword handleClose={handleClose} /> : <ForgortPassword handleClose={handleClose} />}
                </Box>
            </Modal>
        </div>
    );
}

export default AuthModal
