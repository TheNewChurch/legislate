'use client';
import LoginForm from '@/components/login/loginForm';
import LoginPin from '@/components/login/loginPin';
import { loginFunction, successDataType } from '@/types';
import Image from 'next/image';
import { useCallback, useState } from 'react';

export default function Login(){
    const [data,setData] = useState({pin:"",name:""})

    const formSubmited:loginFunction = function (data:successDataType) {
        const {success,barcode,name} = data
        
        if (success) {
            setData({pin:barcode,name})
        }
    }

    const displayData = useCallback(()=>{
        return (data.pin) ? <LoginPin barcode={data.pin} name={data.name}/> : <LoginForm onSuccessful={formSubmited} />
    },[data])

    return (
        <main className="login container">
            <div className="imgBackground">
                <div className="imageWithLogo">
                    <Image src="/assets/images/legistlate-background.jpeg" alt="legislate" width="640" height="584" />
                    <img src="/assets/images/legistlate-logo.svg" alt="legislate logo" className="svg-logo" />
                </div>    
            </div>
            { displayData()}    
        </main>
    )
}