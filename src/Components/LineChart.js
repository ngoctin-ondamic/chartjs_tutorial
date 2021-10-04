import React from "react";
import {Line } from "react-chartjs-2";

function LineChart() {
  return (
    <div>
      <Line
        data={{
            // labels is the main data , in the real project it may be can the name of products or sth like tha
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets:[
              {
                  // This is the name of the chart 
                  // Like Number of products, number of people , etc ... 
                  label: '# of votes',
                  // this is the value for the bar chart 
                  // Red has 12
                  // Blue has 19
                  // Yellow has 3
                  // Green has 5
                  // Purple has 2
                  // Orange has 3
                  data: [12,19,3,5,2,3],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 0.5
              },

          ]
        }}
        height={400}
        width={600}
        options={{
            // maintainAspectRatio may like the how to custom the size of the chart
          maintainAspectRatio: false,
            // scales may like the animation
          scales:{
              yAxes: [
                  {
                      ticks : {
                          beginAtZero : true,
                      },
                  }
              ]
          }
        }}
      />
    </div>
  );
}

export default LineChart;
