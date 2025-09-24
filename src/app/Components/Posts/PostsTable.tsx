import React from 'react'
import { Posts } from '@/Types/Posts'
import posts from '@/data/Posts'
import Link from 'next/link'
import {
    Table,
    TableBody,
    TableHeader,
    TableCaption,
    TableRow,
    TableHead,
    TableCell
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

interface PostsTableProps {
    limit?: number
    title: string
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
    return (
        <div className='mt-10'>
            <h3 className='text-2xl font-semibold mb-4'>
                {title ? title : 'Posts'}
            </h3>
            <Table>
                <TableCaption>A list of recent posts</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className='hidden md:table-cell'>Author</TableHead>
                        <TableHead className='hidden md:table-cell text-right'>Date</TableHead>
                        <TableHead>View</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.slice(0, limit).map((post: Posts, index) => (
                        <TableRow key={index}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell className='hidden md:table-cell'>{post.author}</TableCell>
                            <TableCell className='hidden md:table-cell text-right'>{post.date}</TableCell>
                            <TableCell>
                                <Link href={`/posts/edit/${post.id}`}>
                                    <Button className='bg-blue-500 hover:bg-blue-700 cursor-pointer' size={'sm'}>Edit</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default PostsTable
