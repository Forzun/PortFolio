import { GithubSquare } from "@/components/Icons/GithubSquare"
import { Linkedin } from "@/components/Icons/Linkedin"

export interface SocialMediaProps { 
    icons: React.ComponentType
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
        name: "Github", 
        icons: GithubSquare, 
        href: "https://github.com/Forzun"
    },
    {
        name: "Github", 
        icons: GithubSquare, 
        href: "https://github.com/Forzun"
    },
]





