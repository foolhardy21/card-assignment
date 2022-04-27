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
import DropboxChooser from 'react-dropbox-chooser';


const CardComponent = ({ setIsCardVisible }) => {
    const [progress, setProgress] = useState(0)
    const [isClosingDateInputDisabled, setClosingDateInputDisabled] = useState(true)
    const [date, setDate] = useState('')
    const [uploadedFile, setUploadedFile] = useState({})

    const handleCardEdit = () => {
        setClosingDateInputDisabled(!isClosingDateInputDisabled)
    }
    const handleSuccess = (files) => {
        setUploadedFile(files[0])
    }

    return (
        <Card sx={{ width: 2 / 4, display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Typography sx={{ fontSize: 20, mb: 1 }} color="text.primary">
                    Card Name: Dashboard
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', mb: 1 }}>
                    <Typography sx={{ fontSize: 20, mr: 2 }} color="text.primary">
                        Closing Date:
                    </Typography>
                    <TextField
                        disabled={isClosingDateInputDisabled}
                        label="Closing"
                        type="datetime-local"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        sx={{ width: '40%' }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                    Report: {uploadedFile.name}
                </Typography>
                <LinearProgress variant="determinate" color="success" value={progress} />
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box>
                    <Button onClick={handleCardEdit}>
                        <EditIcon />
                    </Button>
                    <Button onClick={() => setIsCardVisible(false)}>
                        <DeleteIcon />
                    </Button>
                </Box>
                <Box>
                    <Button onClick={() => setProgress(30)}>
                        <FileUploadIcon />
                    </Button>
                    <Button onClick={() => setProgress(65)}>
                        <FileDownloadDoneIcon />
                    </Button>
                    <Button onClick={() => setProgress(100)}>
                        <AssignmentTurnedInIcon />
                    </Button>
                </Box>
                <Box>
                    <DropboxChooser
                        appKey={'x373wmuwhiqefbg'}
                        success={handleSuccess}
                        cancel={() => console.log('closed')}
                        extensions={['.pdf', '.docx', '.jpg']} >
                        <Button>drop</Button>
                    </DropboxChooser>
                </Box>
            </CardActions>
        </Card>
    )
}

export default CardComponent