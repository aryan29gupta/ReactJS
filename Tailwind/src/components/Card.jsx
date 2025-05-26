import React from "react";

function Card(props){ //you can directly pass value {username, Object.name = "default"} and use it also give a default value for value not passed
    console.log("username: ",props.username);
    return (
         <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="./src/image.png"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.Object.age}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}

export default Card