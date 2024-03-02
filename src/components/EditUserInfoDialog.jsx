import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '.'
import '../assets/css/Button.css'

const EditUserInfoDialog = ({ open, onClose, user }) => {

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            onClose();
          },
        }}
      >
        <DialogTitle>Edit profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            disabled
            margin="normal"
            id="outlined-required"
            name="First Name"
            label="First Name"
            type="text"
            defaultValue={user.firstName}
            fullWidth
          />
          <TextField
            disabled
            margin="normal"
            id="outlined-required"
            name="Last Name"
            label="Last Name"
            type="text"
            defaultValue={user.lastName}
            fullWidth
          />
          <TextField
            margin="normal"
            id="outlined-required"
            name="User Name"
            label="User Name"
            type="text"
            defaultValue={user.username}
            fullWidth
          />
          <TextField
            disabled
            margin="normal"
            id="outlined-required"
            name="User Role"
            label="User Role"
            type="text"
            defaultValue={user.userRole}
            fullWidth
          />
          <TextField
            margin="normal"
            id="outlined-required"
            name="email"
            label="Email Address"
            type="email"
            defaultValue={user.email}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <button
            className="btn green-btn"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <Button
            text="Subscribe"
            buttonStyle="blue-btn"
            type="submit"
          />
        </DialogActions>
      </Dialog>
    </>
  );
}
export default EditUserInfoDialog;