import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { taskListDeleteRequest } from "../redux/actions/userActions";
// import { deleteUser } from "../reducers/userReducers";
export default function AlertDialog({ id }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    dispatch(taskListDeleteRequest(id));
    handleClose();
  };

  return (
    <div>
      <DeleteIcon onClick={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button color="primary" autoFocus onClick={handleDelete}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
