import React from 'react';
import { Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';
import * as actions from '../../actions/mathActions';



class Chart extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }
  
    render(){
        return(
            <div className="chart">
                <Bar
                data={this.state.chartData}
                options={{
                    scales: {
                        yAxes: [{
                            display:true,
                            ticks: {
                                fontSize: 15,
                                fontColor:'#363537',
                                min: 0,                        
                            }
                        }],
                        xAxes:[{
                            ticks:{
                                fontSize: 16,
                                fontColor: '363537' 
                            }
                        }]
                    },    
                    title:{
                      display:true,
                      text: 'Results',
                      fontSize:25,
                      fontColor:'#363537'
                    },
                    legend:{
                      display:true,
                      position:'bottom',
                      labels:{
                        fontColor:'#363537',
                        fontSize: 13
                      }
                    }
                }}
                />

            </div>
        )        
    }
}


export default Chart;