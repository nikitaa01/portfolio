import sections from "@/constants/sections"
import SectionBox from "@/components/SectionBox"
import Image from "next/image"
import pokerBack from "@/../public/projects/poker-back.png"

export default function Projects() {
    return (
        <SectionBox id={sections.projects.id}>
            <div className="flex flex-col items-center justify-center h-full gap-2">
                <Image
                    src={pokerBack}
                    alt="Poker Back"
                    width={2530}
                    height={1289}
                    quality={100}
                    placeholder="blur"
                    className="w-full border border-gray-300 rounded-lg"
                />
            </div>
        </SectionBox>
    )
}