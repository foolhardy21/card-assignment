import CardComponent from "./components/Card";
import Button from '@mui/material/Button';
import { useCard } from "./contexts/card.context";

const App = () => {
  const { isCardVisible, setIsCardVisible } = useCard()

  return (
    <>
      {!isCardVisible && <Button variant="contained" onClick={() => setIsCardVisible(true)}>show the card</Button>}
      {isCardVisible && <CardComponent />}
    </>
  );
}

export default App;
