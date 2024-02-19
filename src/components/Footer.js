import React from "react";
import '../index.css'

const Footer = () => {

    return (
        <footer class="bg-gray-200 text-gray-600 py-4">
            <div class="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Industrial Supply & Service, LLC. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer