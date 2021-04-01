import { useState, useEffect } from 'react';
import { Box, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CoinDetailed } from '../../api/types/CoinDetailed';
import history from "../../history";
import { fetchCoinApi, FetchCoinApiResponse } from '../../api/fetchCoin';
import { Redirect } from 'react-router-dom';
import CoinDetailDescription from './CoinDetailComponents/CoinDetailDescription';
import CoinDetailLinks from './CoinDetailComponents/CoinDetailLinks';
import CoinDetailCommunityData from './CoinDetailComponents/CoinDetailCommunityData';
import CoinDetailGithubData from './CoinDetailComponents/CoinDetailGithubData';
import SkeletonLoaderDetails from "../../components/SkeletonLoaderDetails";
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
                ? <Box display="flex" flexDirection="column" p={1} mt="30px" flexWrap>
                    <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        style={{ alignSelf: 'center'}}
                        onClick={handleNavigateBack}
                    >
                        back to list
                    </Button>
                    <Box m={1} display="flex" flexDirection="row" justifyContent="center">
                        <Card style={{ maxHeight: "800px", width: "550px", overflowY: "auto" , marginRight: '20px'}}>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box fontWeight="bold">{coin.name}</Box>
                                    <CoinDetailLinks coin={coin} />
                                </Box>
                                <Box component={'h4'}>Current price: {coin.market_data.current_price['usd']} USD</Box>
                                <CoinDetailDescription coin={coin} />
                                <Box display="flex" justifyContent="space-around" mb="10px">
                                    <CoinDetailGithubData coin={coin} />
                                    <CoinDetailCommunityData coin={coin} />
                                </Box>

                                <Box display="flex" justifyContent="center">
                                    <Box p="10px">
                                        <Box component={'span'} fontWeight="bold" mr="5px">Up votes (%):</Box>
                                        <Box component={'span'}>{coin.sentiment_votes_up_percentage ? coin.sentiment_votes_up_percentage : 'N/A'}%</Box>
                                    </Box>
                                    <Box p="10px">
                                        <Box component={'span'} fontWeight="bold" mr="5px">Down votes (%):</Box>
                                        <Box component={'span'}>{coin.sentiment_votes_down_percentage ? coin.sentiment_votes_down_percentage : 'Ν/Α'}%</Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                        <PriceHighCharts coin={coin} />
                    </Box>
                </Box>
                : <SkeletonLoaderDetails />
            }
            {isRedirecting ? <Redirect to='/coins' /> : null}
        </>
    )
}

export default CoinDetail;