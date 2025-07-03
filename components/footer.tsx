import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Link } from "next-view-transitions";
import Container from "./container";

export default function Footer() {
  return (
    <Container className="flex justify-between border-t border-neutral-100 px-3 py-3">
      <p className="text-xs text-neutral-500">
        Designed and Developed by ForZun
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://x.com/ForZun_">
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://www.linkedin.com/in/bhavesh-mandawriya-981a4228b/">
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com/forzun">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
}
