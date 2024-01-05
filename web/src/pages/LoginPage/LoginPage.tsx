import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
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

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <Form onSubmit={onSubmit} className="rw-form-wrapper">
          <Label
            name="email"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Email
          </Label>
          <TextField
            name="email"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            ref={emailRef}
            validation={{
              required: {
                value: true,
                message: 'Email is required',
              },
            }}
          />

          <FieldError name="email" className="rw-field-error" />

          <Label
            name="password"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Password
          </Label>
          <PasswordField
            name="password"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            autoComplete="current-password"
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />

          <div className="rw-forgot-link">
            <Link to={routes.forgotPassword()} className="rw-forgot-link">
              Forgot Password?
            </Link>
          </div>

          <FieldError name="password" className="rw-field-error" />

          <div className="rw-button-group">
            <Submit className="rw-button rw-button-blue">Login</Submit>
          </div>
        </Form>
        <div className="rw-login-link">
          <span>Don&apos;t have an account?</span>{' '}
          <Link to={routes.signup()} className="rw-link">
            Sign up!
          </Link>
        </div>
      </main>
    </>
  )
}

export default LoginPage
