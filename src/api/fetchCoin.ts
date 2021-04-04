import axios from 'axios';
import { handleErrorMessage } from './utils/handleErrorMessage';
import { CoinDetailed } from './types/CoinDetailed';

export interface FetchCoinApiResponse {
    success: boolean;
    errorMessage: string;
    status: number
    data: CoinDetailed;
}

/**
 *  Get coin details
 *
 * Endpoints:
 * - GET /coins/{id}
 *  @param {string} id
 * 
 * @returns Promise<FetchCoinApiResponse>
 */

export const fetchCoinApi = (id: string): Promise<FetchCoinApiResponse> => (
    axios.get([
        `${process.env.REACT_APP_API_ENDPOINT}/coins/`,
        id && id !== ""
            ? `${id}`
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