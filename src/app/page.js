import Image from 'next/image'
import styles from './page.module.css'
import Demo from './[city]/clinic/[slug]/page'

export default function Home() {
  return (
    <div>
      <Demo />
    </div>
  )
}
