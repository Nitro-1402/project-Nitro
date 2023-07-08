import { RegisterApi } from '@/API/Register';
import '@/styles/globals.css'
import LoaderEvent from '@/ui/LoaderEvent';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthStore from './store/Auth'
export default function App({ Component, pageProps }: AppProps) {
  const router=useRouter()
  const ref=useRef<any>()
  const user = AuthStore((state:any) => state.user)
  const setUser = AuthStore((state:any) => state.init)
  const getme=async()=>{

    let me=await RegisterApi.GetMe()
    console.log(me)

  } 
  useEffect(()=>{
    getme()
  },[ ])
  const checkUser=async()=>{
    if(user?.id){
      if(ref?.current?.hide)
      ref?.current?.hide()

      return;
    }
    const data=await RegisterApi.GetMe()
    console.log(data)
    if(data?.status=='success'){
      setUser(data.content)
      ref?.current?.hide()
    }
    else{
      // if(router.pathname.indexOf('/company/')>=0 || router.pathname.indexOf('/vendors/')>=0 || router.pathname.indexOf('/product/')>=0|| router.pathname.indexOf('/vendors/')>=0 || router.pathname.indexOf('/panel_makers')>=0 || router.pathname.indexOf('/contractors')>=0)
      // return ref?.current?.hide()
      // router.replace('/')
      ref?.current?.hide()
    } 
  }
  useEffect(()=>{
    checkUser()
    
  },[user])

  useEffect(() => {
    document?.addEventListener('contextmenu',(e)=>{
      e.preventDefault()
    })
    const handleRouteChange = () => {
      if(ref?.current?.show)
      ref?.current?.show()
      
    }
    const handleRouteComplete = () => {
      if(ref?.current?.hide)
      ref?.current?.hide()
      
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteComplete)
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  // Get the network interfaces
  return<>
  <LoaderEvent reff={ref}/>
  <Component {...pageProps} />
  <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={true}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
  </> 
}
