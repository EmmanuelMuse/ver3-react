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
<<<<<<< HEAD:src/components/ROI/features/Chart.jsx
                      text: "",
                      fontSize:27,
=======
                      text: 'Results',
                      fontSize:25,
>>>>>>> b9f7513c37abda3f45638f2ac496b4100387e1c2:src/components/ROI/Chart.jsx
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