import React from 'react'
import { Alert } from 'react-bootstrap';

const WMAlert = ({alert, onClose}) => {

    setTimeout(() => {
        onClose()
    }, 3000);
    return (
        <>
          <Alert variant="primary" onClose={onClose} dismissible>{alert.msg}</Alert>  
        </>
    )
}

export default WMAlert
