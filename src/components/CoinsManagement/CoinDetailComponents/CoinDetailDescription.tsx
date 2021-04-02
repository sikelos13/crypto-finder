import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailedNormalized } from '../../../api/types/CoinDetailedNormalized';

interface CoinDetailDescriptionProps {
    coin: CoinDetailedNormalized;
}

const CoinDetailDescription: React.FC<CoinDetailDescriptionProps> = (({ coin }: CoinDetailDescriptionProps) => (
    <Box display="flex" flexDirection="column">
        <Box fontWeight='bold'>Description</Box>
        <Box component="p" textAlign="justify" maxHeight="280px" style={{ overflowY: 'auto', padding: '5px', maxWidth: '500px'}} dangerouslySetInnerHTML={{ __html: coin.description }}></Box>
    </Box>
))


export default CoinDetailDescription;