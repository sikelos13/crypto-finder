import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailedNormalized } from '../../../api/types/CoinDetailedNormalized';

interface CoinDetailDescriptionProps {
    coin: CoinDetailedNormalized;
}

const CoinDetailDescription: React.FC<CoinDetailDescriptionProps> = (({ coin }: CoinDetailDescriptionProps) => (
    <Box display="flex" flexDirection="column">
        <Box fontWeight='bold'>Description</Box>
        <Box 
            component="p" 
            textAlign="justify" 
            maxHeight="320px" 
            maxWidth="500px" p="5px" 
            style={{ overflowY: 'auto'}} 
            dangerouslySetInnerHTML={{ __html: coin.description }}>
        </Box>
    </Box>
))


export default CoinDetailDescription;