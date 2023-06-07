import Link from 'next/link'
import style from "../styles/Home.module.scss"

export default function Home() {
  return (
    <main className="main">
      <div className='homeWrapper container'>
          <img className='imgBackground' src="/assets/images/home-background.jpeg" alt="legistlate image" />

            <div className={`page-container ${style.landingPage}`}>
              <h2 className={`text-white ${style.welcomeText}`}>Welcome to The Next Conference 2023</h2>
              <Link href={"/login"}> <button className='btn'>Scan Qr</button></Link>
            </div>
      </div>
    </main>
  )
}