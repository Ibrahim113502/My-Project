import AboutTestimonial from "./about-component/Testimonial-component";
import AboutClient from "./about-component/aboutClients-component";
import AboutHeading from "./about-component/aboutHeading-component";
import AboutAward from "./about-component/award-component";
import OurTeam from "./about-component/ourTeam-component";

export function AboutUsPage() {
  return (
    <main className="mt-0 transition-all duration-200 ease-in-out">
      <section className="min-h-screen">
        <AboutHeading />
        <AboutClient />
        <AboutTestimonial />
        <AboutAward />
        <OurTeam />
      </section>
    </main>
  );
}
