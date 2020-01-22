import React from 'react'
import {Slider, Tooltip, Button, Fade} from '@material-ui/core';
import {connect} from 'react-redux';

//for code reuse and scalability but time did not permit - under construction


// this component is connected with the redux store
//data from the store is mapped from the props
class sliderQuestion extends React.Component{
    
        Props = this.props;
    render(){
        return(

            <div>
                <div class="question-box">
                    {/* <h1 class="question">{Props.question}</h1> */}
                </div>

                <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                    placement="top"
                    arrow="arrow"
                    title={<span style={{fontSize:"1.3rem", lineHeight:"1.5rem"}}>.</span>}>
                    <Button className="help" >Help</Button>
                </Tooltip>

                <div class="range-slider">
                    <Slider valueLabelDisplay='auto' step={100} min={0} max={100000}/>               
                </div>

                <div class="question-divider">
                    <span></span>
                </div>
            </div>
            
        );
    }
}

export default sliderQuestion;