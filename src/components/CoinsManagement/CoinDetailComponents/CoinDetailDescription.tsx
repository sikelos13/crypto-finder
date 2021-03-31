import React from 'react';
import { Box, FormLabel } from '@material-ui/core';
import { CoinDetailed } from '../../../api/types/CoinDetailed';

interface CoinDetailDescriptionProps {
    coin: CoinDetailed;
}

const CoinDetailDescription: React.FC<CoinDetailDescriptionProps> = (({ coin }: CoinDetailDescriptionProps) => (
    <>
        {coin && coin.description && coin.description['en']
            ? <Box display="flex" flexDirection="column">
                <Box fontWeight='bold'>Description</Box>
                <Box component="p" textAlign="justify" dangerouslySetInnerHTML={{__html: coin.description['en']}}></Box>
            </Box>
            : <Box component="p">No description available</Box>
        }
    </>
))


export default CoinDetailDescription;