import { createContext } from "react";

export const contexto = createContext();
const {Provider} = contexto;

const AppContext = ({children}) => {
   

    

    return (
        <Provider value={{ }}>
            {children}
        </Provider>
    );
}



export default AppContext