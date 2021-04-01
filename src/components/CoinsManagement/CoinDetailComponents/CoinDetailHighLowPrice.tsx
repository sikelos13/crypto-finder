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
            <Box display="flex"  justifyContent="space-evenly" p="5px">
                <Box display="flex" flexDirection="column">
                    <Box display="flex" p="5px" flexDirection="column" alignItems="center">
                        <Box component={'span'} fontWeight="bold" mr="5px">Highest price since creation:</Box>
                        {coin.market_data.ath['usd']
                            ? <Box component={'span'}>{coin.market_data.ath['usd']} USD on {DateFormat.normalize(coin.market_data.ath_date['usd'])}</Box>
                            : <Box component={'span'}>N/A</Box>
                        }
                    </Box>

                    <Box display="flex" p="5px" flexDirection="column" alignItems="center">
                        <Box component={'span'} fontWeight="bold" mr="5px">Lowest price since creation:</Box>
                        {coin.market_data.atl['usd']
                            ? <Box component={'span'}>{coin.market_data.atl['usd']} USD on {DateFormat.normalize(coin.market_data.atl_date['usd'])}</Box>
                            : <Box component={'span'}>N/A</Box>
                        }
                    </Box>
                </Box>

                <Box display="flex" flexDirection="column">
                    <Box display="flex" p="5px" flexDirection="column" alignItems="center">
                        <Box component={'span'} fontWeight="bold" mr="5px">Highest price on the last day:</Box>
                        <Box component={'span'}>{coin.market_data.high_24h['usd'] ? coin.market_data.high_24h['usd'] : 'N/A'} USD</Box>
                    </Box>

                    <Box display="flex" p="5px" flexDirection="column" alignItems="center">
                        <Box component={'span'} fontWeight="bold" mr="5px">Lowest price on the last day:</Box>
                        <Box component={'span'}>{coin.market_data.low_24h['usd'] ? coin.market_data.low_24h['usd'] : 'N/A'} USD</Box>
                    </Box>
                </Box>
            </Box>
        }
    </>
))


export default CoinDetailHighLowPrice;