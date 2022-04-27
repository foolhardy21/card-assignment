import Box from '@mui/material/Box';
import DropboxChooser from 'react-dropbox-chooser';
import Button from '@mui/material/Button';
import { useCard } from '../contexts/card.context';

const APP_KEY = 'x373wmuwhiqefbg'

const FileDrop = () => {
    const { setProgress, setFile } = useCard()

    const handleSuccess = (files) => {
        setProgress(p => p + 20)
        setFile(files[0])
    }

    return (
        <Box>
            <DropboxChooser
                appKey={APP_KEY}
                success={handleSuccess}
                cancel={() => console.log('closed')}
                extensions={['.pdf', '.jpg']} >
                <Button>drop</Button>
            </DropboxChooser>
        </Box>
    )
}

export default FileDrop