import { useEffect } from "react"
import { useActualSectionContext } from "@/context/ActualSectionContext"
import sections, { sectionsValues } from "@/constants/sections"

export default function useUpdateActualSection(mainRef: React.RefObject<HTMLElement>) {
    const { setSection, section } = useActualSectionContext()

    useEffect(() => {
        const handleScroll = () => {
            const main = mainRef.current
            if (!main) return
            const { scrollTop, clientHeight } = main
            const sectionFinded = sectionsValues.find((_section, index) => {
                return scrollTop > clientHeight * (index - 0.5) && scrollTop < clientHeight * (index + 0.5)
            })
            setSection(sectionFinded ?? sections.getStarted)
        }

        const main = mainRef.current
        if (!main) return
        main.addEventListener("scroll", handleScroll)

        return () => {
            main.removeEventListener("scroll", handleScroll)
        }
    }, [setSection, mainRef])


    useEffect(() => {
        for (const eachSection of sectionsValues) {
            if (eachSection === section) {
                window.history.replaceState(null, '', section.path);
                break
            }
        }
    }, [section])

    return { mainRef }
}