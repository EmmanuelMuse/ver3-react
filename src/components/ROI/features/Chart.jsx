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
                                beginAtZero: true,
                                
                                afterDataLimits: function(axis) {
                                    axis.max *= 1.5;
                                },
                                callback: function(value, index, values) {
                                    if(parseInt(value) >= 1000 || (value < 1 && value !== 0)){
                                    return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    } 
                                    else if (1 !== value && value !== 0){
                                        if(value < 1){
                                            return value.toFixed(2);
                                        }
                                        return parseInt(value);
                                    } 
                                    else {
                                        return value;
                                    }
                                }
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
                    },
                    //custom tooltip settings
                    tooltips: {
                        mode: 'index',
                        position: 'nearest',
                        titleFontSize: 13,
                        bodyFontSize: 13,
                        bodySpacing: 7,
                        footerFontSize: 13,
                    //custom callback function to display percentage change on tooltip footer
                        callbacks: {  
                            label: function(tooltipItem, data) {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] 
                                if(parseInt(value) >= 1000){
                                    return data.datasets[tooltipItem.datasetIndex].label + ": " + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                }else{
                                    return data.datasets[tooltipItem.datasetIndex].label + ": " + value;
                                }
                            },                           
						    footer: function(tooltipItems, data) {
                                var percentChange = 0;
                                var currentArray = [];
                                var  beforeValue = 0;
                                var afterValue = 0;
                                //assigns the values currently being viewing to an array
                                tooltipItems.forEach(function(tooltipItem) {
                                    currentArray.push(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]);
                                })
                                beforeValue = eval(currentArray[0]);
                                afterValue = eval(currentArray[1]);
                                percentChange = (1 - (afterValue / beforeValue)) * 100 ;
                                if (afterValue >= beforeValue){
                                    return "+" + Math.abs((percentChange).toFixed(2)) + "%";
                                } 
                                else if (beforeValue > afterValue){
                                    return "-" + percentChange.toFixed(2) + "%";
                                };           
                                return ""
                            }                            
                        } 
					}
                }}
                />

            </div>
        )        
    }
}


export default Chart;