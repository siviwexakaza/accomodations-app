import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from '../context/AuthContext'
import NavbarComp from '../components/navbar'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/protectedRoute'
import 'bootstrap-icons/font/bootstrap-icons.css'

const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <NavbarComp />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  ) 
}

export default MyApp
