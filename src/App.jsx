import { useState } from "react";
import CardComponent from "./components/Card";
import Button from '@mui/material/Button';

const App = () => {
  const [isCardVisible, setIsCardVisible] = useState(false)

  return (
    <>
      {!isCardVisible && <Button variant="contained" onClick={() => setIsCardVisible(true)}>show the card</Button>}
      {isCardVisible && <CardComponent setIsCardVisible={setIsCardVisible} />}
    </>
  );
}

export default App;
