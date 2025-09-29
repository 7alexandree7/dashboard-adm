import React from 'react'
import PostsTable from '../Components/Posts/PostsTable'
import BackButton from '../Components/BackButton/BackButton'
import PostPagination from '../Components/PostPagination/PostPagination'

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
