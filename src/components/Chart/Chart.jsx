import React from "react";
import './Chart.css'
import Chartbar from "./Chartbar";

export default function Chart(props){
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <Chartbar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
};