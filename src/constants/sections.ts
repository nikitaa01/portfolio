import Contact from "@/components/mainSections/Contact"
import GetStarted from "@/components/mainSections/GetStarted"
import Projects from "@/components/mainSections/Projects"
import Section from "@/interfaces/sections"

const sections: {
    getStarted: Section
    projects: Section
    contact: Section
} = {
    getStarted: {
        symbol: Symbol(),
        path: "/",
        id: "getStarted",
        name: "Inicio",
        Component: GetStarted,
    },
    projects: {
        symbol: Symbol(),
        path: "/projects",
        id: "projects",
        name: "Proyectos",
        Component: Projects,
    },
    contact: {
        symbol: Symbol(),
        path: "/contact",
        id: "contact",
        name: "Contacto",
        Component: Contact,
    },
}

const sectionsValues: Section[] = Object.values(sections)

export default sections

export { sectionsValues }