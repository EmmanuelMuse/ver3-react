import React from 'react'
import Slider from '@material-ui/core';
import {connect} from 'react-redux';

//for code reuse and scalability but time did not permit


// this component is connected with the redux store
//data from the store is mapped from the props
class Question extends React.Component{
    
        
    render(){
        return(

            <div>
                <div class="question-box">
                    <h1 class="question">{this.props.question}</h1>
                </div>

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
const mapStateToProps = (state) => {
    return{

    }

}
export default connect(mapStateToProps)(Question);