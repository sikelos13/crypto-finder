import React, { useState, useEffect } from 'react';
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
import CoinDetailGithubData from './CoinDetailComponents/CoinDetailGithubData';
import CoinDetailPriceChanges from './CoinDetailComponents/CoinDetailPriceChanges';
import SkeletonLoaderDetails from "../../components/SkeletonLoaderDetails";
import CoinDetailHighLowPrice from './CoinDetailComponents/CoinDetailHighLowPrice';
import PriceHighCharts from './CoinDetailComponents/PriceHighCharts';

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
            {coin
                ? <Box display="flex" alignItems="center" flexDirection="column" p={1} mt="30px">
                    <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={handleNavigateBack}
                    >
                        back to list
                    </Button>
                    <Box m={1}>
                        <Card style={{ maxHeight: "600px", maxWidth: "900px", overflowY: "auto" }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box component={'h2'}>{coin.name}</Box>
                                    <CoinDetailLinks coin={coin} />
                                </Box>
                                <Box component={'h4'}>Current price: {coin.market_data.current_price['usd']} USD</Box>
                                <CoinDetailDescription coin={coin} />
                                <CoinDetailGithubData coin={coin} />
                                <CoinDetailCommunityData coin={coin} />
                                <Box p="10px">
                                    <Box component={'span'} fontWeight="bold" mr="5px">Up votes (%):</Box>
                                    <Box component={'span'}>{coin.sentiment_votes_up_percentage}%</Box>
                                </Box>
                                <Box p="10px">
                                    <Box component={'span'} fontWeight="bold" mr="5px">Down votes (%):</Box>
                                    <Box component={'span'}>{coin.sentiment_votes_down_percentage}%</Box>
                                </Box>
                                <CoinDetailHighLowPrice coin={coin} />
                                <CoinDetailPriceChanges coin={coin} />
                            </CardContent>
                        </Card>
                        <PriceHighCharts coinId={coin.id} />
                    </Box>
                </Box>
                : <SkeletonLoaderDetails />
            }
            {isRedirecting ? <Redirect to='/coins' /> : null}
        </>
    )
}

export default CoinDetail;