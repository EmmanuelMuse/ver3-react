import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/inputActions'


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Link} from 'react-router-dom';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    margin: 'auto',
    width: '40%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
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
      <a href="#" onClick={handleOpen} className="ROI-type">{props.projType}</a>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title"> {props.projType}</h2>
          <h3>Implementation Price: {props.projCost}</h3>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          
          <div className="modal-btns">
              <div className="nav-button" onClick={handleClose}>
                  <button type="button" className="btn btn-primary">Cancel</button>
              </div>
              <div className="nav-button" onClick={(event) => props.selectProjectType(props.projType)}>
                <Link exact to="/Info">
                    <button type="button" className="btn btn-primary">Continue</button>
                </Link>
              </div>
          </div>
          
          <SimpleModal />
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