import { CoinsViewState } from "../containers/CoinsView"

export const initState = (): CoinsViewState => {

    const state: CoinsViewState = {
        coinsList: [],
        loading: null,
        pagination: {
            page: 1,
            perPage: 20,
            total_results: 0,
            total_pages: 0,
            hasNextPage: false
        }
    }

    return state;
}