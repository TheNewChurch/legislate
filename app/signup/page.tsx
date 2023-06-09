"use client";
import useEventbrite from 'react-eventbrite-popup-checkout';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import style from '../../styles/Signup.module.scss';
import Image from 'next/image';

export default function SignUp() {
    const router = useRouter()

    const handleOrderCompleted = useCallback(() => {
            router.push('/login')
      }, [router]);

    const iframeCheckout = useEventbrite({
    eventId: '632007019007',
    modal: false,
    onOrderComplete: handleOrderCompleted,
    });

    return (
        <main>
            <div className='container'>
                <div className="imgBackground">
                    <div className="imageWithLogo">
                        <Image src="/assets/images/legistlate-background.jpeg" alt="legislate" width="640" height="584" />
                        <img src="/assets/images/legistlate-logo.svg" alt="legislate logo" className="svg-logo" />
                    </div>    
                </div>
                <div className='page-container padding-0'>
                    <div className={style.signUp}>
                        {iframeCheckout && (
                            <div id={iframeCheckout.id}  />
                        )}
                    </div>
                </div>
            </div>
        </main>
        
    )
}