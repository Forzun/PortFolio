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
        href: "https://www.linkedin.com/in/bhavesh-mandawriya-981a4228b/"
    },
    {
        name: "Twitter", 
        icons:  XTwitterSquare,
        href: "https://x.com/ForZun_"
    },
    {
        name: "Resume", 
        icons: CvSquare, 
        href: "https://drive.google.com/file/d/116KwEA-gsFBNsq4AGT0A6rlqf_BA8iw3/view"
    },
]





