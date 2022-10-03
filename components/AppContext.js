import { createContext } from "react";
import React,{useState} from "react";

export const contexto = createContext();
const {Provider} = contexto;

const AppContext = ({children}) => {
   

const [monedas , setMonedas] = useState(10000);

const descontarMonedas = (min) =>{
    setMonedas(monedas - min);
}

const sumarMonedas = (mas)=>{
    setMonedas(mas + monedas)
}

    

    return (
        <Provider value={{ monedas , descontarMonedas,sumarMonedas}}>
            {children}
        </Provider>
    );
}



export default AppContext