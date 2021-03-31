import React, { memo, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Coin } from '../api/types/Coin';

interface CoinsListProps {
    coinsList: Coin[];
    handleCoinDetails: (id: string) => void;
}

const CoinsList: React.FC<CoinsListProps> = memo(({ coinsList, handleCoinDetails }: CoinsListProps) => (
    <>
        {coinsList && coinsList.length > 0
            ? coinsList.map((coin: Coin) => {
                return (
                    <Box key={coin.id} width="250px" display="block" height="420px" p={1}>
                        <Card style={{ height: "400px", overflowY: "auto" }}>
                            <CardContent>
                                <Typography color="textPrimary">{coin.name}</Typography>
                                <Box display="flex" justifyContent="center" p="5px">
                                    {coin.image
                                        ? <img src={coin.image} alt="preview-poster" width="200" height="250" className="Coin_Image" />
                                        : <Box width="200px" height="250px" textAlign="center" fontSize="20px" fontWeight="bold">Without poster</Box>
                                    }
                                </Box>
                                <Typography color="textSecondary">
                                    Score: {coin.name}
                                </Typography>
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
                )
            })
            : <Box alignSelf="center" fontSize="20px" fontWeight="bold">No coins to show</Box>
        }
    </>
));

export default CoinsList;