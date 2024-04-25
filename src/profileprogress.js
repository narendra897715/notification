import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Divider } from '@mui/material';
function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" color="success" sx={{height: '15px', borderRadius : '5px'}} {...props} />
        </Box>
      </Box>
    );
  }
  
const ProfileProgress = () => {
    const [progress, setProgress] = React.useState(10);
   const handleUploadFile = (e) => {
        setProgress(30)
    }
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
          <Typography variant="h5" component="div">
            Complete Your profile
            </Typography>
            <Box sx={{ width: '100%', margin : '20px 0'  }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
    <Divider />
    <Box sx={{display : 'flex', flexDirection : 'column', gap : '20px', marginTop: '10px'}}>
          
          
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
          <span>Grade</span>
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
          <span>Bio</span>
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
        <label className="custom-file-upload">
    <input type="file" onChange={handleUploadFile}/>
   upload Profile pic
</label>
        </Box>
          <ArrowCircleRightOutlinedIcon />
      </Box>
      </Box>
           
          </CardContent>
        
        </Card>
      );
}
export default ProfileProgress;