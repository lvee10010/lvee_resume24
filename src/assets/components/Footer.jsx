import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

import DensityLargeOutlinedIcon from '@mui/icons-material/DensityLargeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import profile_img from '../Images/lv-blck.png'
import { NavLink } from 'react-router-dom';

const navigation = [
  // { name: 'Home', href: '/', current: false },
  { name: 'Web', href: '/design', current: false },
  { name: 'Software', href: '/software', current: false },
  { name: 'Alorithm', href: '/myMusic', current: false },
  { name: 'Objects', href: '/d3', current: false },
  { name: 'Game', href: '/game', current: false },
  
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {
  return (
    <Disclosure
      as="nav"
      className="
      bg-purple-950
    "
    >
      {({ open }) => (
        <>
          <div className="heather mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CloseOutlinedIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    // <div>hey</div>
                    <DensityLargeOutlinedIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                    // <div>hi</div>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink
                    to="/"
                    className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
                  >
                    {/* <p className='pl-2 blue-gradient_text'>L-Vee</p> */}
                    <CottageOutlinedIcon />
                  </NavLink>
                </div>
                
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <TravelExploreOutlinedIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  );
}