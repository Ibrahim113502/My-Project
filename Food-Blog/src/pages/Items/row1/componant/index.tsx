import { Flowbite } from 'flowbite-react';
import axios, { Axios }  from 'axios';
import React, { useState } from 'react';
// import Image1 from 'Images/card/biriyani.jpg'
// import Image2 from '../../../../assets/Images/card/Chiken.jpg'
// import Image3 from '../../../../assets/Images/card/burger.jpg'
// import Image4 from '../../../../assets/Images/card/Cbiriyani.jpg'
// import Image5 from '../../../../assets/Images/card/Fish.jpg'
// import Image6 from '../../../../assets/Images/card/ghee.jpg'
// import Image7 from '../../../../assets/Images/card/pasta.jpg'
// import Image8 from '../../../../assets/Images/card/pizza.jpg'
// // import Image9 from '../../../../assets/Images/card/'
import Carditems from './CardItems';
// const [state,setstate]=useState([])
function Itemrow1(props) {
// {Sobin anna metod not running}
// const api=new Axios();
//  const api = axios.create(
//     {
//         baseURL:'https://api.rexcoders.in',
//     } 
//  );
//  var demodata=api.get('/api/training/getall');
//  console.log(demodata);

// {Axios website la ulla method for getting}
// axios({
//   method: 'get',
//   url: ' https://api.rexcoders.in/api/training/getall',
//   responseType: 'stream'
// })
//   .then(function (training) {
//    let ApiExample=training;
//    <p className="font-normal text-gray-700 dark:text-gray-400 pt-4">
//                         <p>
//                         ApiExample
//                         </p>
//                     </p>
//   });

// {Net la ulla another method}
// axios.get('https://api.rexcoders.in/api/training/getall').then((response)=>{
//     console.log(response.data);
//     // setstate(response.data)
    
// })


    let foodDetails: any = [{
        id: 1,
        title: 'Chicken Mandi',
        desc: "Chicken Mandi is a delicious traditional dish that originates from Yemen but is widely enjoyed in various Middle Eastern countries. It's known for its aromatic rice, tender chicken, and a blend of spices",
        icon: '/Image/biriyani.jpg',
    },
    
    {
        id: 2,
        title: 'Chicken Thanthurri ',
        desc: "Grilled Chicken Thanthurri presents succulent chicken marinated in spicy, tangy Thanthurri sauce, seared to perfection on the grill, offering a delightful fusion of smoky, fiery flavors.",
        icon: '/Image/Chiken.jpg',
    },
    {
        id: 3,
        title: 'Chicken Burger',
        desc: "A chicken burger is a delicious sandwich consisting of a seasoned, grilled or fried chicken patty, typically served in a soft bun with assorted toppings,alternative to traditional beef burgers.",
        icon: "/Image/burger.jpg"
    },
    {
        id: 4,
        title: 'Chicken Biriyani',
        desc: " Chicken Biryani is a fragrant and aromatic dish comprising flavorful basmati rice, marinated chicken, and a blend of spices, slow-cooked to create a rich, layered masterpiece of Indian cuisine.",
        icon: "Image/Cbiriyani.jpg"
    },
    {
        id: 5,
        title: 'Chicken Cutlet',
        desc: "Chicken cutlets are savory delights made by blending ground chicken with herbs, spices, and breadcrumbs, shaped into patties and fried to golden perfection.",
        icon: "Image/Fish.jpg"
    },
    {
        id: 6,
        title: 'Ghee Rice',
        desc: "Ghee rice is a fragrant and sumptuous Indian dish made by cooking long-grain Basmati rice in clarified butter, known as ghee. The rice is infused with aromatic spices",
        icon: "Image/ghee.jpg"
    },
    {
        id: 7,
        title: 'Pasta',
        desc: "Pasta is a versatile Italian staple made from unleavened dough, shaped into various forms , offering a comforting and customizable meal beloved worldwide.",
        icon: "Image/pasta.jpg"
    },
    {
        id: 8,
        title: 'Pizza',
        desc: "Pizza is an iconic Italian dish consisting of a round flatbread topped with savory tomato sauce, cheese, and various ingredients,of flavors and textures.",
        icon: "Image/pizza.jpg"
    }
    ];
    return (
        <>
        {/* {state.map((obj,index)=>{
            return(
                <h1>{obj.trainingSlug}</h1>
            )
        })} */}
            <Flowbite >
                <section className='dark:text-gray-400 dark:bg-gray-900 '>
                    <div className='md:grid md:grid-cols-2 lg:grid-cols-4 p-6 gap-4 '>
                        {
                            foodDetails.map((food: any) => {
                                return (
                                    <Carditems foodDetails={food} />
                                )
                            }
                            )
                        }


                    </div>
                </section>
            </Flowbite>
        </>
    );
};
export default Itemrow1