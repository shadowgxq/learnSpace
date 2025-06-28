import { useContext, createContext } from 'react'

export interface IGlobalContext {
}
const GlobalContext = createContext<IGlobalContext>({})
export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = (props: any) => {
    return (
        <GlobalContext.Provider value={{}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
