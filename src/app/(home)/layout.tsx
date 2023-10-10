'use client'
import { useRef } from "react"
import { ActualPageProvider } from '@/context/ActualSectionContext'
import sections, { sectionsValues } from '@/constants/sections'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import SetupScrollHooks from "@/components/SetupScrollHooks"
import GradientBG from "@/components/GradientBG"

export default function Home() {
    const mainRef = useRef<HTMLElement>(null)

    return (
        <ActualPageProvider
            defaultSection={sections.getStarted}
        >
            <GradientBG />
            <SetupScrollHooks mainRef={mainRef} />
            <Header />
            <Navbar />
            <main
                ref={mainRef}
            >
                {sectionsValues.map(({ Component }, key) => <Component key={key} />)}
            </main>
        </ActualPageProvider>

    )
}
