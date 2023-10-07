'use client'
import ReactApexChart from 'react-apexcharts'

const PieChart = () => {
  const chartOptions = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 380,
        height: 400,
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },

      labels: ['Organic', 'Direct', 'Referral', 'Social', 'Other'],
      fill: {
        type: 'gradient',
      },
      legend: {},
      colors: ['#1DB954', '#1ED760', '#EAECF0'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  }
  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
        width={380}
      />
    </div>
  )
}

export default PieChart
