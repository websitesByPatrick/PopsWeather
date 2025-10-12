import React, {useState} from 'react';
import Test from "@/components/Test";

export const WeatherDataContext = React.createContext({})

const GetData = () => {
    const [data, setData] = useState({first: "patrick", last: "nicholas"})

    return (
        <WeatherDataContext.Provider value={{data, setData}}>
            <Test/>
        </WeatherDataContext.Provider>
    )
}
export default GetData