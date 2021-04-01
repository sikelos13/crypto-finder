import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailed } from '../../../api/types/CoinDetailed';
import { DateFormat } from "../../../utils/DateFormat";

interface CoinDetailHighLowPriceProps {
    coin: CoinDetailed;
}

const CoinDetailHighLowPrice: React.FC<CoinDetailHighLowPriceProps> = (({ coin }: CoinDetailHighLowPriceProps) => (
    <>
        {coin && coin.market_data &&
            <Box display="flex" justifyContent="center" mt="10px">
                {coin.market_data.ath && coin.market_data.ath['usd'] &&
                    <Box display="flex" flexDirection="column" p="5px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Highest price since creation:</Box>
                        <Box component={'span'}>{coin.market_data.ath['usd']} USD on {DateFormat.normalize(coin.market_data.ath_date['usd'])}</Box>
                    </Box>
                }
                {coin.market_data.atl && coin.market_data.atl['usd'] &&
                    <Box display="flex" flexDirection="column" p="5px">
                        <Box component={'span'} fontWeight="bold" mr="5px">Highest price since creation:</Box>
                        <Box component={'span'}>{coin.market_data.atl['usd']} USD on {DateFormat.normalize(coin.market_data.atl_date['usd'])}</Box>
                    </Box>
                }
            </Box>
        }
    </>
))


export default CoinDetailHighLowPrice;