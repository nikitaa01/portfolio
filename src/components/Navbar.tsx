import {sectionsValues} from "@/constants/sections"
import NavbarElements from "./NavbarElements"


export default function Navbar() {

    return (
        <nav className="fixed top-0 left-0 flex flex-col items-center justify-center h-full ml-3 pb-14 mobile:hidden">
            <ul className="flex flex-col items-start justify-center gap-6">
                {sectionsValues.map((element, index) => (
                    <NavbarElements
                        key={index}
                        {...element}
                    />
                ))}
            </ul>
        </nav>
    )
}