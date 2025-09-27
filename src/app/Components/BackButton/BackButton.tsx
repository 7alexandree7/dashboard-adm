import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface BackButtonProps {
    text: string
    link: string
}

const BackButton = ({ text, link }: BackButtonProps) => {
    return (
        <Link href={link} className='text-gray-500 hover:underline mb-5 flex items-center gap-1 font-bold '>
            <ArrowLeftCircle size={18} />
            {text}
        </Link>
    )
}

export default BackButton
