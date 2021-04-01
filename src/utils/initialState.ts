import { CoinsViewState } from "../containers/CoinsView"

export const initState = (): CoinsViewState => {

    const state: CoinsViewState = {
        coinsList: [],
        loading: false,
        pagination: {
            page: 1,
            perPage: 20,
            hasNextPage: false
        }
    }

    return state;
}