import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'
import { Button } from './ui/button'

export default function Navbar() {
  return <header className='shadow-sm'>
    <nav className='max-w-5xl m-auto px-3 py-5 flex items-center justify-between'>
        <Link href="/" className='flex items-center gap-3'>
        <Image src={logo} width={40} height={40} alt="Flow Jobs logs"/>
        <span className='text-xl font-bold tracking-tight'>Flow Jobs</span>
        </Link>
        <Button asChild>
            <Link href="/jobs/new">Post a job</Link>
        </Button>
    </nav>
    </header>
}


