import { Accordion } from 'flowbite-react';
import vectorImage from '../../../assets/images/Service-page-image/Vector.jpg'
export default function DefaultAccordion() {
  return (
    <Accordion className='mt-10 mb-8'>
      <Accordion.Panel>
        <Accordion.Title >
          <div className='flex gap-3'><img className='h-[1rem] mt-1 w-[1rem]' src={vectorImage} alt="" />
            <p> Website & Mobile App Design
            </p>
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <p className="text-black-500  text-sm">
            We have created a full stack structure for our working
            workflow processes, were from the funny the century initial all the madness.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          <div className='flex gap-3'><img className='h-[1rem] mt-1 w-[1rem]' src={vectorImage} alt="" />
            <p> Motion Graphics & Animation
            </p></div>
        </Accordion.Title>
        <Accordion.Content>
          <p className="text-black-500 text-sm">
            We have created a full stack structure for our working
            workflow processes, were from the funny the century initial all the madness.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}
