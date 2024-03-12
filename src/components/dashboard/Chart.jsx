import React from 'react'
import Chart from 'react-apexcharts'
import { Row, Col } from 'antd';

function ChartData({ categories, seriesData }) {

    const options = {
        chart: {
            id: 'line-chart',
            toolbar: {
                show: false
            }
        },
        colors: ['#A23891'],
        xaxis: {
            categories: categories,
        },
        grid: {
            strokeDashArray: 4, // Setting dash array for grid lines
            borderColor: '#DFE5EE',

            xaxis: {
                lines: {
                    show: true,
                },
                
            },
            yaxis: {
                lines: {
                    show: true,
                }
            },
            row: {
                colors: undefined,
                opacity: 0.5
            },
            column: {
                colors: undefined,
                opacity: 0.5
            },

        },
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        dataLabels: {
            enabled: false // Hide data values
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0,
                opacityTo: 0.5,
            }
        },
    };

    const series = [{
        name: 'Series 1',
        data: seriesData
    }];

    return (
        <div>
            <Chart options={options} series={series} type="area" height={430} />
        </div>
    );

}

export default ChartData
