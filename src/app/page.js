import Demo from '@/components/Demo'
import '@/app/globals.css'
import Navbar from './components/Navbar'

export default function Home () {
  return (
    <div className='mt-10 container mx-auto'>
      <Navbar />
      <Demo />
    </div>
  )
}
