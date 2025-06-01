import { createContext } from "react"

export const AppContext=createContext()

const AppContextProvider=(props)=>{

    const calculateage=(dob)=>{
        const today= new Date()
        const birthdate=new Date(dob)
        let age=today.getFullYear()-birthdate.getFullYear()
        return age;
    }
    const currency='$'
    const month = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + month[Number[dateArray[1]]] + " " + dateArray[2]
  }
    const value={
      calculateage,
      slotDateFormat,
      currency
    }
    return (

    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
    )
}
export default AppContextProvider




