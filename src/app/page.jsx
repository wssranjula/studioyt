import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            The Leading Providers of Cutting-Edge AI Solutions
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Techtonic is your end-to-end AI development partner, supporting you
            through every phase from the initial concept to the final product
            and beyond.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at TechTonic went above and beyond with our onboarding, Easy to
        work and they understand exaclty what we want.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
