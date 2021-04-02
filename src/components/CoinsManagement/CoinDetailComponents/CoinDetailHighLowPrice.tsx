import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailedNormalized } from '../../../api/types/CoinDetailedNormalized';

interface CoinDetailHighLowPriceProps {
    coin: CoinDetailedNormalized;
}

const CoinDetailHighLowPrice: React.FC<CoinDetailHighLowPriceProps> = (({ coin }: CoinDetailHighLowPriceProps) => (
    <>
        {coin.market_data &&
            <Box display="flex" justifyContent="space-evenly" p="5px">
                <Box display="flex" flexDirection="column">
                    <Box display="flex" p="5px" flexDirection="column" alignItems="center">
                        <Box component={'span'} fontWeight="bold" mr="5px">Highest price since creation:</Box>
                        <Box component={'span'}>{coin.market_data.highest_price_since_creation}</Box>
                    </Box>

                    <Box display="flex" p="5px" flexDirection="column" alignItems="center">
                        <Box component={'span'} fontWeight="bold" mr="5px">Lowest price since creation:</Box>
                        <Box component={'span'}>{coin.market_data.lowest_price_since_creation}</Box>
                    </Box>
                </Box>

                <Box display="flex" flexDirection="column">
                    <Box display="flex" p="5px" flexDirection="column" alignItems="center">
                        <Box component={'span'} fontWeight="bold" mr="5px">Highest price on the last day:</Box>
                        <Box component={'span'}>{coin.market_data.high_24h}</Box>
                    </Box>

                    <Box display="flex" p="5px" flexDirection="column" alignItems="center">
                        <Box component={'span'} fontWeight="bold" mr="5px">Lowest price on the last day:</Box>
                        <Box component={'span'}>{coin.market_data.low_24h}</Box>
                    </Box>
                </Box>
            </Box>
        }
    </>
))


export default CoinDetailHighLowPrice;