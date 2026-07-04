import { createContext , useState   , useContext} from "react";

const CityContext = createContext()

export function CityProvider({children}){
    const [city , setCity] = useState([])


    const value = {
        city ,
        setCity
    }

    return (
        <CityContext.Provider value ={value}>
            {children}
        </CityContext.Provider>
    )
}
export function useCity() {
    const context = useContext(CityContext);
    if (!context) {
        throw new Error("useCity must be used within CityProvider");
    }
    return context;
}