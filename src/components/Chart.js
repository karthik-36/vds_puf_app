import React from 'react';
import PropTypes from 'prop-types';
import { ChartTypes } from '../utils/constants';
import { clearContainer } from '../utils/utils';
import Histogram from '../charts/histogram';
import BarChart from '../charts/barchart';
import PUF from '../models/puf';
import Challenge from '../models/challenge';

class Chart extends React.Component {

  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  render() {
    return <div className="d3-chart" ref={this.chartRef}></div>;
  }

  componentDidMount() {
    let container = this.chartRef.current;
    clearContainer(container);
    
    let chart;
    switch(this.props.chartType) {
      case ChartTypes.BAR: {
        chart = BarChart(this.props.chartData, this.props.chartOptions);
      } break;
      case ChartTypes.HISTOGRAM: {
        chart = Histogram(this.props.chartData, this.props.chartOptions);
      } break;
      default: {
        throw new Error("Unknown chart type");
      }
    }
    container.appendChild(chart);
  }
}

Chart.propTypes = {
  chartType: PropTypes.oneOf(Object.values(ChartTypes)).isRequired,
  chartOptions: PropTypes.object.isRequired,
  chartData: PropTypes.array.isRequired
};

export default Chart;
