import { createContext, useContext, useState } from "react";

const CardContext = createContext()

export const CardProvider = ({ children }) => {
    const [isCardVisible, setIsCardVisible] = useState(false)
    const [isClosingDateInputDisabled, setIsClosingDateInputDisabled] = useState(true)
    const [progress, setProgress] = useState(0)
    const [file, setFile] = useState({})

    return (
        <CardContext.Provider
            value={{
                isCardVisible,
                setIsCardVisible,
                isClosingDateInputDisabled,
                setIsClosingDateInputDisabled,
                progress,
                setProgress,
                file,
                setFile,
            }}
        >
            {children}
        </CardContext.Provider>
    )
}

export const useCard = () => useContext(CardContext)