export const getChartConfig = (data: any) => ({
    title: {
        text: `Coin price chart`
    },
    subtitle: {
        text: 'Zoom in and out available via mouse and drag on the plot'
    },
    xAxis: {
        title: {
          text: 'Date'
        },
        type: 'datetime'
      },
      chart: {
        zoomType: 'x',
        spacingBottom: 10,
        spacingTop: 10,
        spacingLeft: -5,
        spacingRight: 3,
        width: 500,
        height: 450
},
    yAxis: {
        title: {
            text: 'Price'
          },
    },
    series: [{
        name: 'price (usd)',
        data: data,
        tooltip: {
            valueDecimals: 2
        },
    }]
});