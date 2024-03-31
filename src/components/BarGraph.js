import React from "react";
import { XYPlot, VerticalBarSeries } from "react-vis";

function MyBarChart() {
    //const data = this.props.data;
    const sample = [
        {y: 123, x:0},
        {y:100, x:1}
    ]
    const chartWidth = 800;
    const chartHeight = 500;
    const chartDomain = [0, chartHeight];
    return (
      <XYPlot
        xType="ordinal"
        width={chartWidth}
        height={chartHeight}
        yDomain={chartDomain}
      >
                        <VerticalBarSeries data={sample} />
                   {" "}
      </XYPlot>
    );
}

export default MyBarChart;