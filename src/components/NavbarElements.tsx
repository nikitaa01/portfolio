import { useState, useEffect } from "react"
import { useActualSectionContext } from "@/context/ActualSectionContext"
import Section from "@/interfaces/sections"

export default function NavbarElements({ symbol, name, id }: Section) {
    const { section } = useActualSectionContext()
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        if (section.symbol === symbol) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [section, symbol])

    return (
        <li className=''>
            <a
                className={`font-bold text-lg mobile:text-sm ${active ? 'underline' : ''}`}
                href={`#${id}`}
            >
                {name}
            </a>
        </li>
    )
}