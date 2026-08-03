import { twitterIcon } from "@/components/Icons"
import { GithubSquare } from "@/components/Icons/GithubSquare"
import { Linkedin } from "@/components/Icons/Linkedin"
import { CvSquare } from "@/components/Icons/Resume"
import { XTwitterSquare } from "@/components/Icons/TwitterSquare"
import { IconBrandStackoverflow } from "@tabler/icons-react"
import { MailIcon } from "lucide-react"

export interface SocialMediaProps {
    icons: React.ComponentType<{ className?: string | undefined }> | string
    label: string
    href: string
    width: number 
    hover: boolean 
}


export const SocialMedia: SocialMediaProps[] = [
    {
        label: "Github", 
        icons: GithubSquare, 
        href: "https://github.com/Forzun",
        width: 3,
        hover: true
    },
    {
        label: "Linkedin", 
        icons: Linkedin, 
        href: "https://www.linkedin.com/in/bhavesh-mandawriya-981a4228b/",
        width: 3, 
        hover: true
    },
    {
        label: "Resume", 
        icons:  CvSquare,
        href: "",
        width: 3, 
        hover: true
    },
    {
        label: "Twitter", 
        icons: twitterIcon, 
        href: "https://x.com/ForZun_",
        width: 2, 
        hover: true
    },
    {
        label: "Gmail", 
        icons:  MailIcon,
        href: "https://x.com/ForZun_",
        width: 2, 
        hover: true,
    },
    {
        label: "", 
        icons: "https://i.pinimg.com/originals/e3/7c/63/e37c634e6f4b61dcad982ee3d5d74c85.gif",
        href: "#", 
        width: 4, 
        hover: false
    },
    { 
        label: "", 
        icons: "https://i.pinimg.com/originals/49/2b/d9/492bd933d364679be2379b3b3d725be7.gif", 
        href: "#",
        width: 1,
        hover: false
    },
    {
        label: "Stack oveflow", 
        icons: IconBrandStackoverflow, 
        href: "https://drive.google.com/file/d/1k0TUVmujm58ORB-05m31pQ6KvRUjVbri/view?usp=sharing",
        width: 3, 
        hover: true
    },
]





