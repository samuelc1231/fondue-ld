import { useRouter } from 'next/router'
import useStore from '../helpers/store'
import { useEffect } from 'react'
import Dom from '../components/layout/dom'
import '../styles/index.css'
import dynamic from 'next/dynamic'

const LCanvas = dynamic(() => import('../components/layout/canvas'), {
  ssr: false,
})

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()

  useEffect(() => {
    useStore.setState({ router })
  }, [router])

  return (
    <>
      <Dom>
        <Component {...pageProps} />
      </Dom>
      {Component?.r3f && <LCanvas>{Component.r3f(pageProps)}</LCanvas>}
    </>
  )
}

export default App
