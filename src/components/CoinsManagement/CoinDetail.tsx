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
import CoinDetailSimilarCoins from './CoinDetailComponents/CoinDetailSimilarCoins';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CoinDetailPriceChanges from '../CoinsManagement/CoinDetailComponents/CoinDetailPriceChanges';
import CoinDetailHighLowPrice from '../CoinsManagement/CoinDetailComponents/CoinDetailHighLowPrice';
import { TabPanel } from '../Tabs/TabPanel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    tabs: {
        "& .MuiTab-wrapper": {
            textAlign: "left",
            alignItems: "unset",
        }
    }
}));

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const CoinDetail = () => {
    const [coin, setCoin] = useState<CoinDetailedNormalized>();
    const [isRedirecting, setRedirect] = useState(false);
    const [similarCoinsList, setSimilarCoins] = useState<CoinSimple[]>([]);
    const [value, setValue] = useState(0);
    const classes = useStyles();

    const initialLoad = useRef(true);
    const id = history.location.state as string;

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

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
                setValue(0);
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
                <Box display="flex" p="5px" m="5px" justifyContent="flex-end">
                    <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        style={{ alignSelf: 'center' }}
                        onClick={handleNavigateBack}
                    >
                        back to list
                </Button>
                </Box>
                {coin
                    ? <Box m={1} display="flex" justifyContent="center" className="Detail_Card">
                        <Box 
                            component={Card} 
                            display="flex" 
                            height="560px" 
                            width="650px"  
                            mr="20px"
                            className="Data_DetailsCard"
                            style={{ overflowY: "auto"}}>
                            <Tabs
                                orientation='vertical'
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                className={classes.tabs}
                                indicatorColor='primary'
                            >
                                <Tab label="coin info" {...a11yProps(0)} />
                                <Tab label="data details" {...a11yProps(1)} />
                                <Tab label="price details" {...a11yProps(2)} />
                            </Tabs>
                            <Box component={CardContent}>
                                <Box display="flex" alignItems="end" justifyContent="space-between">
                                    <Box fontWeight="bold" fontSize="15px">{coin.name}</Box>
                                    <CoinDetailLinks coin={coin} />
                                </Box>
                                <Box component={'h4'}>Current price: {coin.current_price}</Box>
                                <TabPanel value={value} index={0}>
                                    <CoinDetailDescription coin={coin} />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Box display="flex" justifyContent="space-between" mb="10px">
                                        <CoinDetailDeveloperData coin={coin} />
                                        <CoinDetailCommunityData coin={coin} />
                                    </Box>
                                    <Box display="flex" justifyContent="flex-start">
                                        <Box p="10px 5px">
                                            <Box component={'span'} fontWeight="bold" mr="5px">Up votes (%):</Box>
                                            <Box component={'span'}>{coin.sentiment_votes_up_percentage}</Box>
                                        </Box>
                                        <Box p="10px 5px">
                                            <Box component={'span'} fontWeight="bold" mr="5px">Down votes (%):</Box>
                                            <Box component={'span'}>{coin.sentiment_votes_down_percentage}</Box>
                                        </Box>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Box>
                                        <CoinDetailHighLowPrice coin={coin} />
                                        <CoinDetailPriceChanges coin={coin} />
                                    </Box>
                                </TabPanel>
                            </Box>
                        </Box>
                        <PriceHighCharts coin={coin} />
                    </Box>
                    : <Box display="flex" p={1} className="Skeleton_FirstColumn">
                        <SkeletonLoaderDetails />
                        <SkeletonLoaderDetails />
                    </Box>
                }
                <Box>
                    <CoinDetailSimilarCoins similarCoinsList={similarCoinsList} />
                </Box>
            </Box>

            {isRedirecting ? <Redirect to='/coins' /> : null}
        </>
    )
}

export default CoinDetail;