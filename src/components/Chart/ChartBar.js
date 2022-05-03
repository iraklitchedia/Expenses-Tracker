import "./ChartBar.css";

const ChartBar = (props) => {
  const { label, value } = props.data;

  let fillPercentage = "0%";
  if (props.maxValue > 0) {
    fillPercentage = Math.round((value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: fillPercentage }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
