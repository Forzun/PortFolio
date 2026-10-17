import { linkedinIcon, twitterIcon } from "@/components/Icons"
import { CvSquare } from "@/components/Icons/Resume"
import { IconBrandGithub, IconBrandLinkedin, IconBrandStackoverflow, IconBrandX } from "@tabler/icons-react"
import { File, MailIcon, Twitter, TwitterIcon, XIcon } from "lucide-react"

export interface SocialMediaProps {
    icons: React.ComponentType<{ className?: string | undefined }> | string
    label: string
    href: string
    width?: number 
    hover: boolean 
}

export const SocialMedia: SocialMediaProps[] = [
    {
        label: "Github", 
        icons: IconBrandGithub, 
        href: "https://github.com/Forzun",
        hover: false 
    },
    {
        label: "Linkedin", 
        icons: IconBrandLinkedin, 
        href: "https://www.linkedin.com/in/bhavesh-mandawriya-981a4228b/",
        hover: false 
    },
    {
        label: "Resume", 
        icons: File,
        href: "https://drive.google.com/file/d/1fp7G_PIOXCwzdp1H-788eKFIYCkI8Aby/view?usp=sharing",
        hover: false
    },
    {
        label: "Twitter", 
        icons: IconBrandX, 
        href: "https://x.com/ForZun_",
        hover: false
    },
    {
        label: "Gmail", 
        icons:  MailIcon,
        href: "",
        hover: false,
    },
    // {
    //     label: "", 
    //     icons: randomCover(),
    //     href: "#", 
    //     width: 4, 
    //     hover: false
    // },
    // { 
    //     label: "", 
    //     icons: "https://i.pinimg.com/originals/49/2b/d9/492bd933d364679be2379b3b3d725be7.gif", 
    //     href: "#",
    //     width: 1,
    //     hover: false
    // },
    {
        label: "Stack oveflow", 
        icons: IconBrandStackoverflow, 
        href: "https://stackoverflow.com/users/26537356/forzun",
        hover: false
    },
]

