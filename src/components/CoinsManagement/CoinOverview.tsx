import React, { memo } from 'react';
import { Box, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
                <Card style={{ height: "400px", width: "300px", overflowY: "auto" }}>
                    <CardContent style={{ height: '340px' }}>
                        <Box fontWeight="bold">{coin.name}</Box>
                        <Box display="flex" justifyContent="center" p="5px" m={1}>
                            {coin.image
                                ? <img src={coin.image} alt="coin-image" width="60" height="60" className="Coin_Image" />
                                : <Box width="60px" height="60px" textAlign="center" fontSize="15px" fontWeight="bold">Without poster</Box>
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
            }
        </>
    )
})
export default CoinOverview;