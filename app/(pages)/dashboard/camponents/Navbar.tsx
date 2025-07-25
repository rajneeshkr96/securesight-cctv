"use client"
import Image from 'next/image'
import React from 'react'
import { NavUser } from './NavUser'
import {  SidebarProvider } from '@/components/ui/sidebar'
import { IconAlertTriangle, IconLayoutDashboard } from '@tabler/icons-react'
import { Cctv, Settings, Users } from 'lucide-react';
import Link from 'next/link'


const Navbar = () => {
  const userData = {
    name:"Mohammed Ajhas",
    email:"ajhas@mandlac.com",
    avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }

  // Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: IconLayoutDashboard,
  },
  {
    title: "Cameras",
    url: "/",
    icon: Cctv,
  },
  {
    title: "Scenes",
    url: "/",
    icon: Settings,
  },
  {
    title: "Incidents",
    url: "/",
    icon: IconAlertTriangle,
  },
  {
    title: "Users",
    url: "/",
    icon: Users,
  },
]

  return (
    <div className='w-full py-8 px-12 flex justify-between'>
      <div className="logo cursor-pointer">
        <Image
        src={"/Logo.png"}
        alt='logo'
        width={800}
        height={500}
        className='w-auto h-[30px]'
        />

      </div>
      <div className='flex gap-x-12 '>
        {items.map((item) => (
                <div key={item.title}>
         
                    <Link className='nlink flex gap-x-1 justify-center items-center ' href={item.url}>
                      <item.icon className='icons' size={18} />
                      <span className='font-medium'>{item.title}</span>
                    </Link>
      
                </div>
              ))}
      </div>
      <div className='w-max flex '>
        <SidebarProvider className='!min-h-auto '>
          <NavUser user={userData}/>
        </SidebarProvider>
      </div>
    </div>
  )
}

export default Navbar
