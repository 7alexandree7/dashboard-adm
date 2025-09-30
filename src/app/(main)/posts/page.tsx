import React from 'react'
import PostsTable from '@/app/Components/Posts/PostsTable'
import BackButton from '@/app/Components/BackButton/BackButton'
import PostPagination from '@/app/Components/PostPagination/PostPagination'

const Posts = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable limit={10} title="All Posts" />
      <PostPagination />
    </>
  )
}

export default Posts
