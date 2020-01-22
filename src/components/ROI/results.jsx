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

    componentWillMount(){
        this.getChartData();
    }

    currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    getChartData(){
        this.setState({
            chartData:{
                labels: ['Graph1'],
                datasets: [
                    //Before label bars
                    {label:'Before',
                    data: [6,0],
                    backgroundColor:['#083D77'],
                    barPercentage: .25,
                    categoryPercentage: .8,
                    maxBarThickness: .8,
                    borderWidth:1,
                    borderColor:'#212121',
                    hoverBorderWidth:3,
                    hoverBackgroundColor: ['#083D77'],
                    hoverBorderColor:'#000'
                    },
                    //After label bars
                    {label:'After',
                    data: [4],
                    backgroundColor:['#7ec142'],
                    barPercentage: .2,
                    categoryPercentage: .5,
                    maxBarThickness: .3,
                    borderWidth:1,
                    borderColor:'#212121',
                    hoverBorderWidth:3,
                    hoverBackgroundColor: ['#7ec142'],
                    hoverBorderColor:'#000'                   
                    }
                ]                
            }
        });
    }


    render(){
        console.log(this.props)
        const {display} = this.props;
        console.log(display.dollarsSaved())
        return(
            <>
                <Header page="Results" />
                        
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
                                    <h2 className="result">${(display.dollarsSaved().toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))}</h2>
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
                        <Chart
                            name={"Hours Saved"}
                            value={display.hoursSaved()}
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