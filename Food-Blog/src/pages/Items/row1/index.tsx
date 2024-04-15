import React from "react";
import Itemrow1 from "./componant";
import { foodItem1 } from "./data/items-data";

function Row1() {
    return (
        <>
            <Itemrow1 foodItem1={foodItem1} /> 
        </>
    );
}
export default Row1;
