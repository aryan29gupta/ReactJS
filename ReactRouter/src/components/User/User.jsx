import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
    return(

        <div className="text-center m-4 text-black p-4 text-3xl"> <p>User: {userid}</p> </div>

    )
    
}

export default User
