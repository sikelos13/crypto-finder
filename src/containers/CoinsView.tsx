import React, { Component } from "react";
import { fetchCoinsApi, FetchCoinsApiResponse } from "../api/fetchCoins";
import Box from "@material-ui/core/Box";
import toast from "react-hot-toast";
import SkeletonLoader from "../components/SkeletonLoader";
import Header from "../components/Header";
// import { MovieExtended } from "../api/types/Movie";
import { Pagination } from "../api/types/Pagination";
// import { normalizeGenres } from "../normalizers/genres.normalize";
// import { fetchGenresList, FetchGenresApiResponse } from "../api/fetchGenres";
// import { normalizeMovies } from '../normalizers/movies.normalize';
import { initState } from '../utils/initialState';
// import { getUpdatedWithNewItemsList } from '../utils/getUpdatedWithNewItemsList';
// import { getUpdatedState } from '../utils/getUpdatedState';
// import { getSortedMoviesList } from '../utils/getSortedMoviesList';
import CoinsList from "../components/CoinsList";
import { Coin } from "../api/types/Coin";
import history from "../history";

export interface CoinsViewState {
    loading: LoadingType;
    coinsList: Coin[];
    pagination: Pagination;
}

export type SortType = "highest_vote_average" | "lowest_vote_average" | "" | string;
type LoadingType = "load_more_items" | "initial_load" | null;

class CoinsView extends Component<{}, CoinsViewState> {
    constructor(props: any) {
        super(props);

        this.state = initState();
    }

    componentDidMount() {
        this.fetchCoins();
    }

    // componentDidUpdate() {
    //     this.scrollbarIsVisible();
    // }

    fetchCoins = (nextPage?: number) => {
        const { pagination } = this.state;
        const { page, perPage } = pagination;

        this.setState({ loading: nextPage ? "load_more_items" : "initial_load" });

        const params = {
            perPage,
            page: nextPage ? 1 : page,
        };

        fetchCoinsApi(params).then((response: FetchCoinsApiResponse) => {
            if (response.success) {

                this.setState({
                    coinsList: response.data,
                    loading: null,
                    // pagination: {
                    //     page: response.data.page,
                    //     total_results: response.data.total_results,
                    //     total_pages: response.data.total_pages,
                    //     hasNextPage: getHasNextPage(
                    //         response.data.page,
                    //         response.data.total_results
                    //     ),
                    // },
                });
            } else {
                toast.error(response.errorMessage);
                this.setState({
                    coinsList: [],
                    loading: null,
                });
            }
        });
    }

    // handleScroll = (e: any) => {
    //     const { pagination, loading, searchTerm } = this.state;
    //     const { page, hasNextPage } = pagination;

    //     const bottom = e.target.scrollHeight - e.target.scrollTop - 1 <= e.target.clientHeight; // -1 is for edge cases with decimal numbers of scrollTop 

    //     if (bottom && hasNextPage && loading === null) {
    //         toast.loading('Loading more items');
    //         this.fetchMovies(page + 1, searchTerm);
    //     }
    // }

    // scrollbarIsVisible = () => {
    //     const { pagination, loading, searchTerm } = this.state;
    //     const { page, hasNextPage } = pagination;

    //     const moviesViewerComponent = document.getElementById("listScroll");

    //     if (moviesViewerComponent) {
    //         const elementOffset = moviesViewerComponent['offsetTop'];
    //         const hasScrollBar = moviesViewerComponent['scrollHeight'] + elementOffset + 1 > window.innerHeight;
    //         if (hasNextPage && loading === null && !hasScrollBar) {
    //             this.fetchMovies(page + 1, searchTerm);
    //         }
    //     }
    // }

    // scrollToTopScrollbar = () => {
    //     const moviesViewerComponent = document.getElementById("listScroll");
    //     if (moviesViewerComponent) {
    //         moviesViewerComponent['scrollTo']({ top: 0, behavior: 'smooth' });
    //     }
    // }

    render() {
        const {
            coinsList,
            loading,
        } = this.state;

        return (
            <Box>
                <Header />
                <Box display="flex" justifyContent="center" flexDirection="row" className="MainContainer_Body">
                    <Box
                        mt={2}
                        pb={2}
                        display="flex"
                        flexDirection="row"
                        flexWrap="wrap"
                        justifyContent="space-evenly"
                        style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 180px)' }}
                        id="listScroll"
                        // onScroll={this.handleScroll}
                    >
                        {loading === "initial_load"
                            ? <SkeletonLoader />
                            : <CoinsList coinsList={coinsList} />
                        }

                    </Box>
                </Box>
            </Box>
        );
    }
}

export default CoinsView;