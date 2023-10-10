import React from "react";

const Card =  ({ children }) => {
    return(
        <>
            <div className="bg-[#fff] w-[100%] p-10 rounded-[10px] border border-inherit">
                {children}
            </div>
        </>
    )
}

export default Card;