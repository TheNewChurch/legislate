import style from '../../styles/Share.module.scss'
export default function Share() {

    function shareLinks() {
        const links = [
            {
                url:"",
                text:"Whatapp",
                icon: "/assets/images/svg/whatsapp.svg"
            },
            {
                url:"",
                text:"Instagram",
                icon: "/assets/images/svg/instagram.svg"
            },
            {
                url:"",
                text:"Twitter",
                icon: "/assets/images/svg/twitter.svg"
            },
        ]

        return links.map( (item,index)=>
            (
                <button key={index} className={`btn outline ${style.link}`}>  
                   <img src={item.icon} /> 
                   <p>Share on {item.text}</p> 
                </button>
            )
        )        
    }

    return (
        <div className="share container">
            <div className="imgBackground">
                <div className="imageWithLogo">
                    <img src="/assets/images/legistlate-background.jpeg" alt="" />
                    <img src="/assets/images/legistlate-logo.svg" alt="legislate logo" className="svg-logo" />
                </div>    
            </div>
            <div className="page-container blurBackground">
               <div className={style.sharePage}>
                    <div className={style.shareHeaderContainer}>
                        <img src="/assets/images/connect.svg" alt="connect" />
                        <h1 className={style.pageHeader}>Share with friends and family</h1>
                    </div>
                    <div className={style.shareLinks}>
                        {
                            shareLinks()
                        }
                        <button className={`btn outline ${style.link}`}> <img src='/assets/images/svg/copy.svg'/> <p>Copy url</p> </button>
                    </div>
               </div>
            </div>
        </div>
        
    )
}