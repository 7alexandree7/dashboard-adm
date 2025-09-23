import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../../../public/logo.png"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NavBar = () => {
    return (
        <div className='bg-primary dark:bg-slate-700 text-white flex justify-between py-2 px-5'>
            <Link href={'/'}>
                <Image src={logo} width={40} alt='logo' />
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none cursor-pointer'>
                    <Avatar>
                        <AvatarImage alt='avatar' src={'https://github.com/7alexandree7.png'} />
                        <AvatarFallback className='text-black'>AA</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href={'/profile'}>Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={'/logout'}>Logout</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default NavBar
