import React from "react";
import '../index.css'
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import { Button } from "@material-tailwind/react";

const Header = () => {
    let navigate = useNavigate();

    return (
        <header>
            <div class="bg-green-500 py-4 grid justify-items-center">
                <h1 class="text-3xl font-bold text-white">Industrial Supply & Service</h1>
            </div>
            <nav class="bg-gray-900">
                <ul class="flex justify-center">
                    <Button onClick={() => navigate("/Home")}>Home</Button>
                    <Button onClick={() => navigate("/About")}>About</Button>
                    <Dropdown title="Products"/>
                    <Dropdown title="Services"/>
                </ul>
            </nav>
        </header>
    )
}

export default Header