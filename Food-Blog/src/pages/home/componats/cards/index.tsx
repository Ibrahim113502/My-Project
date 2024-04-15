import { Card, Flowbite } from 'flowbite-react';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
export default function CardWithImage() {
    return (
        <>
            <Flowbite>
                <section  className='dark:text-gray-400 dark:bg-gray-900'>
                    <div className='lg:flex p-6 gap-4 '>
                        <Card className='lg:w-[32%] h-[50%] rounded '
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc='/Image/biriyani.jpg'
                            >
                                <img src="" className='' alt="" />
                            <Link to={'/food1'}>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                        Chicken Mandhi
                                    </p>
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <p>
                                        Prepared with love and the finest ingredients, our Chicken Mandhi is a celebration of flavor, tradition, and authenticity
                                    </p>
                                </p>
                            </Link>
                        </Card>
                        <Card className='lg:w-[32%] h-[50%] rounded'
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc='/Image/Chiken.jpg'
                        > <Link to={'/food2'}>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Chicken Thanthurri
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Prepare your taste buds for a culinary adventure as we introduce you to our delectable Chicken Thanthurri the flavors of coastal India.
                                </p>
                            </p></Link>
                        </Card>
                        <Card className='lg:w-[32%] h-[50%] rounded'
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc='/Image/burger.jpg'
                        ><Link to={'/food2'}>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <p>
                                    Chicken Burger
                                </p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    Prepare to embark on a sizzling flavor adventure as we introduce you to our mouthwatering collection of Chicken Grilled Burgers
                                </p>
                            </p></Link>
                        </Card>
                    </div>
                </section>
            </Flowbite>
        </>
    )
}