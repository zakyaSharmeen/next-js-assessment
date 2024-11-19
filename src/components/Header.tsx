
'use client';
import { useRouter } from 'next/navigation';

// import { useRouter } from 'next/na'; // Correct import
import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

function Header() {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };

  return (
    <div>
      
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="container">
          <div className="flex justify-between items-center py-4">

            <div className="navbar-left">
              <h1 className="text-white">HyperHire</h1>
            </div>


            <div className="navbar-center flex justify-center items-center">

              <div className="dropdown relative inline-block mr-5">

                <div className="dropdown dropdown-bottom">
                  <button tabIndex={0} role="button" className="btn m-1 border-none bg-transparent text-white hover:bg-blue-500">Click  <FaCaretDown /></button>
                  <ul tabIndex={0} className="dropdown-content menu bg-white  text-black z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
               

              </div>

            


              <div className="lorem-content mr-5">
                <p className="text-white">loremipsum</p>
              </div>
            </div>


            <div className="navbar-right">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-500 px-4 py-2 rounded-lg cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
