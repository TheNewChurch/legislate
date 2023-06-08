import style from '../../styles/Login.module.scss'
import { useEffect, useRef, useState } from 'react';
import { loginFunction } from '@/types';
import Link from 'next/link';

type props= {
    onSuccessful: loginFunction
}

export default function LoginForm({onSuccessful}:props){

    const [email,setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState({
        message: '',
        showSignUp: false
    }) 


    async function submit(){
        
        const url = `https://www.eventbriteapi.com/v3/events/632007019007/orders/?expand=attendees&only_emails=${email}`
        setErrorMessage({
            message: '',
            showSignUp: false
        })
        if(!isLoading) {
            
            try {
                setIsLoading(true)
                const {orders} = await fetch(url,{
                    method: 'GET',
                    headers: {
                        authorization: "Bearer OXDFBPLUQWPVZN2CQI7K"
                    }
                }).then(resp=>resp.json());
                
                setIsLoading(false)
    
                if(orders) {
                    const {
                        attendees: [
                            {
                                barcodes : [
                                    {
                                      barcode = ""  
                                    } = {}
                                ] = []
                            } = {}
                        ] = [{}]
                    }  = orders.find((item:{email:string,id:string})=>item.email === email) || {}
    
                    if(barcode) {    
                          onSuccessful({success:true,barcode})
                          return;
                    }
                }
               
                setErrorMessage(
                    {
                        message:"Your email doesn't exist in our database. if you wish to register ",
                        showSignUp:true
                    }
                )
                
            } catch(e){
                setIsLoading(false)
                
                
                setErrorMessage(prev=>({...prev,message: "there is an error fetching your data please try again later"}))
                console.log(e)
            }
        }
        
        
        
    }

    return (
        <div className="page-container blurBackground">
            <div className={style.loginPage}>
                <div className={style.loginHeaderContainer}>
                    <img src="/assets/images/login.svg" alt="login" />
                    <h1 className={style.pageHeader}>Enter email address</h1>
                    <p className={style.headerSubtitle}>Please provide your email address.</p>
                </div>
                
                <div className={style.loginForm}>
                    <div className='formGroup'>
                        <label htmlFor="email" className='formGroup-label'>Email Address</label>
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name='email' className="form-default" />
                    </div>     
                    <span className='formHints'>This should be the email you used to purchase your ticket</span>
                </div>
                {
                    errorMessage &&
                    <p className={`textError ${style.loginError}`}> 
                        { 
                            errorMessage.message
                        } 
                        
                        {
                        errorMessage?.showSignUp &&
                        <Link href="/signup">SignUp</Link>
                        }
                    
                    </p>
                }
                

                <button onClick={submit} className={`btn ${style.confirmButton}`}> 
                    Confirm Email 
                    {
                        isLoading && <div className='loading'></div>
                    }
                </button>             
            </div>
        </div>
    )
}