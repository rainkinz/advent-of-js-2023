// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, PrivateSet, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/event-invites" page={EventInvitesPage} name="eventInvites" />
      <Route path="/event-invite" page={EventInvitePage} name="eventInvite" />
      <PrivateSet unauthenticated="login" wrap={InteriorLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </PrivateSet>
      <PrivateSet unauthenticated="login" wrap={AuthLayout}>
        <Route path="/event/new" page={NewEventPage} name="newEvent" />
      </PrivateSet>
      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
