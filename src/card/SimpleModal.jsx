import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import { Button, TextField } from "@material-ui/core";
import { taskListUpdateRequest } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const SimpleModal = (props) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: props.name,
    description: props.description,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = () => {
    console.log(formData);
    dispatch(taskListUpdateRequest(props.id, formData));
    setOpen(false);
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleFormSubmit();
      setOpen(false);
    }
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{ marginLeft: " 190px" }}>
        Update List
      </h2>
      <p id="simple-modal-description">
        <div className="modal_box">
          <form onChange={handleFormData}>
            <TextField
              label="title"
              name="name"
              value={formData.name}
              style={{ width: "400px", margin: "50px 0px 0px 50px" }}
              placeholder="title"
              variant="outlined"
              onKeyUp={handleKeyUp}
            />
            <TextField
              className="modal_textField"
              label="Description"
              placeholder="body"
              name="description"
              value={formData.description}
              style={{ width: "400px", margin: "50px 0px 0px 50px" }}
              variant="outlined"
              //   onKeyUp={handleKeyUp}
            />
            <div className="Modal_button_wrapper">
              <Button
                style={{ marginLeft: " 80px" }}
                // onClick={() => props.onUpdate(props.id, formData)}
                onClick={handleFormSubmit}
                variant="contained"
                color="primary"
                className="modal_button"
              >
                Update
              </Button>
              <Button
                style={{ marginLeft: " 150px" }}
                onClick={handleClose}
                variant="contained"
                color="primary"
                className="modal_button"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </p>
    </div>
  );
  return (
    <div>
      <EditIcon onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default SimpleModal;
