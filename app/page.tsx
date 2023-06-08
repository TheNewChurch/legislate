"use client";
import Link from 'next/link'
import style from "../styles/Home.module.scss"
import Image from 'next/image';

export default function Home() {

  return (
    <main className="main">
      <div className='homeWrapper container'>
            <Image className='imgBackground' src="/assets/images/home-background.jpeg" alt="legistlate image" width="100" height="100" /> 
            <div className={`page-container ${style.landingPage}`}>
              <h2 className={`text-white ${style.welcomeText}`}>Welcome to The Next Conference 2023</h2>
              <Link href={"/login"}> <button className='btn'>Sign In</button></Link>
              <Link href={"/signup"} > <button className={`btn ${style.signUpBtn}`}>Sign Up</button></Link>
            </div>
      </div>
    </main>
  )
}