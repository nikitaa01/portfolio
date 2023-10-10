import { redirect, usePathname } from "next/navigation"
import { useEffect } from "react"
import { sectionsValues } from "@/constants/sections"

const useScrollToSection = (mainRef: React.RefObject<HTMLElement>) => {
    const pathname = usePathname()

    useEffect(() => {
        if (!mainRef.current) return
        const { clientHeight } = mainRef.current
        const sectionFinded = sectionsValues.findIndex((section) => section.path === pathname)
        if (sectionFinded === -1) return redirect("/")
        mainRef.current.scroll({ top: clientHeight * sectionFinded, behavior: "auto" })
    }, [pathname, mainRef])

}

export default useScrollToSection