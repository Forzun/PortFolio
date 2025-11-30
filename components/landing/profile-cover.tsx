import { Avatar, AvatarImage } from "../ui/avatar";
import ProfileCoverButton from "../custom/profile-cover-button";
import { githubIcon } from "../Icons";

export default function ProfileCover() {
  return (
    <div className="container mx-auto mt-20 mb-10 flex flex-col sm:flex-row md:mt-12">
      <div className="flex h-full max-h-43 w-full max-w-44 flex-shrink-0 items-center justify-center sm:border-[1px] sm:border-neutral-200/60 sm:dark:border-neutral-800/60">
        <div className="relative flex h-full w-full items-center justify-center rounded-full border-[1px] border-neutral-300 p-[1px] dark:border-neutral-700">
          <Avatar className="h-full w-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
        </div>
      </div>

      <div className="relative flex w-full justify-end border-y-[1px] border-neutral-200/60 dark:border-neutral-800/60">
        <div className="inner-dot absolute inset-0 z-0 h-full w-full bg-white dark:bg-neutral-900"></div>
        <div className="relative flex w-full max-w-lg px-1 py-2">
          <div className="grid w-full grid-cols-2 items-center gap-1 text-neutral-500">
            <ProfileCoverButton className="col-span-1" svg={githubIcon}>
              GitHub
            </ProfileCoverButton>
            <ProfileCoverButton className="col-span-1" svg={githubIcon}>
              GitHub
            </ProfileCoverButton>
            <ProfileCoverButton className="col-span-1" svg={githubIcon}>
              GitHub
            </ProfileCoverButton>
            <ProfileCoverButton className="col-span-1" svg={githubIcon}>
              GitHub
            </ProfileCoverButton>
          </div>
        </div>
      </div>
    </div>
  );
}
