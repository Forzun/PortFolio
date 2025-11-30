import { ResumeIcon, githubIcon, linkedinIcon } from "@/components/Icons";
import { AddFriendsFilled } from "@/components/Icons/Connect";
import { Email } from "@/components/Icons/Email";
import { X } from "@/components/Icons/Twitter";

export interface ProfileCoverMediaProps { 
    name: string, 
    svg: React.ComponentType,
    tooltip?: string, 
    href?: string,
}

export const ProfileCoverMenue = {

    medias: [ 
        {
         name: 'Github',
            svg: githubIcon,
            tooltip: "Github",
            href: "https://github.com/Forzun",
         },
         { 
            name: "x",
            svg: X,
            tooltip: "x",
            href: "https://github.com/Forzun",
         },
         { 
            name: "linkedin",
            svg: linkedinIcon,
            tooltip: "Linkedin",
            href: "https://github.com/Forzun",
         },
         { 
            name: "Email", 
            svg: Email,
            tooltip: "Email",
            href: "https://github.com/Forzun",
         },
    ],

    buttons: [
      {
         variant: 'primary',
         text: "Resume", 
         href:"github.com/Forzun", 
         icon: ResumeIcon
      }, 
      { 
          variant: 'default',
          text: 'Connect',
          href: "https://github.com/Forzun",
          icon: AddFriendsFilled
      }
    ]
    
}

