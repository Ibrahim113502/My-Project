import { PiCirclesThreePlusLight, PiFigmaLogo, PiChartBar, PiChatDots, PiCommandLight } from 'react-icons/pi';
import { GoCpu } from 'react-icons/go'
import ContentImage2 from '../../../../assets/images/Branding-image/Intersect 2.png'
import ContentImage1 from '../../../../assets/images/Branding-image/Intersect1.png'
export default function BrandingContent() {
    let serviceList: any = [{
        id:1,
        icon: <PiFigmaLogo className="w-14 h-14" />,
        title: 'Logo Creation',
        shortNote: 'Your logo is the face of your brand.Our expert designers are dedicated to crafting a logo that encapsulates your brand&#39;s essence.'
    }, {
        id:2,
        icon: <  PiCirclesThreePlusLight className="w-14 h-14" />,
        title: 'Business Card Design',
        shortNote: 'A memorable business card is a powerful networking tool. We design cards that leave a lasting impression.'
    },
    {
        id:3,
        icon: < GoCpu className="w-14 h-14" />,
        title: 'Letterhead Design',
        shortNote: 'Professionalism starts with your letterhead. We create designs that convey trust and credibility.'
    },
    {
        id:4,
        icon: <PiChartBar className="w-14 h-14" />,
        title: 'Banner Design',
        shortNote: 'Eye-catching banners for your website or marketing campaigns to capture attention effectively.'
    },
    {
        id:5,
        icon: <  PiCommandLight className="w-14 h-14 stroke-white stroke-1" />,
        title: 'App Icons',
        shortNote: 'Your app’s icon is often the first thing users see.We design icons that make a strong first impression.'
    },
    {
        id:6,
        icon: < PiChatDots className="w-14 h-14" />,
        title: 'Brand Typography',
        shortNote: 'Crafting the perfect font selection to align with your brand’s voice and personality.'
    },
    {
        id:7,
        icon: <PiChartBar className="w-14 h-14" />,
        title: 'Brand Style Guide',
        shortNote: 'A comprehensive guide that ensures consistency in your brand’s visual identity across all platforms.'
    },
    {
        id:8,
        icon: <  PiCommandLight className="w-14 h-14 stroke-1 stroke-white" />,
        title: 'Color Palette',
        shortNote: 'Selecting a palette that evokes the right emotions and resonates with your target audience.'
    },
    {
        id:9,
        icon: < PiChatDots className="w-14 h-14" />,
        title: 'Miscellaneous Assets',
        shortNote: 'Custom-designed graphics and assets tailored to your specific needs.'
    },
    {
        id:10,
        icon: <PiChartBar className="w-14 h-14" />,
        title: 'Social Media Graphics',
        shortNote: 'Engaging visuals for your social media profiles to enhance your online presence.',
    },
    {
        id:11,
        icon: <  PiCommandLight className="w-14 h-14 stroke-1 stroke-white" />,
        title: 'Ad Design Templates',
        shortNote: 'Templates for advertisements that maintain your brand’s integrity.'
    },
    {
        id:12,
        icon: < PiChatDots className="w-14 h-14" />,
        title: 'Email Templates',
        shortNote: 'Professionally designed email templates to elevate your communication.'
    },
    {
        id:13,
        icon: <PiChartBar className="w-14 h-14" />,
        title: 'Illustrations',
        shortNote: 'Unique and captivating illustrations to enhance your brand storytelling.'
    },
    {
        id:14,
        icon: <  PiCommandLight className="w-14 h-14 stroke-1 stroke-white" />,
        title: 'Slide Deck Presentations',
        shortNote: 'Engaging presentations that leave a lasting impact on your audience.'
    },
    {
        id:15,
        icon: < PiChatDots className="w-14 h-14" />,
        title: 'Video Creation and Editing',
        shortNote: 'From conceptualization to editing, we create compelling videos to promote your brand.'
    },
    ];

    return (
        <>
            <section className=" md:relative ">
                <div className="hidden lg:block md:absolute md:z-index md:-ml-[9px]  md:-mt-[12px] ">
                    <img src={ContentImage1} alt="" />
                </div>
                <div className="hidden lg:block md:absolute md:right-0 md:bottom-0 md:-mr-[19px];">
                    <img src={ContentImage2} alt="" className='h-[41rem]' />
                </div>
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white md:py-24 bg-black md:px-16 lg:pr-32 lg:pl-[160px] p-9 py-12">
                        {
                            serviceList.map((service: any) => {
                                return (
                                    <div  className="text-left">
                                        <div className="bg-[#31314e] rounded-full h-14 w-14 p-3 flex justify-center items-center">
                                            {service.icon}
                                        </div>
                                        <p className="text-white font-semibold pt-4 pb-2">{service.title}</p>
                                        <p className="font-normal  text-sm text-opacity-75 text-white leading-6 tracking-wide">
                                            {service.shortNote}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </section>
            </section>
        </>
    );
};
