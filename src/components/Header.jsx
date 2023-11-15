import React from 'react';


const Header = () => {
    return (

        <nav className="">
            <div className="absolute flex group group-hover:before:duration-500 
        group-hover:after:duration-500 after:duration-500 
        hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500  
        hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur 
        origin-left hover:decoration-2  relative  h-16 w-screen 
        border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden 
        before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 
        before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  
        after:absolute after:z-10 after:w-20 after:h-20 after:content['']  
        after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            </div>
            <a class="absolute top-[8px] right-[50%] flex items-center justify-center "
                href="#">
                <img
                    src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                    class="h-12 w-12 object-center object-cover"
                    alt="TE Logo"
                />
            </a>
            
            <div class="absolute right-0 top-0 mr-[10%] mt-[20px] flex items-center justify-center hidden md:block">
                <a href="#_" class="relative px-10 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
                    <span class="absolute bottom-0 left-0 h-full -ml-2">
                        <svg viewBox="0 0 487 487" class="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path>
                        </svg>
                    </span>
                    <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                        <svg viewBox="0 0 487 487" class="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path>
                        </svg>
                    </span>
                    <span class="relative font-semibold ">Portal EMP</span>
                </a>
            </div>

        </nav>
    );
};

export default Header;