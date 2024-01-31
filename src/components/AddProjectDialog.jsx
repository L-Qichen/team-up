import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '.'
import '../assets/css/Button.css'

const AddProjectDialog = ({ open, onClose }) => {

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
        <DialogTitle>Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill this form to add new project.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="normal"
            id="outlined-required"
            name="Project Name"
            label="Project Name"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="normal"
            id="outlined-required"
            name="Description"
            label="Description"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="normal"
            id="outlined-required"
            name="Requirement"
            label="Requirement"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="normal"
            id="outlined-required"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="normal"
            id="outlined-required"
            name="Max Number of Student"
            label="Max Number of Student"
            type="number"
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
export default AddProjectDialog;