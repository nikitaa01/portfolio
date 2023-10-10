import Image from "next/image";

export default function StackElement({ title, icon, description, onlyPc }: { title: string, icon: string | React.ReactNode, description: string, onlyPc?: boolean }) {
    return (
        <div
            className={`flex items-center w-auto p-4 border rounded-lg shadow-sm mobile:w-28 mobile:h-28 mobile:aspect-square ${onlyPc ? "mobile:hidden" : ""}`}
        >
            <div
                className="flex flex-col items-center justify-start w-full gap-2"
            >
                <div
                    className="text-center text-gray-700 whitespace-nowrap tablet:text-sm"
                >
                    {title}
                </div>
                <div
                    className="flex items-center justify-center w-8 h-8"
                >
                    {typeof icon === "string"
                        ? <Image
                            src={icon}
                            alt={description}
                            height={32}
                            width={32}
                            className="aspect-square"
                        />
                        : icon
                    }
                </div>
            </div>
        </div>
    )
}