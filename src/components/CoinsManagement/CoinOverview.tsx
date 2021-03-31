import React, { memo, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Coin } from '../../api/types/Coin';
import history from "../../history";

interface CoinOverviewProps {
    coin: Coin;
}

const CoinOverview: React.FC<CoinOverviewProps> = memo(({ coin }: CoinOverviewProps) => {

    const handleCoinDetails = (id: string) => {
        if (id && id !== "") {
            history.push(`/${id}/details`, id)
        }
    }

    return (
        <>
            {coin &&
                <Box key={coin.id} width="250px" display="block" height="420px" p={1}>
                    <Card style={{ height: "400px", width: "300px", overflowY: "auto" }}>
                        <CardContent>
                            <Typography color="textPrimary">{coin.name}</Typography>
                            <Box display="flex" justifyContent="center" p="5px" m={1}>
                                {coin.image
                                    ? <img src={coin.image} alt="coin-image" width="100" height="125" className="Coin_Image" />
                                    : <Box width="200px" height="250px" textAlign="center" fontSize="20px" fontWeight="bold">Without poster</Box>
                                }
                            </Box>
                            <Box component={'p'}>
                                <Box component={'span'} fontWeight="bold">Currency price:</Box> <Box component={'span'}>{coin.current_price} USD</Box>
                            </Box>
                            <Box component={'p'}>
                                <Box component={'span'} fontWeight="bold">Highest price in last 24 hours:</Box> <Box component={'span'}>{coin.high_24h} USD</Box>
                            </Box>
                            <Box component={'p'}>
                                <Box component={'span'} fontWeight="bold">Lowest price in last 24 hours:</Box> <Box component={'span'}>{coin.low_24h} USD</Box>
                            </Box>
                            <Box component={'p'}>
                                <Box component={'span'} fontWeight="bold">The price change in percentage of the last 24 hours:</Box> <Box component={'span'}>{coin.price_change_percentage_24h}%</Box>
                            </Box>
                        </CardContent>
                        <CardActions style={{ display: "flex", justifyContent: "center" }}>
                            <Button
                                size="small"
                                color="primary"
                                onClick={() => handleCoinDetails(coin.id)}>
                                Details
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            }
        </>
    )
})
export default CoinOverview;