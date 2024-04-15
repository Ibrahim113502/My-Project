import { useRef } from "react"
function ReduxExample() {
    const point=useRef(null);
const handle=()=>{
    point.current.value="I am Ibrahim"
}
    return (
        <>
            <div>
               <button onClick={handle}>Click</button>
               <textarea ref={point} id="" cols="30" rows="1"></textarea>
            </div>
        </>
    )
}
export default ReduxExample