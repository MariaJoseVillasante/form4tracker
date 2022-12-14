// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// inicio Highcharts

// import "/highcharts.js"
// import Highcharts from 'highcharts/highstock';

// Create the chart
// am5core.ready(function(){});
// (async () => {})
// const priceData = await fetch('/api/prices').then(r => r.json());
const priceData = fetch('/api/prices?company_id=1').then(r => r.json());
const data = Object
    .entries(priceData)
    .map(([dt, pr]) => [Date.parse(dt), parseFloat(pr)])
    .reverse();

Highcharts.stockChart('container', {
    
    title: {
        text: 'Cumulative Sum',
        align: 'left'
    },
    
    subtitle: {
        text: 'Displays the sum of all the previous values and the current value (only within visible range)',
        align: 'left'
    },
    
    plotOptions: {
        series: {
            cumulative: true,
            pointStart: Date.UTC(2021, 0, 1),
            pointIntervalUnit: 'day'
        }
    },
    
    rangeSelector: {
        enabled: false
    },
    
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.cumulativeSum})<br/>',
        changeDecimals: 2,
        valueDecimals: 2
    },
    
    xAxis: {
        minRange: 3 * 24 * 36e5,
        max: Date.UTC(2021, 0, 6)
    },
    
    series: [{
        data: [1, 2, 5, 10, 20, 50, 100, -100, 100, -100]
    }, {
        data: [100, -50, -15, 15, -50, -20, -30, 100, -100, 100]
    }]
});

// fin Highcharts

