//React and Redux stuff
import React from 'react';
import Header from '../Header';
import {connect } from 'react-redux';

//import components
// import {PDFDownloadLink, Document, Page} from '@react-pdf/renderer'
import Chart from './features/Chart';
/////result icons
//Hours Saved
import HS from '../../imgs/HS.png';
//Dollars Saved
import DS from '../../imgs/DS.png';
//Cost Per Dollar Raised
import CPDR from '../../imgs/CPDR.png';
//Clients Served
import CS from '../../imgs/CS.png';
// import { display } from '@material-ui/system';


class Results extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            chartData:{}
        }
        
    }

    componentDidMount(){
        this.getChartData();
    }

    checkIfNaN(value){
        if (isNaN(value)){
            return "- -"
        };
        return value
    }

    getChartData(){
        this.setState({
            //chart template
            chartData:{
                labels: ['Hours Saved','Money Saved', 'Cost Per Collar Raised', 'Clients Served'],
                datasets: [
                    //Before label bars
                    {label:'Before',
                    data: [],
                    backgroundColor:['#DA4167', '#DA4167', '#DA4167', '#DA4167'],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                    },
                    //After label bars
                    {label:'After',
                    data: [],
                    backgroundColor:['#083D77', '#083D77', '#083D77', '#083D77'],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000',                   
                    }
                    
                ]                
            }
        });
    }


    render(){
        const {display} = this.props;
        return(
            <>
                <Header page="Results" />
                        
                        <section className="calcs">
                            {/* Row One */}
                            {/* <h1 className="rHeader">Your current Numbers</h1> */}
                            <div className="calc-row">
                                <div className="calc">
                                    <img className="ROI-pic" src={HS} alt="Hours Saved" />
                                    <h2 className="result">{display.hoursSaved()}</h2>
                                    <h2 href="#" className="ROI-type">Hours<br />Saved</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={DS} alt="Dollars Saved" />
                                    <h2 className="result">${(display.dollarsSaved().toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))}</h2>
                                    <h2 href="#" className="ROI-type">Dollars<br />Saved</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={CPDR} alt="Cost Per Dollar" />
                                    <h2 className="result">{this.checkIfNaN(display.cpdr())}</h2>
                                    <h2 href="#" className="ROI-type">Cost per Dollar<br />Raised</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={CS} alt="Clients Served" />
                                    <h2 className="result">{this.checkIfNaN(display.clientsServed())}</h2>
                                    <h2 href="#" className="ROI-type">Clients<br />Served</h2>
                                </div>
                            </div>

                            {/* Row Two */}
                            <h1 className="rHeader">ROI 1 Year Results</h1>
                            <div className="calc-row">
                                <div className="calc">
                                    <img className="ROI-pic" src={HS} alt="Hours Saved" />
                                    <h2 className="result">{this.checkIfNaN()}</h2>
                                    <h2 href="#" className="ROI-type">Hours Spent<br />Annually</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={DS} alt="Dollars Saved" />
                                    <h2 className="result">{this.checkIfNaN()}</h2>
                                    <h2 href="#" className="ROI-type">Dollars Spent<br />Annually</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={CPDR} alt="Cost per Dollar" />
                                    <h2 className="result">{this.checkIfNaN()}</h2>
                                    <h2 href="#" className="ROI-type">Cost per Dollar<br />Raised</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={CS} alt="Clients Served" />
                                    <h2 className="result">{this.checkIfNaN()}</h2>
                                    <h2 href="#" className="ROI-type">Clients Served<br /> Annually</h2>
                                </div>
                            </div>
                            

                        
                                            {/* Hours Saved Results Graph */}
                            <Chart 
                            chartData={{
                                labels: ['Hours Saved'],
                                datasets: [
                                    //Before label bars
                                    {label:'Before',
                                    data: [display.hoursSaved()],
                                    backgroundColor:['rgba(8, 61, 119, .82)'],
                                    barPercentage: .9,
                                    categoryPercentage: .25,
                                    borderWidth:1,
                                    borderColor:'#212121',
                                    hoverBorderWidth:2,
                                    hoverBackgroundColor: ['rgba(8, 61, 119)'],
                                    hoverBorderColor:'#000'
                                    },
                                    //After label bars
                                    {label:'After: Est',
                                    // Random generated number in data field, solely to functionality of chart
                                    data: [parseInt(display.hoursSaved() * Math.random() + display.hoursSaved())],
                                    backgroundColor:['rgba(126, 194, 66, 0.82)'],
                                    barPercentage: .9,
                                    categoryPercentage: .25,
                                    borderWidth:1,
                                    borderColor:'#212121',
                                    hoverBorderWidth:2,
                                    hoverBackgroundColor: ['rgba(126, 194, 66)'],
                                    hoverBorderColor:'#000'                   
                                    }
                                ]
                            }}
                            />
                            {/* Dollars Saved Results Graph */}
                            <Chart 
                            chartData={{
                                labels: ['Dollars Saved'],
                                datasets: [
                                    //Before label bars
                                    {label:'Before',
                                    data: [display.dollarsSaved()],
                                    backgroundColor:['rgba(8, 61, 119, .82)'],
                                    barPercentage: .9,
                                    categoryPercentage: .25,
                                    borderWidth:1,
                                    borderColor:'#212121',
                                    hoverBorderWidth:2,
                                    hoverBackgroundColor: ['rgba(8, 61, 119)'],
                                    hoverBorderColor:'#000'
                                    },
                                    //After label bars
                                    {label:'After: Est',
                                    // Random generated number in data field, solely to functionality of chart
                                    data: [parseInt(display.dollarsSaved()*(Math.random()) + display.dollarsSaved())],
                                    backgroundColor:['rgba(126, 194, 66, 0.82)'],
                                    barPercentage: .9,
                                    categoryPercentage: .25,
                                    borderWidth:1,
                                    borderColor:'#212121',
                                    hoverBorderWidth:2,
                                    hoverBackgroundColor: ['rgba(126, 194, 66)'],
                                    hoverBorderColor:'#000'                   
                                    }
                                ]
                            }}
                            />
                            {/* Cost Per Dollar Results Graph */}
                            <Chart                
                            chartData={{
                                labels: ['Cost Per Dollar Raised'],
                                datasets: [
                                    //Before label bars
                                    {label:'CPD Before',
                                    data: [display.cpdr()],
                                    backgroundColor:['rgba(8, 61, 119, .82)'],
                                    barPercentage: .9,
                                    categoryPercentage: .25,
                                    borderWidth:1,
                                    borderColor:'#212121',
                                    hoverBorderWidth:2,
                                    hoverBackgroundColor: ['rgba(8, 61, 119)'],
                                    hoverBorderColor:'#000'
                                    },
                                    //After label bars
                                    {label:'CPD After: Est',
                                    // Random generated number in data field, solely to functionality of chart
                                    data: [parseFloat(display.cpdr()*(Math.random()) + display.cpdr()).toFixed(2)],
                                    backgroundColor:['rgba(126, 194, 66, 0.82)'],
                                    barPercentage: .9,
                                    categoryPercentage: .25,
                                    borderWidth:1,
                                    borderColor:'#212121',
                                    hoverBorderWidth:2,
                                    hoverBackgroundColor: ['rgba(126, 194, 66)'],
                                    hoverBorderColor:'#000'                   
                                    }
                                ]
                            }}
                            />
                            {/* Clients Served Results Graph */}
                            <Chart 
                            chartData={{
                                labels: ['Clients Served'],
                                datasets: [
                                    //Before label bars
                                    {label:'Before',
                                    data: [display.clientsServed()],
                                    backgroundColor:['rgba(8, 61, 119, .82)'],
                                    barPercentage: .9,
                                    categoryPercentage: .25,
                                    borderWidth:1,
                                    borderColor:'#212121',
                                    hoverBorderWidth:2,
                                    hoverBackgroundColor: ['rgba(8, 61, 119)'],
                                    hoverBorderColor:'#000'
                                    },
                                    //After label bars
                                    {label:'After: Est',
                                    // Random generated number in data field, solely to functionality of chart
                                    data: [parseInt(display.clientsServed()*(Math.random()) + display.clientsServed()).toFixed(2)],
                                    backgroundColor:['rgba(126, 194, 66, 0.82)'],
                                    bbarPercentage: .9,
                                    categoryPercentage: .25,
                                    borderWidth:1,
                                    borderColor:'#212121',
                                    hoverBorderWidth:2,
                                    hoverBackgroundColor: ['#rgba(126, 194, 66)'],
                                    hoverBorderColor:'#000'                   
                                    }
                                ]
                            }}
                            />
                    </section>     
                </>
        );
    }

}
const mapStateToProps = (state) =>{
  return{
    display: state.resultValues
  }
}

export default connect(mapStateToProps)(Results);