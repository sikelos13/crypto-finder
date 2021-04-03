import React from 'react';
import { Box } from '@material-ui/core';
import { CoinSimple } from '../../../api/types/CoinSimple';
import history from "../../../history";
import SkeletonLoaderSimilarCoins from '../../Loaders/SkeletonLoaderSimilarCoins';

interface CoinDetailSimilarCoinsProps {
    similarCoinsList: CoinSimple[];
}

const CoinDetailSimilarCoins: React.FC<CoinDetailSimilarCoinsProps> = (({ similarCoinsList }: CoinDetailSimilarCoinsProps) => {

    const handleLink = (id: string) => {
        if (id && id !== "") {
            history.push(`/coin/${id}/details`, id)
        }
    }

    return (
        <Box maxWidth="1300px" mt="10px">
            {similarCoinsList
                ? <>
                    <Box fontWeight="bold" fontSize="20px" p="10px">More coins</Box>
                    <Box display="flex" flexDirection="row" flexWrap="wrap">
                        {similarCoinsList.length > 0
                            ? similarCoinsList.map((coin: CoinSimple) => {
                                return (
                                    <Box key={coin.id} p="10px" onClick={() => handleLink(coin.id)} style={{ cursor: 'pointer' }}>
                                        {coin.name}({coin.symbol})
                                    </Box>
                                )
                            })
                            : <Box alignSelf="center" fontSize="15px" p="10px">No coins to show</Box>
                        }
                    </Box>
                </>
                : <SkeletonLoaderSimilarCoins />
            }
        </Box>
    )
})


export default CoinDetailSimilarCoins;