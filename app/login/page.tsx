'use client';
import LoginForm from '@/components/login/loginForm';
import LoginPin from '@/components/login/loginPin';
import { loginFunction, successDataType } from '@/types';
import { useCallback, useState } from 'react';

export default function Login(){
    const [pin,setPin] = useState("")

    const formSubmited:loginFunction = function (data:successDataType) {
        const {success,barcode} = data
        
        if (success) {
            setPin(barcode)
        }
    }

    const displayData = useCallback(()=>{
        return (pin) ? <LoginPin barcode={pin}/> : <LoginForm onSuccessful={formSubmited} />
    },[pin])

    return (
        <main className="login container">
            <div className="imgBackground">
                <div className="imageWithLogo">
                    <img src="/assets/images/legistlate-background.jpeg" alt="" />
                    <img src="/assets/images/legistlate-logo.svg" alt="legislate logo" className="svg-logo" />
                </div>    
            </div>
            { displayData()}    
        </main>
    )
}