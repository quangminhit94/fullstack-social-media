import React from 'react'
import ReactApexChart from 'react-apexcharts'
class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: 'Solid',
        data: [70, 80, 100, 70, 70, 50, 100],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff']
              }
            }
          }
        },
        title: {
          text: 'My Skills with Radar  Polygon Fill'
        },
        colors: ['#00acc1'],
        markers: {
          size: 6,
          colors: ['#fff'],
          strokeColor: '#00acc1',
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val
            }
          }
        },
        xaxis: {
          categories: ['React', 'Polymer', 'Jquery', 'Postgres', 'NodeJS', 'NextJS', 'Vanilla JS'],
          labels: {
            style: {
              colors: '#000000',
              fontSize: '14px'
            }
          }
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            style: {
              colors: '#000000'
            },
            formatter: function(val, i) {
              if (i % 2 === 0) {
                return val
              } else {
                return ''
              }
            }
          }
        }
      },
    };
  }
  render() {
    return (


      <div id="chart" style={{background: 'white', padding: '10px'}}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
      </div>
    );
  }
}

export default ApexChart