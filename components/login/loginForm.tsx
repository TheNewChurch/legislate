import style from '../../styles/Login.module.scss'
import { useState } from 'react';
import { loginFunction } from '@/types';

type props= {
    onSuccessful: loginFunction
}

export default function LoginForm({onSuccessful}:props){

    const [email,setEmail] = useState("")

    async function submit(){
        
        const url = `https://www.eventbriteapi.com/v3/events/632007019007/orders/?expand=attendees&only_emails=${email}`
        try {
            const {orders} = await fetch(url,{
                method: 'GET',
                headers: {
                    authorization: "Bearer OXDFBPLUQWPVZN2CQI7K"
                }
            }).then(resp=>resp.json());
            
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
                    ] = []
                } = orders.find((item:{email:string,id:string})=>item.email === email)

                console.log(barcode)
                if(barcode) {
                    
                     onSuccessful({success:true,barcode})
                }
            }
           
            
        } catch(e){
            console.log(e)
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
                <button onClick={submit} className={`btn ${style.confirmButton}`}> Confirm Email</button>             
            </div>
        </div>
    )
}