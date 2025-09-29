"use client"

import posts from '@/data/Posts'
import BackButton from '@/app/Components/BackButton/BackButton'
import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'


interface EditProps {
  params: {
    id: string
  }
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required"
  }),
  body: z.string().min(1, {
    message: "Body is required"
  }),
  author: z.string().min(1, {
    message: "Author is required"
  }),
  date: z.string().min(1, {
    message: "Date is required"
  }),
})



const Edit = ({ params }: EditProps) => {

  const post = posts.find((post => post.id === params.id))

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || ""
    }
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <>
      <BackButton text="Back to posts" link="/posts" />
      <h3 className='text-2xl mb-4'>Edit Post</h3>
      <Form {...form}>
        <form className='space-y-8' onSubmit={form.handleSubmit(handleSubmit)}>

          <FormField
            control={form.control}
            name="title"
            render={() => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Title</FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 focus:outline-none border-0 dark:bg-slate-500 dark:text-white'
                    placeholder="Post title"
                    {...form.register("title")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="body"
            render={() => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Body</FormLabel>
                <FormControl>
                  <Textarea
                    className='bg-slate-100 focus:outline-none border-0 dark:bg-slate-500 dark:text-white'
                    placeholder="Enter Body"
                    {...form.register("body")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={() => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Author</FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 focus:outline-none border-0 dark:bg-slate-500 dark:text-white'
                    placeholder="Enter Author"
                    {...form.register("author")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={() => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Date</FormLabel>
                <FormControl>
                  <Textarea
                    className='bg-slate-100 focus:outline-none border-0 dark:bg-slate-500 dark:text-white'
                    placeholder="Enter Date"
                    {...form.register("date")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className='w-full darK;bg-slate-800 dark:text-white'
            type="submit"
            onClick={() =>
              toast('Post updated successfully!', {
                description: `Updated by ${post?.author} on ${post?.date}`, action: {
                  label: 'Undo', onClick: () => {
                    toast('Changes reverted')
                  }
                }
              })
            }
          >Update Post</Button>

        </form>
      </Form>
    </>
  )
}

export default Edit
