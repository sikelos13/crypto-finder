import React, { memo } from 'react';
import { Box } from '@material-ui/core';
import { Coin } from '../api/types/Coin';
import CoinOverview from './CoinsManagement/CoinOverview';

interface CoinsListProps {
    coinsList: Coin[];
}

const CoinsList: React.FC<CoinsListProps> = memo(({ coinsList }: CoinsListProps) => (
    <>
        {coinsList && coinsList.length > 0
            ? coinsList.map((coin: Coin) => {
                return (
                    <Box key={coin.id} width="300px" height="420px" p={1}>
                        <CoinOverview coin={coin} />
                    </Box>
                )
            })
            : <Box alignSelf="center" fontSize="20px" fontWeight="bold">No coins to show</Box>
        }
    </>
));

export default CoinsList;