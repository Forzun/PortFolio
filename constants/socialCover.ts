import { GithubSquare } from "@/components/Icons/GithubSquare"
import { Linkedin } from "@/components/Icons/Linkedin"
import { CvSquare } from "@/components/Icons/Resume"
import { XTwitterSquare } from "@/components/Icons/TwitterSquare"

export interface SocialMediaProps {
    icons: React.ComponentType<{ className?: string | undefined }>
    name: string
    href: string
}


export const SocialMedia: SocialMediaProps[] = [
    {
        name: "Github", 
        icons: GithubSquare, 
        href: "https://github.com/Forzun"
    },
    {
        name: "Linkedin", 
        icons: Linkedin, 
        href: "https://github.com/Forzun"
    },
    {
        name: "Twitter", 
        icons:  XTwitterSquare,
        href: "https://github.com/Forzun"
    },
    {
        name: "Resume", 
        icons: CvSquare, 
        href: "https://github.com/Forzun"
    },
]





