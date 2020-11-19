import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class HomeChart extends Component {
    constructor() {
        super()

        this.state = {
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowel', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            18045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }

                ],

            }
        }
    }
    render() {
        return (
            <div>
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={250}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}

export default HomeChart