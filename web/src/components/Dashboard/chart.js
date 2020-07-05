import { Pie } from 'react-chartjs-2/es'
import React, { Component } from 'react'

class PieChart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            labels: ['SAP-PM', 'RPN', 'Inspeção'],
            dataests: [{
                data: [33, 33, 33],
                backgroundColor: ['#2F98EA', '#5EADEA', '#8CC1EA']
            }]
        }
    }

    render() {
        return (
            <div>
                <h1>Habilidades</h1>
                <Pie
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.dataests
                    }}
                    // height="120px"
                />
                <br/>
            </div>
        )
    }
}

export default PieChart;