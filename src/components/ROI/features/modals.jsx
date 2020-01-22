import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/inputActions'


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `55%`,
    transform: `translate(-50%, -55%)`
  },
}));

function SimpleModal(props) {
  const classes = useStyles(); 
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="ROI-icon" onClick={handleOpen}>
          <img className="ROI-pic" src={props.projImg} alt={props.projType}/>
      </div>
      <a href="javascript:void(0)" onClick={handleOpen} className="ROI-type">{props.projType}</a>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title"> {props.projType}</h2>
          <h3>Implementation Price: {props.projCost}</h3>
          <p id="simple-modal-description" style={{fontSize: '1.3rem'}}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          
          <div className="modal-btns">
              <div className="nav-button" >
                  <button type="button" onClick={handleClose} className="btn btn-primary">Cancel</button>
              </div>
              <div className="nav-button" >
                <Link exact to="/Info">
                    <button type="button" onClick={ (event) => {props.selectProjectType(props.projType); handleClose()}} className="btn btn-primary">Continue</button>
                </Link>
              </div>
          </div>        

        </div>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
      //inputs: state.resultVlues
      roiSelected: state.resultValues
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    selectProjectType: (type) => dispatch(actions.updateProjType(type))
  }
}
const ROIModal = connect(mapStateToProps, mapDispatchToProps)(SimpleModal)
export default ROIModal;