import React from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
function Carditems(props) {
    return (
        <>
            <Card className=' rounded '
                imgSrc={`${props.foodDetails.icon}`} >
                <Link to={`/food${props.foodDetails.id}`}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p className=''>
                            {props.foodDetails.title}
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400 pt-4"></p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 pt-4">
                        <p>
                            {props.foodDetails.desc}
                        </p>
                    </p>
                </Link>
            </Card>
        </>
    )
}
export default Carditems