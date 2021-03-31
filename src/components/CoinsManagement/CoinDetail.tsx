import React, { memo, useState, useEffect } from 'react';
import { Box, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CoinDetailed } from '../../api/types/CoinDetailed';
import history from "../../history";
import { fetchCoinApi, FetchCoinApiResponse } from '../../api/fetchCoin';
import { Redirect } from 'react-router-dom';
import CoinDetailDescription from './CoinDetailComponents/CoinDetailDescription';
import CoinDetailLinks from './CoinDetailComponents/CoinDetailLinks';
import CoinDetailCommunityData from './CoinDetailComponents/CoinDetailCommunityData';

const CoinDetail = () => {
    const [coin, setCoin] = useState<CoinDetailed>();
    const [isRedirecting, setRedirect] = useState(false);

    useEffect(() => {
        let isSubscribed = true;
        const id = history.location.state as string;

        if (!id || id === "") {
            handleNavigateBack();
        }

        fetchCoinApi(id).then((response: FetchCoinApiResponse) => {
            if (isSubscribed && response.success) {
                console.log(response.data)
                setCoin(response.data);
            }
        });

        return () => {
            isSubscribed = false;
        };
    }, [])

    const handleNavigateBack = () => {
        setRedirect(true);
    }

    return (
        <>
            {coin &&
                <Box display="flex" alignItems="center" flexDirection="column" p={1} mt="30px">
                    <Button 
                        size="small" 
                        color="primary"
                        onClick={handleNavigateBack}
                    >
                        Back
                    </Button>
                    <Box m={1}>
                        <Card style={{ maxHeight: "500px", maxWidth: "900px", overflowY: "auto" }}>
                        <CardContent>
                            <Box component={'h2'}>{coin.name}</Box>
                            <Box component={'h4'}>Current price: {coin.market_data.current_price['usd']} USD</Box>
                            <CoinDetailDescription coin={coin} />
                            <CoinDetailLinks coin={coin} />
                            <CoinDetailCommunityData coin={coin} />
                        </CardContent>
                        </Card>
                    </Box>
                </Box>
                }   
                {isRedirecting ? <Redirect to='/coins' /> : null}
        </>
    )
}

export default CoinDetail;