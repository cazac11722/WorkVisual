import React from "react";
import Chart from "react-apexcharts";

const SubChart = () => {
    const chartOptions = {
        chart: {
            type: "bar",
            toolbar: {
                show: false,
            }
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            type: "category",
            labels: {
                show: false,
            },
            group: {
                style: {
                    fontSize: "10px",
                    fontWeight: 700
                }
            }
        },
        tooltip: {
            x: {
                formatter: function (val) {
                    return '';
                }
            }
        }
    };

    const chartSeries = [
        {
            name: "Sales",
            data: [
                { x: "2019/01/01", y: 400 },
                { x: "2019/04/01", y: 430 },
                { x: "2019/07/01", y: 448 },
                { x: "2019/10/01", y: 470 },
                { x: "2020/01/01", y: 540 },
            ]
        }
    ];

    return (
        <div className="chart-container">
            <Chart options={chartOptions} series={chartSeries} type="bar" width={"100%"} height={"100%"} />
        </div>
    );
};

export default SubChart;
