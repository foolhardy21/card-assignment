import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Card Name: Dashboard
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Closing Date:
        </Typography>
        <TextField
          id="datetime-local"
          label="closing"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Report:
        </Typography>
        <LinearProgress variant="determinate" color="success" value={progress} />
      </CardContent>

      <CardActions>
        <EditIcon />
        <DeleteIcon />
        <FileUploadIcon />
        <FileDownloadDoneIcon />
        <AssignmentTurnedInIcon />
      </CardActions>
    </Card>
  );
}

export default App;
