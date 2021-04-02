import { useState, useEffect, useRef } from 'react';
import { Box, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import history from "../../history";
import { fetchCoinApi, FetchCoinApiResponse } from '../../api/fetchCoin';
import { Redirect } from 'react-router-dom';
import CoinDetailDescription from './CoinDetailComponents/CoinDetailDescription';
import CoinDetailLinks from './CoinDetailComponents/CoinDetailLinks';
import CoinDetailCommunityData from './CoinDetailComponents/CoinDetailCommunityData';
import CoinDetailDeveloperData from './CoinDetailComponents/CoinDetailDeveloperData';
import SkeletonLoaderDetails from "../Loaders/SkeletonLoaderDetails";
import PriceHighCharts from './CoinDetailComponents/PriceHighCharts';
import toast from "react-hot-toast";
import { normalizeCoinDetailed } from '../../normalizers/coindDetailedNormalizer';
import { CoinDetailedNormalized } from '../../api/types/CoinDetailedNormalized';
import { fetchCoinsApi, FetchCoinsApiResponse } from '../../api/fetchCoins';
import { getSeeMoreList } from '../../utils/getSeeMoreList';
import { CoinSimple } from '../../api/types/CoinSimple';
import CoinDetailSeeMore from '../CoinsManagement/CoinDetailComponents/CoinDetailSeeMore';

const CoinDetail = () => {
    const [coin, setCoin] = useState<CoinDetailedNormalized>();
    const [isRedirecting, setRedirect] = useState(false);
    const [similarCoinsList, setSimilarCoins] = useState<CoinSimple[]>([]);
    const initialLoad = useRef(true);

    const id = history.location.state as string;

    const fetchCoinsList = () => {
        const currentPage = localStorage.getItem('currentPage');
        const params = {
            perPage: 20,
            page: currentPage === null ? 1 : Number(currentPage)
        };

        fetchCoinsApi(params).then((response: FetchCoinsApiResponse) => {
            if (response.success) {
                const newList = getSeeMoreList(response.data);
                setSimilarCoins(newList);
            } else {
                toast.error(response.errorMessage);
            }
        });
    }

    useEffect(() => {
        let isSubscribed = true;

        if (!id || id === "") {
            handleNavigateBack();
        }

        if (initialLoad.current) {
            initialLoad.current = false;
            fetchCoinsList();
        }

        setCoin(undefined);
        fetchCoinApi(id).then((response: FetchCoinApiResponse) => {
            if (isSubscribed && response.success) {
                const normalizedCoin = normalizeCoinDetailed(response.data);
                setCoin(normalizedCoin);
            } else {
                toast.error(response.errorMessage);
            }
        });

        return () => {
            isSubscribed = false;
        };
    }, [id])

    const handleNavigateBack = () => {
        setRedirect(true);
    }

    return (
        <>
            <Box display="flex" flexDirection="column" p={1} mt="30px">
                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={{ alignSelf: 'center' }}
                    onClick={handleNavigateBack}
                >
                    back to list
                    </Button>
                {coin
                    ? <Box m={1} display="flex" justifyContent="center" className="Detail_Card">
                        <Card className="Detail_Card" style={{ maxHeight: "800px", width: "550px", overflowY: "auto", marginRight: '20px' }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box fontWeight="bold">{coin.name}</Box>
                                    <CoinDetailLinks coin={coin} />
                                </Box>
                                <Box component={'h4'}>Current price: {coin.current_price}</Box>
                                <CoinDetailDescription coin={coin} />
                                <Box display="flex" justifyContent="space-around" mb="10px">
                                    <CoinDetailDeveloperData coin={coin} />
                                    <CoinDetailCommunityData coin={coin} />
                                </Box>

                                <Box display="flex" justifyContent="center">
                                    <Box p="10px">
                                        <Box component={'span'} fontWeight="bold" mr="5px">Up votes (%):</Box>
                                        <Box component={'span'}>{coin.sentiment_votes_up_percentage}</Box>
                                    </Box>
                                    <Box p="10px">
                                        <Box component={'span'} fontWeight="bold" mr="5px">Down votes (%):</Box>
                                        <Box component={'span'}>{coin.sentiment_votes_down_percentage}</Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                        <PriceHighCharts coin={coin} />
                    </Box>
                    : <Box display="flex" p={1} justifyContent="center" flexWrap="wrap">
                        <SkeletonLoaderDetails />
                        <SkeletonLoaderDetails />
                    </Box>
                }
                <CoinDetailSeeMore similarCoinsList={similarCoinsList} />
            </Box>

            {isRedirecting ? <Redirect to='/coins' /> : null}
        </>
    )
}

export default CoinDetail;