"use client"

import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'


const formSchema = z.object({
  email: z.email().min(1, {
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required"
  }),
})



const LoginForm = () => {

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const handleSubmit = () => {
    router.push('/')
  }

  return (
    <>
          <Card>
            <CardHeader>
              <CardTitle className='text-center mb-4'>Login</CardTitle>
              <CardDescription>
                Log in to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className='space-y-4' onSubmit={form.handleSubmit(handleSubmit)}>

                  <FormField
                    control={form.control}
                    name="email"
                    render={() => (
                      <FormItem>
                        <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Email</FormLabel>
                        <FormControl>
                          <Input
                            className='bg-slate-100 focus:outline-none border-0  dark:bg-slate-500 dark:text-white'
                            placeholder="example@me.com"
                            {...form.register("email")} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={() => (
                      <FormItem>
                        <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Password</FormLabel>
                        <FormControl>
                          <Input
                            className='bg-slate-100 focus:outline-none border-0 dark:bg-slate-500 dark:text-white'
                            placeholder="********"
                            {...form.register("password")} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type='submit' className='mt-3 cursor-pointer w-full'>Sign In</Button>

                </form>
              </Form>
            </CardContent>
          </Card>
    </>
  )
}

export default LoginForm
