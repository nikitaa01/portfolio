export default function SectionBox({ id, children, }: { id?: string, children: React.ReactNode }) {
    return (
        <section className="w-2/4 p-10 mx-auto tablet:w-5/6 mobile:w-11/12 tablet:mr-12 mobile:px-5" id={id}>
            <div className="h-full p-10 mt-2 bg-white border shadow bg-opacity-60 rounded-xl mobile:p-5">
                {children}
            </div>
        </section>
    )
}