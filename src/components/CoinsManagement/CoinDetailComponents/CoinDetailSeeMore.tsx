import React from 'react';
import { Box } from '@material-ui/core';
import { CoinSimple } from '../../../api/types/CoinSimple';
import history from "../../../history";

interface CoinDetailSeeMoreProps {
    similarCoinsList: CoinSimple[];
}

const CoinDetailSeeMore: React.FC<CoinDetailSeeMoreProps> = (({ similarCoinsList }: CoinDetailSeeMoreProps) => {

    const handleLink = (id: string) => {
        if (id && id !== "") {
            history.push(`/coin/${id}/details`, id)
        }
    }

    return (
        <Box maxWidth="1150px" alignSelf="center" mt="10px">
            <Box fontWeight="bold" fontSize="20px" textAlign="center">More coins</Box>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                {similarCoinsList && similarCoinsList.length > 0
                    ? similarCoinsList.map((coin: CoinSimple) => {
                        return (
                            <Box key={coin.id} p="10px" onClick={() => handleLink(coin.id)} style={{ cursor: 'pointer' }}>
                                {coin.name}({coin.symbol})
                            </Box>
                        )
                    })
                    : <Box alignSelf="center" fontSize="15px">No coins to show</Box>
                }
            </Box>
        </Box>
    )
})


export default CoinDetailSeeMore;