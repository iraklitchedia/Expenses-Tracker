import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const maxValue = Math.max(...props.dataPoints.map(item => item.value));

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} data={dataPoint} maxValue={maxValue} />
      ))}
    </div>
  );
};

export default Chart;
