import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
//import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AddTaskIcon from '@mui/icons-material/AddTask';
import spotify from './download.png';
import youtube from './youtube.png';
import Box from '@mui/material/Box';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Badge badgeContent={4} color="primary" onClick={handleClickOpen}>
      <MailIcon color="action" />
    </Badge>
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          song Data mismatch
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
           we found a song that was available on spotify handle but not on other channels handles
          </Typography>
          <Typography gutterBottom>
            <Box sx={{display : 'flex'}}>
              <img src={spotify} style={{width: '100px', height: '50px' }} alt="spotify"/>
              <Box sx={{display : 'flex', flexDirection : 'column'}}>
               <span>Aint No Sunshine</span>
               <span className="song-description">Bill withers just as i am </span>
              </Box>
            </Box>
          </Typography>
          <Box sx={{display : 'flex', flexDirection : 'column', gap : '20px'}}>
          
          
          <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          border: '1px solid black',
          borderRadius: '25px'
        }}
      >
        <Box sx={{display: 'flex', gap: '20px'}}>
        <AddTaskIcon/>
        
        <img style={{width : "30px"}} src={spotify} alt="spotify"/>
          <span>spotify</span>
        </Box>
          <ArrowCircleRightOutlinedIcon />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          border: '1px solid black',
          borderRadius: '25px'
        }}
      >
        <Box sx={{display: 'flex', gap: '20px'}}>
        <WarningAmberOutlinedIcon sx={{ color: 'red' }}/>
        
        <img style={{width : "30px"}} src={youtube} alt="youtube"/>
          <span>Youtube</span>
        </Box>
          <ArrowCircleRightOutlinedIcon />
      </Box>
      </Box>
        </DialogContent>
      </BootstrapDialog>
      </header>
    </div>
  );
}

export default App;
