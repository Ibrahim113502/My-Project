import React from "react";
function Description() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900" id="about">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Taste the World: All in One Place</h2>
                        <p className="mb-4">Our website is a haven for food enthusiasts seeking a diverse and extensive range of tastes and styles all in one place.From the rich and savory dishes of traditional comfort food to the exotic and tantalizing flavors of international cuisines, we've curated a collection of recipes that will transport your taste buds on a remarkable journey.</p>
                        <p>Our mission is to celebrate the art of cooking and to bring people together through the joy of food, and we're thrilled to be your one-stop destination for all things delicious.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src='/description/chili.jpg' alt="Chili" />
                        <img className="w-full rounded-lg" src='description/chicken.jpg' alt="office content 1" />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Description