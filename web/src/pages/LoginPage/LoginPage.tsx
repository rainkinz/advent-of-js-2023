import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
  EmailField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <div className="mx-auto max-w-[660px]">
        <Form onSubmit={onSubmit} className="mb-10">
          <div className="field">
            <Label name="email" errorClassName="error">
              Email
            </Label>
            <EmailField
              name="email"
              errorClassName="error"
              ref={emailRef}
              validation={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
              placeholder=""
            />

            <FieldError name="email" className="error-message" />
          </div>

          <div className="field">
            <Label name="password" errorClassName="error">
              Password
            </Label>
            <PasswordField
              name="password"
              errorClassName="error"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
              placeholder=""
            />

            <FieldError name="password" className="error-message" />
          </div>

          <Submit>Login</Submit>
        </Form>
        <div className="text-center text-white">
          <Link
            to={routes.forgotPassword()}
            className="underline hover:no-underline"
          >
            Forgot Password?
          </Link>
          •
          <Link to={routes.signup()} className="underline hover:no-underline">
            Need an account?
          </Link>
        </div>
      </div>
    </>
  )
}

export default LoginPage
