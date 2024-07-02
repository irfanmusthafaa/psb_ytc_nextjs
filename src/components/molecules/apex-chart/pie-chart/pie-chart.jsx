import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ data }) => {
  //   console.log(data, "data status");

  const series = [data?.totalMaleUsers || 0, data?.totalFemaleUsers || 0];

  const options = {
    chart: {
      height: 350,
      type: "donut",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    labels: ["Laki- laki", "Perempuan"],
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
