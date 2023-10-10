import sections from "@/constants/sections"
import SectionBox from "@/components/SectionBox"
import Image from "next/image"
import yo from "@/../public/yo.jpg"
import StackElement from "../StackElement"

export default function GetStarted() {
    const stackElements = [
        {
            title: "JavaScript",
            icon: "/stack/javascript.svg",
            description: "JavaScript",
        },
        {
            title: "TypeScript",
            icon: "/stack/typescript.svg",
            description: "TypeScript",
        },
        {
            title: "React",
            icon: "/stack/react.svg",
            description: "React",
        },
        {
            title: "Next.js",
            icon: "/stack/nextjs.svg",
            description: "Next.js",
        },
        {
            title: "Node.js",
            icon: "/stack/nodejs.svg",
            description: "Node.js",
        },
        {
            title: "Express",
            icon: "/stack/express.svg",
            description: "Express",
        },
        {
            title: "CSS",
            icon: "/stack/css.svg",
            description: "CSS",
        },
        {
            title: "Tailwind",
            icon: "/stack/tailwindcss.svg",
            description: "Tailwind",
        },
        {
            title: "MongoDB",
            icon: "/stack/mongodb.svg",
            description: "MongoDB",
        },
        {
            title: "Git",
            icon: "/stack/git.svg",
            description: "Git",
        }
    ];
    
    return (
        <SectionBox id={sections.getStarted.id}>
            <div className="flex flex-col justify-center w-full h-full gap-10">
                <div
                    className="flex flex-col justify-center"
                >
                    <div className="flex justify-center pb-10">
                        <Image
                            src={yo}
                            alt="Foto de perfil"
                            className="rounded-full"
                            width={300}
                            height={300}
                            placeholder="blur"
                        />
                    </div>
                    <h3 className="text-base text-gray-700">Hola 👋</h3>
                    <h1 className="pb-4 text-4xl font-bold">Soy Nikita Kuzmenko</h1>
                    <h2 className="text-2xl font-bold text-gradient">Desarrollador Full Stack</h2>
                </div>
                <div>
                    <h3 className="mb-4 text-2xl text-center text-gray-700">Tech Stack</h3>
                    <div className="grid w-full h-auto grid-cols-5 gap-2 mobile:flex mobile:h-34 mobile:overflow-x-auto noMobile:place-content-center mobile:p-2">
                        {stackElements.map(({title, icon, description}, index) => (
                            <StackElement
                                key={index}
                                title={title}
                                icon={icon}
                                description={description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </SectionBox>
    )
}