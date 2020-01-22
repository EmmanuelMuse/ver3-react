//React and Redux stuff
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/mathActions'
//import components
import {Slider} from '@material-ui/core';

//important prop values:
//min value, max value, marks array, slider id/#

class _roiSliderQ extends React.Component(){
    render(){
        return(
            <>
                <div className="question-box">
                    <h1 className="question"> 
                    </h1>
                </div>
                <div className="range-slider">
                    <Slider 
                    marks={this.props.marks}
                    step={null}
                    min={this.props.minVal} max={this.props.maxVal}
                    onChangeCommitted={ (event, value) => this.props.collectTime(this.props.,value) }
                    />               
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Qs: state.Calculators,
        input: state.results
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
      collectMoney: (event, id) => dispatch(actions.collectMoney(id, event))
    }
}

const ROISlider = connect(mapStateToProps, mapDispatchToProps)(_roiSliderQ)
export default ROISlider;