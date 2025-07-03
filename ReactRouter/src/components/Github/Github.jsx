import React, { useEffect, useState } from "react";

function Github(){
    const [data,setData] = useState([])
    useEffect(()=>{
        //for better optimization use Loader concept of react router to call api 
        fetch('https://api.github.com/users/aryan29gupta')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
            
        })

    }, [])
    return(
        <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl"> <p>Github followers: {data.followers}</p> 
        <img src={data.avatar_url} alt="Git Picture" width={300}></img></div>
    )
}

export default Github