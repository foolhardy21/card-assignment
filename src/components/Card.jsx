import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Box from '@mui/material/Box';
import CardTitle from './CardTitle';
import ClosingDate from './ClosingDate';
import Button from '@mui/material/Button';
import EditDateBtn from './EditDateBtn';
import FileDrop from './FileDrop';
import { useCard } from '../contexts/card.context';
import FileName from './FileName';
import CardDeleteBtn from './CardDeleteBtn';

const CardComponent = () => {
    const { setIsCardVisible, progress, setProgress } = useCard()

    return (
        <Card sx={{ width: 2 / 4, display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ backgroundColor: 'lightblue', p: 0 }}>
                <CardTitle />
                <ClosingDate />
                <FileName />
                <LinearProgress variant="determinate" color="success" value={progress} />
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box>
                    <EditDateBtn />
                    <CardDeleteBtn />
                </Box>
                <Box>
                    <Button onClick={() => setProgress(p => p + 20)}>
                        <FileUploadIcon />
                    </Button>
                    <Button onClick={() => setProgress(p => p + 20)}>
                        <FileDownloadDoneIcon />
                    </Button>
                    <Button onClick={() => setProgress(p => p + 20)}>
                        <AssignmentTurnedInIcon />
                    </Button>
                </Box>
                <FileDrop />
            </CardActions>
        </Card>
    )
}

export default CardComponent