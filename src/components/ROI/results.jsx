//React and Redux stuff
import React from 'react';
import Header from '../Header';
import {connect, useStore} from 'react-redux';

//import components
// import {PDFDownloadLink, Document, Page} from '@react-pdf/renderer'
import Chart from '../ROI/Chart';

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

    componentWillMount(){
        this.getChartData();
    }
    getChartData(){
        this.setState({
            chartData:{
                labels: ['Graph1'],
                datasets: [
                    //Before label bars
                    {label:'Before',
                    data: [2, 0],
                    backgroundColor:['#DA4167'],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBackgroundColor: ['#DA4167'],
                    hoverBorderColor:'#000'
                    },
                    //After label bars
                    {label:'After',
                    data: [.5],
                    backgroundColor:['#083D77'],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBackgroundColor: ['#083D77'],
                    hoverBorderColor:'#000'                   
                    }
                ]
            }
        });
    }

    render(){
        console.log(this.props)
        const {display} = this.props;
        console.log(display.hoursSaved())
        console.log(display.cpdr())
        return(
            <>
                <Header page="Results"/>
                        <section className="calcs">
                            {/* Row One */}
                            {/* <h1 className="rHeader">Your current Numbers</h1> */}
                            <div className="calc-row">
                                <div className="calc">
                                    <img className="ROI-pic" src={HS} alt="Hours Saved" />
                                    <h2 className="result">??</h2>
                                    <h2 href="#" className="ROI-type">Hours Spent<br />Annually</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={DS} alt="Dollars Saved" />
                                    <h2 className="result">??</h2>
                                    <h2 href="#" className="ROI-type">Dollars Spent<br />Annually</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={CPDR} alt="Cost per Dollar" />
                                    <h2 className="result">??</h2>
                                    <h2 href="#" className="ROI-type">Cost per Dollar<br />Raised</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={CS} alt="Clients Served" />
                                    <h2 className="result">??</h2>
                                    <h2 href="#" className="ROI-type">Clients Served<br /> Annually</h2>
                                </div>
                            </div>

                            {/* Row Two */}
                            <h1 className="rHeader">ROI 1 Year Results</h1>
                            <div className="calc-row">
                                <div className="calc">
                                    <img className="ROI-pic" src={HS} alt="Hours Saved" />
                                    <h2 className="result">{display.hoursSaved()}</h2>
                                    <h2 href="#" className="ROI-type">Hours<br />Saved</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={DS} alt="Dollars Saved" />
                                    <h2 className="result">${display.dollarsSaved()}</h2>
                                    <h2 href="#" className="ROI-type">Dollars<br />Saved</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={CPDR} alt="Cost per Dollar" />
                                    <h2 className="result">{display.cpdr()}</h2>
                                    <h2 href="#" className="ROI-type">Cost per Dollar<br />Raised</h2>
                                </div>

                                <div className="calc">
                                    <img className="ROI-pic" src={CS} alt="Clients Served" />
                                    <h2 className="result">{display.clientsServed()}</h2>
                                    <h2 href="#" className="ROI-type">Clients<br />Served</h2>
                                </div>
                            </div>

                        </section>
                    <Chart chartData={this.state.chartData} 
                    />
                    <Chart 
                    // Graph example where realtime adjustments are shown. I'll edit the other 3 graphs in a similar fashion on Saturday
                    // Need to rewrite prop for graph title as well. Both currently show as "Results"
                    chartData={{
                        labels: ['Realtime Bar Example'],
                        datasets: [
                            //Before label bars
                            {label:'Before',
                            data: [display.cpdr(), 0],
                            backgroundColor:['#DA4167'],
                            borderWidth:1,
                            borderColor:'#777',
                            hoverBorderWidth:3,
                            hoverBackgroundColor: ['#DA4167'],
                            hoverBorderColor:'#000'
                            },
                            //After label bars
                            {label:'After',
                            data: [.5],
                            backgroundColor:['#083D77'],
                            borderWidth:1,
                            borderColor:'#777',
                            hoverBorderWidth:3,
                            hoverBackgroundColor: ['#083D77'],
                            hoverBorderColor:'#000'                   
                            }
                        ]
                    }}
                    />
                
                              
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