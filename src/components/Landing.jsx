import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingOne = () => {        
    return (
        <div className="relative pt-48 pb-12 bg-[#FFFBDA] xl:pt-20 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
    <div className="absolute inset-0 lg:inset-y-0 lg:left-0">
        <img className="object-cover w-full h-full opacity-50 md:w-2/5 lg:opacity-100" src="/landing2.png" alt="" />
    </div>

    <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="flex justify-end">
                <div className="w-full lg:w-1/2">
                    <h1 className="font-sans text-base font-bold tracking-tight text-green_three text-opacity-900">uses basic machine learning concepts</h1>
                    <p className="mt-6 tracking-tighter text-green_three">
                        <span className="font-serif italic font-normal text-8xl">Prediksi</span><br />
                        <span className="font-sans font-normal text-7xl">Bahan Pangan</span>
                    </p>
                    <p className="max-w-md mt-5 font-sans text-base font-normal leading-7 text-black text-opacity-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p>
                    <div className="flex items-center mt-8 space-x-3 sm:space-x-4">
                        <a
                            href="#"
                            title=""
                            className="
                                inline-flex
                                items-center
                                justify-center
                                px-5
                                py-2
                                font-sans
                                text-base
                                font-semibold
                                transition-all
                                duration-200
                                border-2 border-transparent
                                rounded-full
                                sm:leading-8
                                bg-yellow
                                sm:text-lg
                                text-green_three
                                hover:bg-opacity-90
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                            "
                            role="button"
                        >
                            Statistik
                        </a>

                        <Link
                            to="/peta"
                            title=""
                            className="
                                inline-flex
                                items-center
                                justify-center
                                px-5
                                py-2
                                font-sans
                                text-yellow
                                font-semibold
                                transition-all
                                duration-200
                                border-2
                                rounded-full
                                sm:leading-8
                                bg-green_three
                                border-primary
                                hover:bg-yellow
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                                hover:text-green_three
                                sm:text-lg
                                focus:ring-offset-secondary
                            "
                            role="button"
                        >
                            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clip-rule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                            </svg>
                            Lihat Peta
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
export default LandingOne;