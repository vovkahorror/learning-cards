import { PATH } from 'pages/path'

export const emailMassage = `
<div style="background-color: #fff; padding: 15px;">
    <p style="font-size: 22px; 
       font-weight: 600; 
       margin: 0;
       color: #000000;
       text-align: center">
            Forgot your password?
    </p><br/>
                    
    <p style="color: #868686; 
       font-size: 16px; 
       text-align: center; 
       margin: 0;
       text-align: center;">
            That's okay, it happens! Click on the button bellow to reset your password
    </p><br/>
                    
    <a href='${PATH.CURRENT_URL}#${PATH.SET_NEW_PASSWORD}/$token$'
       style=" display: block;
               width: fit-content;
               margin: 0 auto;
               padding: 10px 50px; 
               background-color: #366EFF;
               text-decoration: none;
               border-radius: 30px;
               font-size: 16px;
               color: #ffffff;
               font-weight: 600;">
       Reset Your Password
    </a>
</div>`
