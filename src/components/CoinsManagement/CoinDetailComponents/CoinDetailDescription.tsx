import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailedNormalized } from '../../../api/types/CoinDetailedNormalized';

interface CoinDetailDescriptionProps {
    coin: CoinDetailedNormalized;
}

const CoinDetailDescription: React.FC<CoinDetailDescriptionProps> = (({ coin }: CoinDetailDescriptionProps) => (
    <>
        {coin.description
            ? <Box display="flex" flexDirection="column">
                <Box fontWeight='bold'>Description</Box>
                <Box component="p" textAlign="justify" maxHeight="280px" style={{ overflowY: 'auto', padding: '10px' }} dangerouslySetInnerHTML={{ __html: coin.description }}></Box>
            </Box>
            : <Box component="p">No description available</Box>
        }
    </>
))


export default CoinDetailDescription;