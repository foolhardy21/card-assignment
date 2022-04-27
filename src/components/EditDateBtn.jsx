import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { useCard } from '../contexts/card.context';

const EditDateBtn = () => {
    const { setIsClosingDateInputDisabled, isClosingDateInputDisabled } = useCard()

    return (
        <Button onClick={() => setIsClosingDateInputDisabled(!isClosingDateInputDisabled)}>
            {
                isClosingDateInputDisabled ?
                    <EditIcon />
                    : <CheckIcon />
            }
        </Button>
    )

}

export default EditDateBtn