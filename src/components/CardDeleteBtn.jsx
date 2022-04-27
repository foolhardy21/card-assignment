import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCard } from '../contexts/card.context';

const CardDeleteBtn = () => {
    const { setIsCardVisible, setProgress, setFile, setIsClosingDateInputDisabled } = useCard()

    const handleCardDelete = () => {
        setProgress(0)
        setFile({})
        setIsClosingDateInputDisabled(true)
        setIsCardVisible(false)
    }

    return (
        <Button onClick={handleCardDelete}>
            <DeleteIcon />
        </Button>
    )
}

export default CardDeleteBtn