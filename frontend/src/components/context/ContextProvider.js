import React, {createContext, useState} from 'react'

export const addMember = createContext("");
export const modifyMember = createContext("");
export const deleteMember = createContext("");
export const alreadyMember = createContext("");
export const searchPhrase = createContext("");
export const showError = createContext("");

const ContextProvider = ({children}) => {

const [newMember,setPanelMember] = useState("");
const [modifiedMember,setModifiedMember] = useState("");
const [deletedMember,setDeletedMember] = useState("");
const [existingMember,setExistingMember] = useState("");
const [searchTerm,setSearchTerm] = useState("");
const [errorMsg,setErrorMsg] = useState("");


return (    
<addMember.Provider value={{newMember,setPanelMember}}>
    <modifyMember.Provider value={{modifiedMember,setModifiedMember}}>
        <deleteMember.Provider value={{deletedMember,setDeletedMember}}>
        <alreadyMember.Provider value={{existingMember,setExistingMember}}>
        <searchPhrase.Provider value={{searchTerm,setSearchTerm}}>
        <showError.Provider value={{errorMsg,setErrorMsg}}>
            {children}
        </showError.Provider>
        </searchPhrase.Provider>
        </alreadyMember.Provider>
        </deleteMember.Provider>
    </modifyMember.Provider>
</addMember.Provider>
)
}

export default ContextProvider;