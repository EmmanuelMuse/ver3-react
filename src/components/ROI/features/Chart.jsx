import React from 'react';
import { Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';
import * as actions from '../../../actions/mathActions';



class Chart extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }
  
    render(){

        const {chartProp} = this.props;
        console.log(chartProp);
        return(
            <div className="chart">
                <Bar
                data={this.state.chartData}
                options={{
                    responsive: true,
                    scales: {
                        yAxes: [{
                            display:true,
                            ticks: {
                                fontSize: 15,
                                fontColor:'#363537',                              
                                beginAtZero: true
                            }
                        }],
                        xAxes:[{
                            ticks:{
                                fontSize: 15,
                                fontColor: '363537' 
                            }
                        }]
                    },    
                    title:{
                      display:true,
                      text: 'Results',
                      fontSize:20,
                      fontColor:'#363537'
                    },
                    legend:{
                      display:true,
                      position:'top',
                      labels:{
                        fontColor:'#363537',
                        fontSize: 14
                      }
                    }
                }}
                />

            </div>
        )        
    }
}


export default Chart;