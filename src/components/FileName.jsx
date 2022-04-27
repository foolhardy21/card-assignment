import Typography from '@mui/material/Typography';
import { useCard } from '../contexts/card.context';

const FileName = () => {
    const { file } = useCard()

    return (
        <Typography sx={{ fontSize: 20, mt: 1, ml: 1 }} color="text.primary">
            Report: {file.name}
        </Typography>
    )
}

export default FileName