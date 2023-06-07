"use client";
import Link from 'next/link'
import style from "../styles/Home.module.scss"
import useEventbrite from 'react-eventbrite-popup-checkout';
import { useCallback } from 'react';

export default function Home() {
  const handleOrderCompleted = useCallback(() => {
    console.log('Order was completed successfully');
  }, []);

  const modalButtonCheckout = useEventbrite({
    eventId: '632007019007',
    modal: true,
    onOrderComplete: handleOrderCompleted,
  });
  return (
    <main className="main">
      <div className='homeWrapper container'>
          <img className='imgBackground' src="/assets/images/home-background.jpeg" alt="legistlate image" />

            <div className={`page-container ${style.landingPage}`}>
              <h2 className={`text-white ${style.welcomeText}`}>Welcome to The Next Conference 2023</h2>
              <Link href={"/login"}> <button className='btn'>Sign In</button></Link>
              {modalButtonCheckout && (
                <button id={modalButtonCheckout.id} className='btn'>
                  Sign Up
                </button>
              )}
            </div>
      </div>
    </main>
  )
}