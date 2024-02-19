import React from "react";
import '../index.css'
import InfoTile from "../components/InfoTile";
import Screws from "../imgs/screws.jpg"

const Home = () => {
    return (
        <body 
        class="bg-gray-100 flex flex-col h-screen justify-center" 
        style={{backgroundImage:`url(${Screws})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <main class="container mx-auto py-6 rounded-lg bg-gray-900 border-4 border-green-500">
                <section class="text-center">
                    <h2 class="text-white text-4xl font-bold mb-4">Welcome to Industrial Supply & Service</h2>
                    <p class="text-gray-200">
                        Thank you for choosing Industrial Supply & Service, LLC as your supplier.
                        We look forward to serving you and being a trusted partner in your success.
                        Please call us today and let us know how we can help you succeed!
                    </p>
                </section>
        
                <section class="mt-8">
                    <h3 class="text-white text-center text-2xl font-bold mb-4">Contact Information</h3>
                    <ul class="h-40 flex flex-wrap justify-center items-center">
                        <InfoTile title='Phone' info='816-739-6701'/>
                        <InfoTile title='Email' info='Chris@isupplycentral.com'/>
                    </ul>
                </section>
            </main>
      </body>
    )
}

export default Home
