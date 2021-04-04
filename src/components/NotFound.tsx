import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

export const Notfound = () => {
    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        setRedirect(true);
    };

    return (
        <Box width="100%" height="720px" display="flex" justifyContent="center">
            <div className="boo-wrapper">
                <div className="boo">
                    <div className="face"></div>
                </div>
                <div className="shadow"></div>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                    <h1>Page not found</h1>
                    <p>
                        We are very sorry for any inconvenience
            </p>
                    <Button color="primary" onClick={handleClick}>Back to coins view</Button>
                </Box>
            </div>
            {redirect ? <Redirect to='/coins' /> : null}
        </Box>
    )
};

export default Notfound;
