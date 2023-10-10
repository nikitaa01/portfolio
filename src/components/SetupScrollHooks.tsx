import useScrollToSection from "@/hooks/useScrollToSection"
import useUpdateActualSection from "@/hooks/useUpdateActualSection"

export default function SetupScrollHooks({ mainRef }: { mainRef: React.RefObject<HTMLElement> }) {
    useUpdateActualSection(mainRef)
    useScrollToSection(mainRef)
    return null
}