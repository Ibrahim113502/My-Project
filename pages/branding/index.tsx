import { Brandingheader } from "./componants/brandingheader-component/index";
import { OurPassion } from "./componants/ourPassion-component/index"
import { OurServices} from "./componants/ourServices-component/index"
import  Brandingfooter  from "./componants/brandingFooter-component/index"
import BrandingContent from "./componants/brandingContent-component/index";
export function BrandingPage() {
    return (
      <>
      <Brandingheader/>
      <BrandingContent/>
      <OurServices/>
      <OurPassion/>
      <Brandingfooter />
      </>
    );
  }
 