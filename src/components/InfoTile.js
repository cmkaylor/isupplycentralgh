import React from "react";
import '../index.css'

const InfoTile = ({title, info}) => {
    return (
        <li class="w-1/3 mx-4 text-center px-4 leading-loose text-sm bg-white transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white shadow-md p-4 rounded">
            <h4 class="text-lg font-bold mb-2">{title}</h4>
            <p>{info}</p>
        </li>
    )
}

export default InfoTile