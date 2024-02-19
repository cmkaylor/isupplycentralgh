import React from "react";
import '../index.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    return (
        <header>
            <div class="bg-green-500 py-4 grid justify-items-center">
                <h1 class="text-3xl font-bold text-white">Industrial Supply & Service</h1>
            </div>
            <nav class="bg-gray-900">
                <ul class="flex justify-center">
                    <button onClick={() => navigate("/Home")}>Home</button>
                    <button onClick={() => navigate("/About")}>About</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header