import axios from 'axios';
import { handleErrorMessage } from './utils/handleErrorMessage';
import { CoinDetailed } from './types/CoinDetailed';

export interface FetchMarketChartApiResponse {
    success: boolean;
    errorMessage: string;
    status: number
    data: any;
}

/**
 *  Get coin details
 *
 * Endpoints:
 * - GET /coins/{id}
 *
 * @returns Promise<FetchMoviesApiResponse>
 */

 export interface FetchMarketChartApiParams {
    id: string;
    days: string;
}


export const fetchMarketChart = (params: FetchMarketChartApiParams): Promise<FetchMarketChartApiResponse> => (
    axios.get([
        `${process.env.REACT_APP_API_ENDPOINT}/coins/`,
        params
            && params.id
            && params.id !== ""
                ? `${params.id}/market_chart`
                : "",
        params
            && params.days
            && params.days !== ""
                ? `?vs_currency=usd&days=${params.days}`
                : ''
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