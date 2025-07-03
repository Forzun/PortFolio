import ContactForm from "@/components/contact-form";
import Container from "@/components/container";
import Heading from "@/components/headng";
import Scale from "@/components/scales";
import SubHeading from "@/components/SubHeading";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen relative px-8 md:pt-20 md:pb-10">
        <Scale />
        <Heading>Contact Me</Heading>
        <SubHeading>I'm open to work, let's connect</SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}
