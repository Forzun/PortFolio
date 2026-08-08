import { linkedinIcon, twitterIcon } from "@/components/Icons"
import { GithubSquare } from "@/components/Icons/GithubSquare"
import { CvSquare } from "@/components/Icons/Resume"
import { IconBrandStackoverflow } from "@tabler/icons-react"
import { MailIcon } from "lucide-react"
import randomCover from "./index"

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
        hover: false 
    },
    {
        label: "Linkedin", 
        icons: linkedinIcon, 
        href: "https://www.linkedin.com/in/bhavesh-mandawriya-981a4228b/",
        width: 3, 
        hover: false 
    },
    {
        label: "Resume", 
        icons:  CvSquare,
        href: "https://drive.google.com/file/d/1fp7G_PIOXCwzdp1H-788eKFIYCkI8Aby/view?usp=sharing",
        width: 3, 
        hover: false
    },
    {
        label: "Twitter", 
        icons: twitterIcon, 
        href: "https://x.com/ForZun_",
        width: 2, 
        hover: false
    },
    {
        label: "Gmail", 
        icons:  MailIcon,
        href: "",
        width: 2, 
        hover: false,
    },
    {
        label: "", 
        icons: randomCover(),
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
        href: "https://stackoverflow.com/users/26537356/forzun",
        width: 3, 
        hover: false
    },
]

