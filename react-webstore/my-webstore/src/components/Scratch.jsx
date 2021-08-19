import React from "react"
import MainScratch from "./MainScratch";
import dataScratch from "./dataScratch";


export const Scratch = () => {
    const { products2 } = dataScratch; 
console.log(products2)
    return (
        <div>
            <MainScratch products2={products2}></MainScratch>

        </div>
    )
};
export default Scratch



    


