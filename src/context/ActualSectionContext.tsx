'use client'
import Section from "@/interfaces/sections"
import { createContext, useState, useContext } from "react"

type ActualSectionContextType = {
    section: Section,
    setSection: (name: Section) => void
}

const ActualSectionContext = createContext<ActualSectionContextType | null>(null)

const ActualPageProvider = ({ defaultSection, children }: { defaultSection: Section, children: React.ReactNode }) => {
    const [section, setSection] = useState<Section>(defaultSection)

    return (
        <ActualSectionContext.Provider value={{ section, setSection }}>
            {children}
        </ActualSectionContext.Provider>
    )
}

const useActualSectionContext = () => {
    const context = useContext(ActualSectionContext)

    if (!context) {
        throw new Error(
            'useActualSectionContext must be used within a ActualSectionProvider'
        )
    }

    return context
}

export { ActualPageProvider, useActualSectionContext }