import axios from 'axios';
import { handleErrorMessage } from './utils/handleErrorMessage';
import { Coin } from './types/Coin';

export interface FetchCoinsApiResponse {
    success: boolean;
    errorMessage: string;
    status: number
    data: Coin[];
}
export interface FetchCoinsApiParams {
    page: number;
    perPage: number;
}

/**
 *  Get coins list
 *
 * Endpoints:
 * - GET /coins/markets?vs_currency=usd
 *  @param {string} perPage
 *  @param {string} page
 *
 * @returns Promise<FetchCoinsApiResponse>
 */

export const fetchCoinsApi = (params: FetchCoinsApiParams): Promise<FetchCoinsApiResponse> => (
    axios.get([
        `${process.env.REACT_APP_API_ENDPOINT}/coins/markets?vs_currency=usd`,
        params
            && params.perPage
            ? `&per_page=${params.perPage}`
            : "",
        params
            && params.page
            ? `&page=${params.page}`
            : "",
    ].join(""))
        .then((response: any) => {
            return {
                ...response,
                success: true
            }
        }).catch((error: any) => {
            return {
                ...error,
                success: false,
                errorMessage: handleErrorMessage(error)
            }
        })
);