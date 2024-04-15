import { ServicesHeader } from "./componants/serviceHeader-component/index"
import Branding from "./componants/branding-component/index"
import { serviceData,serviceData1,serviceData2,serviceData3} from "./data/service-data"
import Webapp from './componants/webApp-component/index'
import Mobileapp from "./componants/mobileApp-component/index"
import DigitalMarketing from "./componants/digitalMarketing-component/index"
import Servicefooter from "./componants/serviceFooter-component/index"
export function ServicesPage() {
  return (
    <>
      <main className="mt-0 transition-all duration-200 ease-in-out">
        <ServicesHeader />
        <Branding serviceData={serviceData} />
        <Webapp serviceData={serviceData1} />
        <Mobileapp serviceData={serviceData2} />
        <DigitalMarketing serviceData={serviceData3} />
        <Servicefooter />
      </main>
    </>
  );
}