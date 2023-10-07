'use client'
import ReactApexChart from 'react-apexcharts'

const ColumnChart = () => {
  const chartOptions = {
    series: [
      {
        name: 'Organic',
        data: [40, 45, 30, 40, 35, 40, 30, 35, 40, 35, 41, 38],
      },
      {
        name: 'Direct',
        data: [13, 23, 20, 15, 13, 27, 23, 20, 12, 14, 15, 11],
      },
      {
        name: 'Social',
        data: [11, 17, 15, 15, 13, 16, 14, 11, 10, 14, 16, 14],
      },
    ],
    options: {
      chart: {
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },

      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false,
      },

      grid: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },

      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'June',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      fill: {
        opacity: 1,
      },
      colors: ['#1DB954', '#1ED760', '#EAECF0'],

      legend: {
        show: false,
      },
      yaxis: {
        show: false,
      },
    },
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        height={350}
      />
    </div>
  )
}

export default ColumnChart
