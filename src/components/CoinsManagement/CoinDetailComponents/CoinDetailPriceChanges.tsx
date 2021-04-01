import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailed } from '../../../api/types/CoinDetailed';
import { priceChangesOptions } from '../../../constants/PriceChangesOptions';
import generateId from '../../../utils/GenerateId';

interface CoinDetailPriceChangesProps {
    coin: CoinDetailed;
}

const CoinDetailPriceChanges: React.FC<CoinDetailPriceChangesProps> = (({ coin }: CoinDetailPriceChangesProps) => (
    <>
        {coin && coin.market_data &&
            <>
                <Box component='h4' textAlign="center">Price changes (USD) </Box>
                <Box display="flex" justifyContent="center" pl="10px">
                    {Object.keys(priceChangesOptions).map((name: string) => {
                        const uniqueId = generateId();

                        return (
                            <Box key={uniqueId} >
                                {coin.market_data[name]&&
                                    <Box key={uniqueId} display="flex" flexDirection="column" p="5px">
                                        <Box component={'span'} fontWeight="bold" mr="5px">{priceChangesOptions[name]}</Box>
                                        <Box component={'span'}>{coin.market_data[name]}</Box>
                                    </Box>
                                }
                            </Box>
                        )})
                    }
                </Box>
            </>
        }
    </>
))


export default CoinDetailPriceChanges;