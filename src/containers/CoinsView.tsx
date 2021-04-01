import { Component } from "react";
import { fetchCoinsApi, FetchCoinsApiResponse } from "../api/fetchCoins";
import Box from "@material-ui/core/Box";
import toast from "react-hot-toast";
import SkeletonLoader from "../components/SkeletonLoader";
import Header from "../components/Header";
import { Pagination } from "../api/types/Pagination";
import { initState } from '../utils/initialState';
import CoinsList from "../components/CoinsList";
import { Coin } from "../api/types/Coin";
import PaginationNavBar from '../components/PaginationNavBar';

export interface CoinsViewState {
    loading: boolean;
    coinsList: Coin[];
    pagination: Pagination;
}
class CoinsView extends Component<{}, CoinsViewState> {
    constructor(props: any) {
        super(props);
        this.state = initState();
    }

    componentDidMount() {
        this.fetchCoins();
    }

    fetchCoins = () => {
        const { pagination } = this.state;
        const { perPage } = pagination;

        this.setState({ loading: true });
        const currentPage = localStorage.getItem('currentPage');
        
        const params = {
            perPage,
            page: currentPage === null ? 1 : Number(currentPage)
        };

        fetchCoinsApi(params).then((response: FetchCoinsApiResponse) => {
            if (response.success) {

                this.setState({
                    coinsList: response.data,
                    loading: false,
                    pagination: {
                        page: params.page,
                        perPage: 20,
                        hasNextPage: response.data.length === 20,
                    },
                });
            } else {
                toast.error(response.errorMessage);
                this.setState({
                    coinsList: [],
                    loading: false,
                });
            }
        });
    }

    handlePaginate = (pageNumber: number) => {
        const { pagination } = this.state;

        localStorage.setItem('currentPage', JSON.stringify(pageNumber));
        this.setState(
            {
                pagination: {
                    ...pagination,
                    page: pageNumber
                },
            },
            () => this.fetchCoins()
        );
    };

    render() {
        const {
            coinsList,
            loading,
            pagination
        } = this.state;

        return (
            <Box>
                <Header
                    pagination={pagination}
                    coinsList={coinsList}
                    handlePaginate={this.handlePaginate}
                />
                <Box display="flex" justifyContent="center" flexDirection="row">
                    <Box
                        mt={2}
                        pb={2}
                        display="flex"
                        flexDirection="row"
                        flexWrap="wrap"
                        justifyContent="space-evenly"
                    >
                        {loading
                            ? <SkeletonLoader />
                            : <CoinsList coinsList={coinsList} />
                        }
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <PaginationNavBar
                        coinsList={coinsList}
                        pagination={pagination}
                        paginate={this.handlePaginate}
                    />
                </Box>
            </Box>
        );
    }
}

export default CoinsView;