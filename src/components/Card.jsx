import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Box from '@mui/material/Box';


const CardComponent = () => {
    const [progress, setProgress] = useState(0)

    return (
        <Card sx={{ width: 2 / 4, display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Typography sx={{ fontSize: 20, mb: 1 }} color="text.primary" gutterBottom>
                    Card Name: Dashboard
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', mb: 1 }}>
                    <Typography sx={{ fontSize: 20, mr: 2 }} color="text.primary" gutterBottom>
                        Closing Date:
                    </Typography>
                    <TextField
                        id="datetime-local"
                        label="Closing"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                    Report:
                </Typography>
                <LinearProgress variant="determinate" color="success" value={progress} />
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box>
                    <Button>
                        <EditIcon />
                    </Button>
                    <Button>
                        <DeleteIcon />
                    </Button>
                </Box>
                <Box>
                    <Button>
                        <FileUploadIcon />
                    </Button>
                    <Button>
                        <FileDownloadDoneIcon />
                    </Button>
                    <Button>
                        <AssignmentTurnedInIcon />
                    </Button>
                </Box>
                <Box></Box>
            </CardActions>
        </Card>
    )
}

export default CardComponent