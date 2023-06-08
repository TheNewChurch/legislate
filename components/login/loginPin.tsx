import style from '../../styles/LoginSuccess.module.scss'
import QrCode from "react-qr-code"
type props = {
    barcode:string,
    name:string
}

export default function LoginPin({barcode="",name=""} : props) {
    return (
        <div className='page-container padding-0'>
            <div className={style.loginSuccess} >
                <div className={style.pageHeader}>
                    <img src="/assets/images/login-success.svg" alt="loginsuccrss" />
                    <h1 className={style.pageHeader}>Welcome Legislator</h1>
                    <p className={style.headerSubtitle}>We found your ticket</p>
                </div>
                <p>{name}</p>
                <div className={style.pinContainer}>
                    <QrCode value={barcode} style={{ height: "120px", maxWidth: "100%", width: "100%" }}/>
                </div>

                <p className={style.info}>
                Please proceed to the entrance and show your qr code to an usher 
                </p>

                <hr />

                <button className="btn outline">
                    Share with friends
                </button>
            </div>
        </div>
        
    )
}