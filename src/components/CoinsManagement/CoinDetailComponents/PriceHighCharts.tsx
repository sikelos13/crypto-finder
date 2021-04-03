import { useState, useEffect, useCallback } from 'react';
import { Box } from '@material-ui/core';
import { fetchMarketChart, FetchMarketChartApiResponse } from '../../../api/fetchMarketChart';
import SkeletonLoaderDetails from "../../Loaders/SkeletonLoaderDetails";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Select from '@material-ui/core/Select';
import { FormLabel } from '@material-ui/core';
import { getChartConfig } from '../../../utils/getChartConfig';
import toast from "react-hot-toast";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CoinDetailedNormalized } from '../../../api/types/CoinDetailedNormalized';

interface PriceHighChartsProps {
    coin: CoinDetailedNormalized;
}

const PriceHighCharts: React.FC<PriceHighChartsProps> = (({ coin }: PriceHighChartsProps) => {
    const [chartConfig, setChartConfig] = useState<any>();
    const [loading, setLoadingData] = useState(false);

    const initialDays = '1';
    const coinId = coin.id;

    const fetchChart = useCallback(async (days?: string) => {
        const params = {
            days: days ? days : initialDays,
            id: coinId
        }

        setLoadingData(true);

        fetchMarketChart(params).then((response: FetchMarketChartApiResponse) => {
            if (response.success) {
                const resultsData = getChartConfig(response.data.prices);
                setChartConfig(resultsData);
                setLoadingData(false);
            } else {
                toast.error(response.errorMessage);
            }
        })
    }, [coinId])

    useEffect(() => {
        let isSubscribed = true;

        if (isSubscribed) {
            fetchChart();
        }

        return () => {
            isSubscribed = false;
        };
    }, [fetchChart])

    const handleSelect = (event: any) => {
        const { value } = event.target;

        if (value && value !== "") {
            fetchChart(value);
        }
    }

    return (
        <>
            {chartConfig
                ? <Box component={Card} height="560px" width="650px" style={{ overflowY: "auto" }}>
                    <CardContent>
                        <Box display="flex" justifyContent="flex-end">
                            <Box display="flex" flexDirection="column">
                                <FormLabel>Duration of the chart</FormLabel>
                                <Select
                                    native
                                    style={{ marginTop: '5px' }}
                                    onChange={handleSelect}
                                    defaultValue={initialDays}
                                    disabled={loading}
                                    name="days"
                                >
                                    <option value='1'>1 day</option>
                                    <option value='14'>14 days</option>
                                    <option value='30'>1 month</option>
                                    <option value='90'>3 months</option>
                                    <option value='365'>1 year</option>
                                    <option value='max'>Since the creation</option>
                                </Select>
                            </Box>
                        </Box>
                        <Box m={1} display='flex' justifyContent="center">
                            <HighchartsReact highcharts={Highcharts} options={chartConfig} />
                        </Box>
                    </CardContent>
                </Box>
                : <SkeletonLoaderDetails />
            }
        </>
    )
})

export default PriceHighCharts;