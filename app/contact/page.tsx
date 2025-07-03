import ContactForm from "@/components/contact-form";
import Container from "@/components/container";
import Heading from "@/components/headng";
import SubHeading from "@/components/SubHeading";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <SubHeading>I'm open to work, let's connect</SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}
