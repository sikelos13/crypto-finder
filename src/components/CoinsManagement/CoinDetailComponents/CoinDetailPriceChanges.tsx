import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailedNormalized } from '../../../api/types/CoinDetailedNormalized';
import { priceChangesOptions } from '../../../constants/PriceChangesOptions';
import { generateId } from '../../../utils/GenerateId';

interface CoinDetailPriceChangesProps {
    coin: CoinDetailedNormalized;
}

const CoinDetailPriceChanges: React.FC<CoinDetailPriceChangesProps> = (({ coin }: CoinDetailPriceChangesProps) => (
    <>
        <Box component='h4' textAlign="left">Price changes (USD)</Box>
        <Box display="flex" justifyContent="flex-start">
            {Object.keys(priceChangesOptions).map((name: string) => {
                const uniqueId = generateId();

                return (
                    <Box key={uniqueId} >
                        <Box display="flex" flexDirection="column" p="5px">
                            <Box component={'span'} fontWeight="bold" mr="5px">{priceChangesOptions[name]}</Box>
                            <Box component={'span'}>{coin.market_data[name]}</Box>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    </>
))


export default CoinDetailPriceChanges;