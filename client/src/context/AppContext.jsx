import { createContext, useState, useEffect } from "react";
import { assets, jobsData } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    })

    const [isSearched, setIsSearched] = useState(false)
    const [jobs, setJobs] = useState(jobsData)
    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)

    const value = {
        searchFilter,
        setSearchFilter,
        isSearched,
        setIsSearched,
        jobs,
        showRecruiterLogin, 
        setShowRecruiterLogin,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}