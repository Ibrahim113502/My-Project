import React, { useState } from 'react';
import { Navbar } from 'flowbite-react';
import { Banner } from 'flowbite-react';
import { HiArrowRight, HiX } from 'react-icons/hi';
import { MdPercent } from 'react-icons/md';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import LoginForm from '../../../Loginform';
import { Link } from 'react-router-dom';
export default function MyNavbar() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const handleCloseModal = () => {
    setOpenModal(undefined);
  };
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };
  return (
    <>
      <Flowbite>
        <Navbar fluid rounded className='lg:!px-[6rem] sm:!flex-nowrap'>
          {/* <div> */}
            <Navbar.Brand >
              <img src='/logo.png' className="mr-3   sm:h-9   lg:h-10" />
              {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tastes Of Mouth</span> */}
            </Navbar.Brand>
            <DarkThemeToggle className=' md:hidden !p-0.5' />
            <div className="w-full md:w-[30%] hidden md:hidden">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />
                </div>
              </form>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Link href="/home" active>
                Home
              </Navbar.Link>
              <Navbar.Link href="#about">
                About
              </Navbar.Link>
              <Navbar.Link ><Link to={'/foodItems'}>Food Items</Link></Navbar.Link>
              <Navbar.Link><Link to={'/contactus'}>Contact</Link></Navbar.Link>
              <Navbar.Link onClick={() => props.setOpenModal('form-elements')}>Sign In</Navbar.Link>
              <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={handleCloseModal}>
                <Modal.Body>
                  <LoginForm closeModal={handleCloseModal} />
                </Modal.Body>
              </Modal>
              <DarkThemeToggle className='hidden md:block !p-0.5' />
            </Navbar.Collapse>
          {/* </div> */}
        </Navbar>
        {/* <Banner>
          <div className="fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex items-center mx-auto">
              <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
                  <MdPercent className="h-4 w-4" />
                </span>
                <span>
                  Get 5% commision per sale&nbsp;
                  <a href="https://flowbite.com" className="flex items-center ml-0 text-sm font-medium text-cyan-600 md:ml-1 md:inline-flex dark:text-cyan-500 hover:underline">
                    Become a partner
                    <HiArrowRight className="ml-2" />
                  </a>
                </span>
              </p>
            </div>
            <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
              <HiX className="h-4 w-4" />
            </Banner.CollapseButton>
          </div>
        </Banner> */}
      </Flowbite>
    </>
  );
}