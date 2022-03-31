import React, { useState } from 'react'
import Link from '../Link/Link'
import {MenuIcon, XIcon} from "@heroicons/react/solid";
const Navbar = () => {
    const[Open,setOpen]=useState(false);
    const route=[
        {id:1,name:"Home",link:'/home'},
        {id:2,name:"About",link:'/about'},
        {id:3,name:"service",link:'/service'},
        {id:4,name:"Course",link:'/course'}
    ]
  return (
       <nav className='bg-indigo-300'>
             <div onClick={()=>setOpen(!Open)} className='w-6 h-6 md:hidden'>
                 {Open ? <XIcon></XIcon>:<MenuIcon></MenuIcon>}
             </div>
             <ul className={` md:flex  justify-center bg-indigo-300 w-full absolute md:static top-0 duration-500 ease-in-out ${Open ? 'top-6':'top-[-120px]'}`}>
             {
                route.map(r=><Link
                 key={r.id}
                 route={r}
                ></Link>
                )
             }
            </ul>
       </nav>
  )
}

export default Navbar