import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { fetchMarketChart, FetchMarketChartApiResponse } from '../../../api/fetchMarketChart';
import SkeletonLoaderDetails from "../../../components/SkeletonLoaderDetails";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const getConfig = (data: any) => ({
    title: {
        text: 'Test'
    },
    series: [{
      name: 'AAPL',
      data: data,
    tooltip: {
      valueDecimals: 2
      }
    }]
  });

const PriceHighCharts = (coin: any) => {
    const [chartConfig, setChartConfig] = useState<any>();
    const [daysSelected, setDays] = useState('1');

    useEffect(() => {
        let isSubscribed = true;
        const params = {
            days: daysSelected,
            id: coin.coinId
        }
        fetchMarketChart(params).then((response: FetchMarketChartApiResponse) => {
            if (isSubscribed && response.success) {
                console.log(response.data)
                const resultsData = getConfig(response.data.prices);
                setChartConfig(resultsData);
            }
        });

        return () => {
            isSubscribed = false;
        };
    }, [])

    return (
        <>
            {chartConfig
                ? <Box display="flex" alignItems="center" flexDirection="column" p={1} mt="30px">
                    <Box m={1}>
                    <HighchartsReact 
                        highcharts={Highcharts}
                        options={chartConfig} 
                    />
                    </Box>
                </Box>
                : <SkeletonLoaderDetails />
            }
        </>
    )
}

export default PriceHighCharts;