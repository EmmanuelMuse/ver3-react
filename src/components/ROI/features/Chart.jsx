import React, {Component} from 'react';
import { Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';
import * as actions from '../../../actions/mathActions';



class Chart extends Component{
    constructor(props){
        super(props);

        this.state = {
            chartData:{
                labels: ['Hours Saved','Money Saved', 'Cost Per Collar Raised', 'Clients Served'],
                datasets: [
                    //Before label bars
                    {label:'Before',
                    data: [221,120, 15.87, 100],
                    backgroundColor:['#DA4167', '#DA4167', '#DA4167', '#DA4167'],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBackgroundColor: ['#DA4167', '#DA4167', '#DA4167', '#DA4167'],
                    hoverBorderColor:'#000'
                    },
                    //After label bars
                    {label:'After',
                    data: [279, 100, 32.99, 200],
                    backgroundColor:['#083D77', '#083D77', '#083D77', '#083D77'],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBackgroundColor: ['#083D77', '#083D77', '#083D77', '#083D77'],
                    hoverBorderColor:'#000',                   
                    }
                   
                ]
               
            }
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
                    title:{
                      display:true,
                      text: "",
                      fontSize:27,
                      fontColor:'#363537'
                    },
                    legend:{
                      display:true,
                      position:'right',
                      labels:{
                        fontColor:'#363537'
                      }
                    }
                }}
                />
            </div>
        )        
    }
}


export default Chart;