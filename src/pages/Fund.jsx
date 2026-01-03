import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import './Fund.css'; // Import your CSS for styling

const Fund = (props) => {
  const [activeChart, setActiveChart] = useState('performance'); // Add state for active chart

  // Sample data for the scatter plot (historical returns)
  const scatterData = {
    dates: ['2024-01', '2024-02', '2024-03', '2024-04', '2024-05'],
    returns: [2.5, 3.1, -1.2, 4.3, 2.8],
    benchmark: [2.1, 2.8, -0.8, 3.9, 2.5]
  };

  // Sample data for the pie chart (asset allocation)
  const pieData = {
    labels: ['Stocks', 'Bonds', 'Cash', 'Real Estate', 'Others'],
    values: [45, 30, 15, 7, 3]
  };

  // Render the selected chart
  const renderChart = () => {
    if (activeChart === 'performance') {
      return (
        <Plot
          data={[
            {
              x: scatterData.dates,
              y: scatterData.returns,
              type: 'scatter',
              mode: 'lines+markers',
              name: 'Fund Returns',
              line: { color: '#1f77b4' }
            },
            {
              x: scatterData.dates,
              y: scatterData.benchmark,
              type: 'scatter',
              mode: 'lines+markers',
              name: 'Benchmark',
              line: { color: '#ff7f0e' }
            }
          ]}
          layout={{
            title: 'Historical Performance',
            xaxis: { title: 'Date' },
            yaxis: { title: 'Returns (%)' },
            height: 400,
            width: 700
          }}
        />
      );
    } else {
      return (
        <Plot
          data={[
            {
              values: pieData.values,
              labels: pieData.labels,
              type: 'pie',
              hole: 0.4,
              marker: {
                colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']
              }
            }
          ]}
          layout={{
            title: 'Asset Allocation',
            height: 400,
            width: 500,
            showlegend: true
          }}
        />
      );
    }
  };

  return (
    <div className="fund-profile">
      <h2>Fund Performance and Allocation</h2>
      
      {/* Chart selection menu */}
      <div className="chart-menu">
        <button 
          className={`menu-button ${activeChart === 'performance' ? 'active' : ''}`}
          onClick={() => setActiveChart('performance')}
        >
          Performance Chart
        </button>
        <button 
          className={`menu-button ${activeChart === 'allocation' ? 'active' : ''}`}
          onClick={() => setActiveChart('allocation')}
        >
          Allocation Chart
        </button>
      </div>

      {/* Chart container */}
      <div className="chart-container">
        {renderChart()}
      </div>
    </div>
  );
};

export default Fund;