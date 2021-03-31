import React from 'react';
import { Box, FormLabel } from '@material-ui/core';

const Header = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box component="h2" fontWeight="500" fontSize="2rem" color="#3569b8">Coins Finder</Box>
        </Box>
    )
}


export default Header;