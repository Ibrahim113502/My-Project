import MapComponent from "./contact-component/contactMap-component";
import ContactSecOne from "./contact-component/contactSecOne-component";
import ContactSecTwo from "./contact-component/contactSecTwo-component";


export function ContactUsPage() {
    return (
      <main className="">
        <section className="">
          <ContactSecOne/>
          <MapComponent/>
         <ContactSecTwo/>
        </section>
      </main>
    );
  }