import React from 'react';
import { Bar} from 'react-chartjs-2';



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