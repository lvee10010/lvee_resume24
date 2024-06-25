import React from 'react'
import { NavLink } from 'react-router-dom'

// icons
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/' className='w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
            <CottageOutlinedIcon clas/><p className='pl-2 blue-gradient_text'>VY</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-small'>
                <NavLink to='/' className={({isActive}) => isActive ? 'text-green-500' : 'text-gray-800'}>
                    <TravelExploreOutlinedIcon />Home
                </NavLink>
                <NavLink to='/software' className={({isActive}) => isActive ? 'text-green-500' : 'text-gray-800'}>
                    <TerminalOutlinedIcon />Software
                </NavLink>
                <NavLink to='/design' className={({isActive}) => isActive ? 'text-green-500' : 'text-gray-800'}>
                    <DesignServicesOutlinedIcon />Web Designs
                </NavLink>
                <NavLink reloadDocument to='/myMusic' className={({isActive}) => isActive ? 'text-green-500' : 'text-gray-800'}>
                    <SportsEsportsOutlinedIcon />3D
                </NavLink>
                <NavLink to='/game' className={({isActive}) => isActive ? 'text-green-500' : 'text-gray-800'}>
                    <SportsEsportsOutlinedIcon />Game
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar