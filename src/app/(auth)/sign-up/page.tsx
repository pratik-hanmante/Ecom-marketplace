"use client"

import { Icons } from '@/components/Icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

import Link from 'next/link'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

import React from 'react'
import { AuthCredentialValidator,TAuthCredentialValidator } from '@/lib/validators/account-credentials-validator'
import { trpc } from '@/trpc/client'


const Page = () => {

const { 
    register,
    handleSubmit,
    formState:{ errors },
} = useForm<TAuthCredentialValidator>(
    {
        resolver: zodResolver(AuthCredentialValidator),
    }
)

const {mutate, isLoading} = 
trpc.auth.createPayloadUser.useMutation({
    
})



const onSubmit = ({
    email,
    password,

}: TAuthCredentialValidator) => {
    mutate({email, password})
   
    
    
}

  return <>
    <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col items-center space-y-2 text-center'>
                <Icons.logo className='h-20 w-20' />
                <h1>
                    Create your account
                </h1>
                <Link 
                    className={buttonVariants({
                        variant:'link',
                        className: 'gap-1.5',
                    })}
                    href='/sign-in'>
                    Already have an account
                    
                </Link>
            </div>
            <div className='grid gap-6'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <div className='grid gap-1 py-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input 
                                {...register('email')}
                                className={cn({
                                "focus-visible:ring-red-500":errors.email
                            })} 
                            placeholder="Enter your email"
                            />
                        </div>
                        <div className='grid gap-1 py-2'>
                            <Label htmlFor='email'>Password</Label>
                            <Input 
                                {...register("password")}
                                type='password'
                                className={cn({
                                "focus-visible:ring-red-500":errors.password
                            })} 
                            placeholder="Password"
                            />
                        </div>
                        <Button>Sign Up</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </>
}

export default Page