import HeroComponent from "../home/home-components/hero-component/index";
import ContentComponent from "../home/home-components/content-component";
import WebAppComponent from "../home/home-components/webApp-component";
import VideoComponent from "./home-components/video-component";
import DemoSection from "./home-components/demoSection-component";
import Datatracking from "./home-components/datatracking-component";
import GuideComponent from "./home-components/Guide-Component";
import ServiceComponent from "./home-components/service-component";
import ProcessComponent from "./home-components/process-component";
import CustomerComponent from "./home-components/customer-component";
import Ourservice from "./home-components/ourService-component";
export function HomePage() {
  return (
    <main className=" ">
      <section className="">
        <HeroComponent />
        <ContentComponent />
        <WebAppComponent />
        <VideoComponent />
        <DemoSection />
        <Datatracking />
        <GuideComponent />
        <ServiceComponent />
        <ProcessComponent />
        <CustomerComponent />
        <Ourservice />
      </section>
    </main>
  );
}
