import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useCard } from '../contexts/card.context';

const ClosingDate = () => {
    const [date, setDate] = useState('')
    const { isClosingDateInputDisabled, setProgress } = useCard()

    useEffect(() => {
        if (date !== '') {
            setProgress(p => p + 20)
        }
    }, [date])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', mt: 1, ml: 1 }}>
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
    )
}

export default ClosingDate