import { GithubFilled, LinkedinFilled, MailOutlined } from "@ant-design/icons";

export default function Header() {
    return (
        <header className="fixed inset-0 z-50 mx-3 h-14">
            <ul className="flex justify-start items-center h-full gap-8 [&_svg]:w-6 [&_svg]:h-6">
                <li className="flex items-center justify-center h-full">
                    <a
                        className="flex items-center justify-center text-lg font-bold underline duration-200 decoration-transparent hover:decoration-main hover:text-main"
                        target="_blank"
                        rel="noreferrer"
                        href="/cvnikita.pdf"
                    >
                        <div>CV</div>
                    </a>
                </li>
                <li className="flex items-center justify-center h-full">
                    <a
                        className="flex items-center text-lg font-bold transition duration-200 hover:scale-105 hover:text-main"
                        rel="noreferrer"
                        href="mailto:nikitakuzmenko1107@gmail.com"
                    >
                        <MailOutlined className="h-6 aspect-square" />
                    </a>
                </li>
                <li className="flex items-center justify-center h-full">
                    <a
                        className="flex items-center text-lg font-bold transition duration-200 hover:scale-105 hover:text-main"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/nikitaa01"
                    >
                        <GithubFilled className="h-6 aspect-square" />
                    </a>
                </li>
                <li className="flex items-center justify-center h-full">
                    <a
                        className="flex items-center text-lg font-bold transition duration-200 hover:scale-105 hover:text-main"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/nikitaakuzmenko/"
                    >
                        <LinkedinFilled className="h-6 aspect-square" />
                    </a>
                </li>
            </ul>
        </header>
    )
}