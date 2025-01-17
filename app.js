const express = require('express');
var bodyParser  = require('body-parser');
const app = express();
const port = 4000
const nodemailer = require("nodemailer");
const path = require('path');



app.use(
    express.urlencoded({
      extended: true,
    })
  )

  app.use(express.json());



const ff = path.join(__dirname, '/src')
app.use( express.static(ff));


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/src')
});





    //LOGIN & FORGOT PASSWORD OTP 

    app.post('/login/otp.html', (request, response)=>{
        let info = request.body
       
        return new Promise((resolve, reject)=>{
            var transporter = nodemailer.createTransport({
                host: 'mail.assistin.online',
                secureConnection: true,
                port: 465,
                service: 'SMTP',
                auth:{
                user:"fed-trust@assistin.online",
                pass:"INtrust2025#"
                },
                from:"fed-trust@assistin.online",
            });
    
            const mail_option = {
                from:`Fed-Trust <noreply@assistin.online>`,
                to: info.email,
                subject: "Fed-Trust Confirmation Code",
                html: 
                `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>New Message 2</title><!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
.rollover:hover .rollover-first {
max-height:0px!important;
display:none!important;
}
.rollover:hover .rollover-second {
max-height:none!important;
display:block!important;
}
.rollover span {
font-size:0px;
}
u + .body img ~ div div {
display:none;
}
#outlook a {
padding:0;
}
span.MsoHyperlink,
span.MsoHyperlinkFollowed {
color:inherit;
mso-style-priority:99;
}
a.es-button {
mso-style-priority:100!important;
text-decoration:none!important;
}
a[x-apple-data-detectors] {
color:inherit!important;
text-decoration:none!important;
font-size:inherit!important;
font-family:inherit!important;
font-weight:inherit!important;
line-height:inherit!important;
}
.es-desk-hidden {
display:none;
float:left;
overflow:hidden;
width:0;
max-height:0;
line-height:0;
mso-hide:all;
}
.es-button-border:hover > a.es-button {
color:#ffffff!important;
}
@media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } .img-4871 { height:38px!important } a.es-button.es-button-8578 { font-size:20px!important } a.es-button.es-button-1651 { font-size:24px!important } a.es-button.es-button-7456 { font-size:20px!important } a.es-button.es-button-6153 { font-size:22px!important } a.es-button.es-button-8281 { font-size:16px!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
</head>
<body class="body" style="width:100%;height:100%;padding:0;Margin:0">
<div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
    <v:fill type="tile" color="#fafafa"></v:fill>
</v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
<tr>
<td valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
<tr>
<td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
 <tr>
  <td align="left" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px">
   <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
     <tr>
      <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:30px;padding-bottom:20px;font-size:0px"><img src="https://firebasestorage.googleapis.com/v0/b/fedtrust-finance.appspot.com/o/fedtrust%2FD382BF38-982B-42D9-97ED-A66AF6F7850F.PNG?alt=media&token=d1322050-1c58-4f2c-97d7-94a956a04d77" alt="Logo" style="display:block;font-size:12px;border:0;outline:none;text-decoration:none" title="Logo" class="img-4871" height="51" width="200"></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
<tr>
<td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
 <tr>
  <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px">
   <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
     <tr>
      <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px"><img src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2F55191618237638326.png?alt=media&token=4cfb1e67-966e-4c4f-83c8-23426936fdbc" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none" width="100" height="72"></td>
         </tr>
         <tr>
          <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px"><h1 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:46px;color:#333333">Confirm OTP</h1></td>
         </tr>
         <tr>
          <td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:5px;padding-right:40px;padding-bottom:5px;padding-left:40px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
         </tr>
         <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:5px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Please use the verification code below to verify your access:</p></td>
         </tr>
         <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:transparent;border-width:0px;display:inline-block;border-radius:6px;width:auto"><a href="" class="es-button es-button-6028 es-button-8281 es-button-6153 es-button-7456 es-button-1651 es-button-8578" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#333333;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:transparent;border-radius:6px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid transparent;padding-left:30px;padding-right:30px">${info.OTP}</a></span></td>
         </tr>
         <tr>
          <td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:5px;padding-right:40px;padding-bottom:5px;padding-left:40px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">You’ve received this message because your email address has been registered with our site. If you didn't request this, you can ignore this email or let us know. <br>Thanks!</p></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
<tr>
<td align="center" style="padding:0;Margin:0">
<table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:640px" role="none">
 <tr>
  <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:20px">
   <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
     <tr>
      <td align="left" style="padding:0;Margin:0;width:600px">
       <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
           <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
           <tr>
           <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="Facebook" src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Ffacebook-logo-black.png?alt=media&token=9ff26009-82b4-4ef4-8c06-44d4cd04b711" alt="Fb" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
           <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="X.com" src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Fx-logo-black.png?alt=media&token=382f9add-7e24-4dba-94d6-a5fe5c480653" alt="X" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
           <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="Instagram" src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Finstagram-logo-black.png?alt=media&token=c20af3a8-26bc-4527-bc05-52128d0b271c" alt="Inst" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
           <td align="center" valign="top" style="padding:0;Margin:0"><img title="Youtube" src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Fyoutube-logo-black.png?alt=media&token=36b8e228-1653-4637-afba-3f5a8645332c" alt="Yt" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
          </tr>
           </table></td>
         </tr>
         <tr>
          <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">Fed-Trust © 2024 All Rights Reserved.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">54 Duncan Street Shoreditch, LONDON N1 8BW, United Kingdom.</p></td>
         </tr>
         <tr>
          <td style="padding:0;Margin:0">
           <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr class="links">
              <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Visit Us </a></td>
              <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Privacy Policy</a></td>
              <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Terms of Use</a></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
</div>
</body>
</html>

                `
            }
    
            transporter.sendMail(mail_option, function(error, info){
                if(error){
                    return reject({message:`An error has occured`})
                }
                return resolve({message:"email sentss"})
            })
    
        response.json({
         message: 'success'
        })
        
    })
    })


    //    INTERNATIONAL TRNSFER EMAIL


    app.post('/done.html', (request, response)=>{
        let info = request.body
       
        return new Promise((resolve, reject)=>{
            var transporter = nodemailer.createTransport({
                host: 'mail.assistin.online',
                secureConnection: true,
                port: 465,
                service: 'SMTP',
                auth:{
                    user:"fed-trust@assistin.online",
                    pass:"INtrust2025#"
                },
                from:"fed-trust@assistin.online",
            });
    
            const mail_option = {
                from:`Fed-Trust <noreply@assistin.online>`,
                to: info.senderemail,
                subject: "New Alert From Fed-Trust ",
                html:  
               `
                           
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>dd</title><!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
.rollover:hover .rollover-first {
max-height:0px!important;
display:none!important;
}
.rollover:hover .rollover-second {
max-height:none!important;
display:block!important;
}
.rollover span {
font-size:0px;
}
u + .body img ~ div div {
display:none;
}
#outlook a {
padding:0;
}
span.MsoHyperlink,
span.MsoHyperlinkFollowed {
color:inherit;
mso-style-priority:99;
}
a.es-button {
mso-style-priority:100!important;
text-decoration:none!important;
}
a[x-apple-data-detectors] {
color:inherit!important;
text-decoration:none!important;
font-size:inherit!important;
font-family:inherit!important;
font-weight:inherit!important;
line-height:inherit!important;
}
.es-desk-hidden {
display:none;
float:left;
overflow:hidden;
width:0;
max-height:0;
line-height:0;
mso-hide:all;
}
.es-button-border:hover > a.es-button {
color:#ffffff!important;
}
@media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } .img-7614 { height:38px!important } .img-8080 { width:90px!important; height:auto!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
</head>
<body class="body" style="width:100%;height:100%;padding:0;Margin:0">
<div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#fafafa"></v:fill>
    </v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
<tr>
<td valign="top" style="padding:0;Margin:0">
<table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
 <tr>
  <td align="center" style="padding:0;Margin:0">
   <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
     <tr>
      <td align="left" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px">
       <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td style="padding:0;Margin:0;padding-bottom:20px;font-size:0px" align="center"><img src="https://firebasestorage.googleapis.com/v0/b/fedtrust-finance.appspot.com/o/fedtrust%2FD382BF38-982B-42D9-97ED-A66AF6F7850F.PNG?alt=media&token=d1322050-1c58-4f2c-97d7-94a956a04d77" alt="Logo" style="display:block;font-size:12px;border:0;outline:none;text-decoration:none" title="Logo" class="img-7614 img-7614" height="44" width="178"></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
 <tr>
  <td align="center" style="padding:0;Margin:0">
   <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
     <tr>
      <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px">
       <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td align="left" style="padding:0;Margin:0;width:560px">
           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td align="center" style="padding:0;Margin:0;padding-top:30px;font-size:0"><img src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Fimages-removebg-preview.png?alt=media&token=62273274-48b8-421a-b74f-afe9ed0c7f10" alt="" width="135" class="img-8080" height="135" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
     <tr>
      <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:20px">
       <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td align="left" style="padding:0;Margin:0;width:560px">
           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td align="left" style="padding:0;Margin:0"><h5 align="center" class=" es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#333333"><strong>Transaction Successful&nbsp;</strong></h5></td>
             </tr>
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:35px"><p align="center" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Dear ${info.sendername}, your transfer of ${info.debit}.00 to ${info.receivercountry} was sent successfully and might take upto 5 working days to reflect on receiver's balance.&nbsp;</p>
                
</td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
     <tr>
      <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:20px">
       <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0px">
         <tr>
          <td align="left" style="padding:0;Margin:0;width:560px">
           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td align="left" class="h-auto" height="161" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"></p>
               <table cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%" class="es-table" role="presentation">
                 <tr>
                  <td style="padding:0;Margin:0;">Bank Name<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                  <td style="padding:0;Margin:0">${info.receiverbank}<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                 </tr>
                 <tr>
                  <td style="padding:0;Margin:0">Account Number:<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                  <td style="padding:0;Margin:0">${info.receiveraccountnumber}<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                 </tr>
                 <tr>
                  <td style="padding:0;Margin:0">Account Holder<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                  <td style="padding:0;Margin:0">${info.receivername}<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                 </tr>
                 <tr>
                    <td style="padding:0;Margin:0">Amount<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                    <td style="padding:0;Margin:0">${info.debit}.00<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                   </tr>
                 <tr>
                  <td style="padding:0;Margin:0">Date<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                  <td style="padding:0;Margin:0">${info.date}<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                 </tr>
               </table><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"></p></td>
             </tr>
             <tr>
                <td align="left" style="padding:0;Margin:0;padding-top:35px; font-weight: bolder;"><p align="left" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">For further enquiries, please contact our customer support through: <br> Email: fed-trust@assistin.online&nbsp;</p><p align="left" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Thanks for choosing Fed-Trust Finance.&nbsp;</p>​
               
  </td>
               </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table>
<table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
 <tr>
  <td align="center" style="padding:0;Margin:0">
   <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center" role="none">
     <tr>
      <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:30px">
       <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td align="left" style="padding:0;Margin:0;width:560px">
           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">Copyright © 2024 Fed-Trust Finance All Rights Reserved.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">&nbsp;54 Duncan Street Shoreditch, LONDON N1 8BW, United Kingdom.</p></td>
             </tr>
             <tr>
              <td style="padding:0;Margin:0">
               <table class="es-menu" width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr class="links">
                  <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px" width="33.33%" valign="top" align="center"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Visit Us </a></td>
                  <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc" width="33.33%" valign="top" align="center"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Privacy Policy</a></td>
                  <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc" width="33.33%" valign="top" align="center"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Terms of Use</a></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
 <tr>
  <td align="center" style="padding:0;Margin:0">
   <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center" role="none">
     <tr>
      <td align="left" style="padding:20px;Margin:0">
       <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
           <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td align="center" style="padding:0;Margin:0;display:none"></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table></td>
</tr>
</table>
</div>
</body>
</html>
    
  
               `
               
            }
    
            transporter.sendMail(mail_option, function(error, info){
                if(error){
                    return reject({message:`An error has occured`})
                }
                return resolve({message:"email sentss"})
            })
    
        response.json({
         message: 'success'
        })
        
    })
    })


    //LOCAL TRANSFER


app.post('/done2.html', (request, response)=>{
    let info = request.body
   
    return new Promise((resolve, reject)=>{
        var transporter = nodemailer.createTransport({
            host: 'mail.assistin.online',
            secureConnection: true,
            port: 465,
            service: 'SMTP',
            auth:{
                user:"fed-trust@assistin.online",
                pass:"INtrust2025#"
            },
            from:"fed-trust@assistin.online",
        });


        const mail_option = {
            from:`Fed-Trust <noreply@assistin.online>`,
            to: info.senderemail,
            subject: "New Alert From Fed-Trust",
            html: 
            `
            
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>dd</title><!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
.rollover:hover .rollover-first {
max-height:0px!important;
display:none!important;
}
.rollover:hover .rollover-second {
max-height:none!important;
display:block!important;
}
.rollover span {
font-size:0px;
}
u + .body img ~ div div {
display:none;
}
#outlook a {
padding:0;
}
span.MsoHyperlink,
span.MsoHyperlinkFollowed {
color:inherit;
mso-style-priority:99;
}
a.es-button {
mso-style-priority:100!important;
text-decoration:none!important;
}
a[x-apple-data-detectors] {
color:inherit!important;
text-decoration:none!important;
font-size:inherit!important;
font-family:inherit!important;
font-weight:inherit!important;
line-height:inherit!important;
}
.es-desk-hidden {
display:none;
float:left;
overflow:hidden;
width:0;
max-height:0;
line-height:0;
mso-hide:all;
}
.es-button-border:hover > a.es-button {
color:#ffffff!important;
}
@media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } .img-7614 { height:38px!important } .img-8080 { width:90px!important; height:auto!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
</head>
<body class="body" style="width:100%;height:100%;padding:0;Margin:0">
<div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#fafafa"></v:fill>
    </v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
<tr>
<td valign="top" style="padding:0;Margin:0">
<table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
 <tr>
  <td align="center" style="padding:0;Margin:0">
   <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
     <tr>
      <td align="left" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px">
       <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td style="padding:0;Margin:0;padding-bottom:20px;font-size:0px" align="center"><img src="https://firebasestorage.googleapis.com/v0/b/fedtrust-finance.appspot.com/o/fedtrust%2FD382BF38-982B-42D9-97ED-A66AF6F7850F.PNG?alt=media&token=d1322050-1c58-4f2c-97d7-94a956a04d77" alt="Logo" style="display:block;font-size:12px;border:0;outline:none;text-decoration:none" title="Logo" class="img-7614 img-7614" height="44" width="178"></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
 <tr>
  <td align="center" style="padding:0;Margin:0">
   <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
     <tr>
      <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px">
       <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td align="left" style="padding:0;Margin:0;width:560px">
           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td align="center" style="padding:0;Margin:0;padding-top:30px;font-size:0"><img src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Fimages-removebg-preview.png?alt=media&token=62273274-48b8-421a-b74f-afe9ed0c7f10" alt="" width="135" class="img-8080" height="135" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
     <tr>
      <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:20px">
       <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td align="left" style="padding:0;Margin:0;width:560px">
           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td align="left" style="padding:0;Margin:0"><h5 align="center" class=" es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#333333"><strong>Transaction Successful&nbsp;</strong></h5></td>
             </tr>
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:35px"><p align="center" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Dear ${info.sendername}, your transfer of ${info.currency}${info.debit} was sent successfully&nbsp;</p>
                
                
</td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
     <tr>
      <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:20px">
       <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0px">
         <tr>
          <td align="left" style="padding:0;Margin:0;width:560px">
           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td align="left" class="h-auto" height="161" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"></p>
               <table cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%" class="es-table" role="presentation">
                 <tr>
                  <td style="padding:0;Margin:0;">Bank Name<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                  <td style="padding:0;Margin:0">Fed-Trust Finance<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                 </tr>
                 <tr>
                  <td style="padding:0;Margin:0">Account Number:<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                  <td style="padding:0;Margin:0">${info.receiveraccountnumber}<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                 </tr>
                 <tr>
                  <td style="padding:0;Margin:0">Account Holder<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                  <td style="padding:0;Margin:0">${info.receivername}<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                 </tr>
                 <tr>
                    <td style="padding:0;Margin:0">Amount<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                    <td style="padding:0;Margin:0">${info.currency}${info.debit}.00<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                   </tr>

                   <tr>
                    <td style="padding:0;Margin:0">Fee<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                    <td style="padding:0;Margin:0">${info.currency}0.00<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                   </tr>
                 <tr>
                  <td style="padding:0;Margin:0">Date<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                  <td style="padding:0;Margin:0">${info.date}<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                 </tr>
               </table><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"></p></td>
             </tr>
             <tr>
                <td align="left" style="padding:0;Margin:0;padding-top:35px; font-weight: bolder;"><p align="left" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">For further enquiries, please contact our customer support through: <br> Email: fed-trust@assistin.online&nbsp;</p><p align="left" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Thanks for choosing Fed-Trust Finance.&nbsp;</p>​
               
  </td>
               </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table>
<table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
 <tr>
  <td align="center" style="padding:0;Margin:0">
   <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center" role="none">
     <tr>
      <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:30px">
       <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td align="left" style="padding:0;Margin:0;width:560px">
           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">Copyright © 2024 Fed-Trust Finance All Rights Reserved.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">&nbsp;54 Duncan Street Shoreditch, LONDON N1 8BW, United Kingdom.</p></td>
             </tr>
             <tr>
              <td style="padding:0;Margin:0">
               <table class="es-menu" width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr class="links">
                  <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px" width="33.33%" valign="top" align="center"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Visit Us </a></td>
                  <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc" width="33.33%" valign="top" align="center"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Privacy Policy</a></td>
                  <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc" width="33.33%" valign="top" align="center"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Terms of Use</a></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
 <tr>
  <td align="center" style="padding:0;Margin:0">
   <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center" role="none">
     <tr>
      <td align="left" style="padding:20px;Margin:0">
       <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
         <tr>
          <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
           <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
             <tr>
              <td align="center" style="padding:0;Margin:0;display:none"></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table></td>
 </tr>
</table></td>
</tr>
</table>
</div>
</body>
</html>
    
    `
        }

        const mail_option2 = {
            from:`Fed-Trust <noreply@assistin.online>`,
            to: info.receiveremail,
            subject: "New Alert From Fed-Trust",
            html: 
            `
            
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" lang="en">
        <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title>dd</title><!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <style type="text/css">
        .rollover:hover .rollover-first {
        max-height:0px!important;
        display:none!important;
        }
        .rollover:hover .rollover-second {
        max-height:none!important;
        display:block!important;
        }
        .rollover span {
        font-size:0px;
        }
        u + .body img ~ div div {
        display:none;
        }
        #outlook a {
        padding:0;
        }
        span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
        color:inherit;
        mso-style-priority:99;
        }
        a.es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
        line-height:inherit!important;
        }
        .es-desk-hidden {
        display:none;
        float:left;
        overflow:hidden;
        width:0;
        max-height:0;
        line-height:0;
        mso-hide:all;
        }
        .es-button-border:hover > a.es-button {
        color:#ffffff!important;
        }
        @media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } .img-7614 { height:38px!important } .img-8080 { width:90px!important; height:auto!important } }
        @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
        </style>
        </head>
        <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
        <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#fafafa"></v:fill>
            </v:background>
        <![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
        <tr>
        <td valign="top" style="padding:0;Margin:0">
        <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
             <tr>
              <td align="left" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td style="padding:0;Margin:0;padding-bottom:20px;font-size:0px" align="center"><img src="https://firebasestorage.googleapis.com/v0/b/fedtrust-finance.appspot.com/o/fedtrust%2FD382BF38-982B-42D9-97ED-A66AF6F7850F.PNG?alt=media&token=d1322050-1c58-4f2c-97d7-94a956a04d77" alt="Logo" style="display:block;font-size:12px;border:0;outline:none;text-decoration:none" title="Logo" class="img-7614 img-7614" height="44" width="178"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
        </table>
        <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:30px;font-size:0"><img src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Fimages-removebg-preview.png?alt=media&token=62273274-48b8-421a-b74f-afe9ed0c7f10" alt="" width="135" class="img-8080" height="135" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:20px">
               <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><h5 align="center" class=" es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#333333"><strong>Transaction Notification&nbsp;</strong></h5></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:35px"><p align="left" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Dear ${info.receivername}, <br> your Fed-Trust Finance account has been credited with ${info.currency}${info.debit}.00 from ${info.sendername}.&nbsp;</p>
                        
                        
        </td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:20px">
               <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="h-auto" height="161" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"></p>
                       <table cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%" class="es-table" role="presentation">
                         <tr>
                          <td style="padding:0;Margin:0;">Date<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                          <td style="padding:0;Margin:0">${info.date}<p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">​</p></td>
                         </tr>
                      
                     <tr>
                        <td align="left" style="padding:0;Margin:0;padding-top:35px; font-weight: bolder;"><p align="left" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">For further enquiries, please contact our customer support through: <br> Email: fed-trust@assistin.online&nbsp;</p><p align="left" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Thanks for choosing Fed-Trust Finance.&nbsp;</p>​
                       
          </td>
                       </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
        </table>
        <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center" role="none">
             <tr>
              <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:30px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">Copyright © 2024 Fed-Trust Finance All Rights Reserved.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">&nbsp;54 Duncan Street Shoreditch, LONDON N1 8BW, United Kingdom.</p></td>
                     </tr>
                     <tr>
                      <td style="padding:0;Margin:0">
                       <table class="es-menu" width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr class="links">
                          <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px" width="33.33%" valign="top" align="center"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Visit Us </a></td>
                          <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc" width="33.33%" valign="top" align="center"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Privacy Policy</a></td>
                          <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc" width="33.33%" valign="top" align="center"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Terms of Use</a></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
        </table>
        <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center" role="none">
             <tr>
              <td align="left" style="padding:20px;Margin:0">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;display:none"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
        </table></td>
        </tr>
        </table>
        </div>
        </body>
        </html>
            
            `
        }

        transporter.sendMail(mail_option, function(error, info){
            if(error){
                return reject({message:`An error has occured`})
            }
            return resolve({message:"email sentss"})
        })

        transporter.sendMail(mail_option2, function(error, info){
            if(error){
                return reject({message:`An error has occured`})
            }
            return resolve({message:"email sentss"})
        })




    response.json({
     message: 'success'
    })
    
})
})


//  ADMIN   EMAIL

app.post('/admin/maileredit.html', (request, response) => {
    let info = request.body
  
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            host: 'mail.assistin.online',
            secureConnection: true,
            port: 465,
            service: 'SMTP',
            auth:{
                user:"fed-trust@assistin.online",
                pass:"INtrust2025#"
            },
            from:"fed-trust@assistin.online",
        });

        const mail_option = {
            from:`fed-trust@assistin.online`,
            to: info.useremail,
            subject: "New Message From Fed-Trust ",
            html:  
           `
        <!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html dir="ltr" lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title>New Message 3</title><!--[if (mso 16)]>
          <style type="text/css">
          a {text-decoration: none;}
          </style>
          <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
      <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
        <style type="text/css">
          .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
          }
      
          .rollover:hover .rollover-second {
            max-height: none !important;
            display: block !important;
          }
      
          .rollover span {
            font-size: 0px;
          }
      
          u+.body img~div div {
            display: none;
          }
      
          #outlook a {
            padding: 0;
          }
      
          span.MsoHyperlink,
          span.MsoHyperlinkFollowed {
            color: inherit;
            mso-style-priority: 99;
          }
      
          a.es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
          }
      
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
      
          .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
          }
      
          .es-button-border:hover>a.es-button {
            color: #ffffff !important;
          }
      
          @media only screen and (max-width:600px) {
            .es-m-p0r {
              padding-right: 0px !important
            }
      
            *[class="gmail-fix"] {
              display: none !important
            }
      
            p,
            a {
              line-height: 150% !important
            }
      
            h1,
            h1 a {
              line-height: 120% !important
            }
      
            h2,
            h2 a {
              line-height: 120% !important
            }
      
            h3,
            h3 a {
              line-height: 120% !important
            }
      
            h4,
            h4 a {
              line-height: 120% !important
            }
      
            h5,
            h5 a {
              line-height: 120% !important
            }
      
            h6,
            h6 a {
              line-height: 120% !important
            }
      
            h1 {
              font-size: 36px !important;
              text-align: left
            }
      
            h2 {
              font-size: 26px !important;
              text-align: left
            }
      
            h3 {
              font-size: 20px !important;
              text-align: left
            }
      
            h4 {
              font-size: 24px !important;
              text-align: left
            }
      
            h5 {
              font-size: 20px !important;
              text-align: left
            }
      
            h6 {
              font-size: 16px !important;
              text-align: left
            }
      
            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
              font-size: 36px !important
            }
      
            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
              font-size: 26px !important
            }
      
            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
              font-size: 20px !important
            }
      
            .es-header-body h4 a,
            .es-content-body h4 a,
            .es-footer-body h4 a {
              font-size: 24px !important
            }
      
            .es-header-body h5 a,
            .es-content-body h5 a,
            .es-footer-body h5 a {
              font-size: 20px !important
            }
      
            .es-header-body h6 a,
            .es-content-body h6 a,
            .es-footer-body h6 a {
              font-size: 16px !important
            }
      
            .es-menu td a {
              font-size: 12px !important
            }
      
            .es-header-body p,
            .es-header-body a {
              font-size: 14px !important
            }
      
            .es-content-body p,
            .es-content-body a {
              font-size: 14px !important
            }
      
            .es-footer-body p,
            .es-footer-body a {
              font-size: 14px !important
            }
      
            .es-infoblock p,
            .es-infoblock a {
              font-size: 12px !important
            }
      
            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3,
            .es-m-txt-c h4,
            .es-m-txt-c h5,
            .es-m-txt-c h6 {
              text-align: center !important
            }
      
            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3,
            .es-m-txt-r h4,
            .es-m-txt-r h5,
            .es-m-txt-r h6 {
              text-align: right !important
            }
      
            .es-m-txt-j,
            .es-m-txt-j h1,
            .es-m-txt-j h2,
            .es-m-txt-j h3,
            .es-m-txt-j h4,
            .es-m-txt-j h5,
            .es-m-txt-j h6 {
              text-align: justify !important
            }
      
            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3,
            .es-m-txt-l h4,
            .es-m-txt-l h5,
            .es-m-txt-l h6 {
              text-align: left !important
            }
      
            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
              display: inline !important
            }
      
            .es-m-txt-r .rollover:hover .rollover-second,
            .es-m-txt-c .rollover:hover .rollover-second,
            .es-m-txt-l .rollover:hover .rollover-second {
              display: inline !important
            }
      
            .es-m-txt-r .rollover span,
            .es-m-txt-c .rollover span,
            .es-m-txt-l .rollover span {
              line-height: 0 !important;
              font-size: 0 !important
            }
      
            .es-spacer {
              display: inline-table
            }
      
            a.es-button,
            button.es-button {
              font-size: 20px !important;
              line-height: 120% !important
            }
      
            a.es-button,
            button.es-button,
            .es-button-border {
              display: inline-block !important
            }
      
            .es-m-fw,
            .es-m-fw.es-fw,
            .es-m-fw .es-button {
              display: block !important
            }
      
            .es-m-il,
            .es-m-il .es-button,
            .es-social,
            .es-social td,
            .es-menu {
              display: inline-block !important
            }
      
            .es-adaptive table,
            .es-left,
            .es-right {
              width: 100% !important
            }
      
            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
              width: 100% !important;
              max-width: 600px !important
            }
      
            .adapt-img {
              width: 100% !important;
              height: auto !important
            }
      
            .es-mobile-hidden,
            .es-hidden {
              display: none !important
            }
      
            .es-desk-hidden {
              width: auto !important;
              overflow: visible !important;
              float: none !important;
              max-height: inherit !important;
              line-height: inherit !important
            }
      
            tr.es-desk-hidden {
              display: table-row !important
            }
      
            table.es-desk-hidden {
              display: table !important
            }
      
            td.es-desk-menu-hidden {
              display: table-cell !important
            }
      
            .es-menu td {
              width: 1% !important
            }
      
            table.es-table-not-adapt,
            .esd-block-html table {
              width: auto !important
            }
      
            .es-social td {
              padding-bottom: 10px
            }
      
            .h-auto {
              height: auto !important
            }
      
            .img-7614 {
              height: 38px !important
            }
      
            .img-8080 {
              width: 90px !important;
              height: auto !important
            }
          }
      
          @media screen and (max-width:384px) {
            .mail-message-content {
              width: 414px !important
            }
          }
        </style>
      </head>
      
      <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
        <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
                  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                      <v:fill type="tile" color="#fafafa"></v:fill>
                  </v:background>
              <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
            <tr>
              <td valign="top" style="padding:0;Margin:0">
                <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                  <tr>
                    <td align="center" style="padding:0;Margin:0">
                      <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                        role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                        <tr>
                          <td align="left"
                            style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px">
                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                  <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr>
                                      <td style="padding:0;Margin:0;padding-bottom:20px;font-size:0px" align="center"><img
                                          src="https://firebasestorage.googleapis.com/v0/b/fedtrust-finance.appspot.com/o/fedtrust%2FD382BF38-982B-42D9-97ED-A66AF6F7850F.PNG?alt=media&token=d1322050-1c58-4f2c-97d7-94a956a04d77"
                                          alt="Logo"
                                          style="display:block;font-size:12px;border:0;outline:none;text-decoration:none"
                                          title="Logo" class="img-7614 img-7614" height="44" width="178"></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                  <tr>
                    <td align="center" style="padding:0;Margin:0">
                      <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                        role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                        <tr>
                          <td align="left"
                            style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px">
                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="left" style="padding:0;Margin:0;width:560px">
                                  <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-top:30px;font-size:0"><img
                                          src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2F55191618237638326.png?alt=media&token=4cfb1e67-966e-4c4f-83c8-23426936fdbc"
                                          alt="" width="135" class="img-8080" height="105"
                                          style="display:block;font-size:14px;border:0;outline:none;text-decoration:none">
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:20px">
                            <table cellpadding="0" cellspacing="0" role="none"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="left" style="padding:0;Margin:0;width:560px">
                                  <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr>
                                      <td align="left" style="padding:0;Margin:0">
                                        <h5 align="center" class=" es-m-txt-c"
                                          style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#333333">
                                          <strong>${info.subject}&nbsp;</strong></h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="left" style="padding:0;Margin:0;padding-top:35px">
                                        <p style="margin-top: 2%;" align="start"
                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                         ${info.p1}&nbsp;</p>​
                                        <p style="margin-top: 2%;" align="start"
                                          style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                          ${info.p2}&nbsp;</p>​
      
                                          <p style="margin-top: 2%;" align="start"
                                          style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                          ${info.p3}&nbsp;</p>​
      
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
      
                <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                  <tr>
                    <td align="center" style="padding:0;Margin:0">
                      <table class="es-footer-body"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                        cellspacing="0" cellpadding="0" align="center" role="none">
                        <tr>
                          <td align="left"
                            style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:30px">
                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="left" style="padding:0;Margin:0;width:560px">
                                  <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr>
                                      <td align="center" style="padding:0;Margin:0;padding-bottom:35px">
                                        <p
                                          style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">
                                          Fed-Trust © 2024 All Rights Reserved.</p>
                                        <p
                                          style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">
                                          &nbsp;54 Duncan Street Shoreditch, LONDON N1 8BW, United Kingdom.</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="padding:0;Margin:0">
                                        <table class="es-menu" width="100%" cellspacing="0" cellpadding="0"
                                          role="presentation"
                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                          <tr class="links">
                                            <td
                                              style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px"
                                              width="33.33%" valign="top" align="center"><a target="_blank" href=""
                                                style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Visit
                                                Us </a></td>
                                            <td
                                              style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"
                                              width="33.33%" valign="top" align="center"><a target="_blank" href=""
                                                style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Privacy
                                                Policy</a></td>
                                            <td
                                              style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"
                                              width="33.33%" valign="top" align="center"><a target="_blank" href=""
                                                style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Terms
                                                of Use</a></td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                  <tr>
                    <td align="center" style="padding:0;Margin:0">
                      <table class="es-content-body"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                        cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center" role="none">
                        <tr>
                          <td align="left" style="padding:20px;Margin:0">
                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                  <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr>
                                      <td align="center" style="padding:0;Margin:0;display:none"></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </body>
      
      </html>
                
        `
      }
  
  
      transporter.sendMail(mail_option, function (error, info) {
        if (error) {
          return reject({ message: `An error has occured` })
        }
        return resolve({ message: "email sentss" })
      })
  
  
  
  
      response.json({
        message: 'success'
      })
  
    })
  })


    //RESTRICTED ALERT



    app.post('/blocked.html', (request, response) => {
      let info = request.body
    
      return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            host: 'mail.assistin.online',
            secureConnection: true,
            port: 465,
            service: 'SMTP',
            auth:{
                user:"fed-trust@assistin.online",
                pass:"INtrust2025#"
            },
            from:"fed-trust@assistin.online",
        });
  
          const mail_option = {
              from:`fed-trust@assistin.online`,
              to: info.user,
              subject: "New Message From Fed-Trust ",
              html:  
              `
              
  <!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" lang="en">
  
  <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New Message 3</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <style type="text/css">
    .rollover:hover .rollover-first {
      max-height: 0px !important;
      display: none !important;
    }
  
    .rollover:hover .rollover-second {
      max-height: none !important;
      display: block !important;
    }
  
    .rollover span {
      font-size: 0px;
    }
  
    u+.body img~div div {
      display: none;
    }
  
    #outlook a {
      padding: 0;
    }
  
    span.MsoHyperlink,
    span.MsoHyperlinkFollowed {
      color: inherit;
      mso-style-priority: 99;
    }
  
    a.es-button {
      mso-style-priority: 100 !important;
      text-decoration: none !important;
    }
  
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
  
    .es-desk-hidden {
      display: none;
      float: left;
      overflow: hidden;
      width: 0;
      max-height: 0;
      line-height: 0;
      mso-hide: all;
    }
  
    .es-button-border:hover>a.es-button {
      color: #ffffff !important;
    }
  
    @media only screen and (max-width:600px) {
      .es-m-p0r {
        padding-right: 0px !important
      }
  
      *[class="gmail-fix"] {
        display: none !important
      }
  
      p,
      a {
        line-height: 150% !important
      }
  
      h1,
      h1 a {
        line-height: 120% !important
      }
  
      h2,
      h2 a {
        line-height: 120% !important
      }
  
      h3,
      h3 a {
        line-height: 120% !important
      }
  
      h4,
      h4 a {
        line-height: 120% !important
      }
  
      h5,
      h5 a {
        line-height: 120% !important
      }
  
      h6,
      h6 a {
        line-height: 120% !important
      }
  
      h1 {
        font-size: 36px !important;
        text-align: left
      }
  
      h2 {
        font-size: 26px !important;
        text-align: left
      }
  
      h3 {
        font-size: 20px !important;
        text-align: left
      }
  
      h4 {
        font-size: 24px !important;
        text-align: left
      }
  
      h5 {
        font-size: 20px !important;
        text-align: left
      }
  
      h6 {
        font-size: 16px !important;
        text-align: left
      }
  
      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 36px !important
      }
  
      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 26px !important
      }
  
      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 20px !important
      }
  
      .es-header-body h4 a,
      .es-content-body h4 a,
      .es-footer-body h4 a {
        font-size: 24px !important
      }
  
      .es-header-body h5 a,
      .es-content-body h5 a,
      .es-footer-body h5 a {
        font-size: 20px !important
      }
  
      .es-header-body h6 a,
      .es-content-body h6 a,
      .es-footer-body h6 a {
        font-size: 16px !important
      }
  
      .es-menu td a {
        font-size: 12px !important
      }
  
      .es-header-body p,
      .es-header-body a {
        font-size: 14px !important
      }
  
      .es-content-body p,
      .es-content-body a {
        font-size: 14px !important
      }
  
      .es-footer-body p,
      .es-footer-body a {
        font-size: 14px !important
      }
  
      .es-infoblock p,
      .es-infoblock a {
        font-size: 12px !important
      }
  
      .es-m-txt-c,
      .es-m-txt-c h1,
      .es-m-txt-c h2,
      .es-m-txt-c h3,
      .es-m-txt-c h4,
      .es-m-txt-c h5,
      .es-m-txt-c h6 {
        text-align: center !important
      }
  
      .es-m-txt-r,
      .es-m-txt-r h1,
      .es-m-txt-r h2,
      .es-m-txt-r h3,
      .es-m-txt-r h4,
      .es-m-txt-r h5,
      .es-m-txt-r h6 {
        text-align: right !important
      }
  
      .es-m-txt-j,
      .es-m-txt-j h1,
      .es-m-txt-j h2,
      .es-m-txt-j h3,
      .es-m-txt-j h4,
      .es-m-txt-j h5,
      .es-m-txt-j h6 {
        text-align: justify !important
      }
  
      .es-m-txt-l,
      .es-m-txt-l h1,
      .es-m-txt-l h2,
      .es-m-txt-l h3,
      .es-m-txt-l h4,
      .es-m-txt-l h5,
      .es-m-txt-l h6 {
        text-align: left !important
      }
  
      .es-m-txt-r img,
      .es-m-txt-c img,
      .es-m-txt-l img {
        display: inline !important
      }
  
      .es-m-txt-r .rollover:hover .rollover-second,
      .es-m-txt-c .rollover:hover .rollover-second,
      .es-m-txt-l .rollover:hover .rollover-second {
        display: inline !important
      }
  
      .es-m-txt-r .rollover span,
      .es-m-txt-c .rollover span,
      .es-m-txt-l .rollover span {
        line-height: 0 !important;
        font-size: 0 !important
      }
  
      .es-spacer {
        display: inline-table
      }
  
      a.es-button,
      button.es-button {
        font-size: 20px !important;
        line-height: 120% !important
      }
  
      a.es-button,
      button.es-button,
      .es-button-border {
        display: inline-block !important
      }
  
      .es-m-fw,
      .es-m-fw.es-fw,
      .es-m-fw .es-button {
        display: block !important
      }
  
      .es-m-il,
      .es-m-il .es-button,
      .es-social,
      .es-social td,
      .es-menu {
        display: inline-block !important
      }
  
      .es-adaptive table,
      .es-left,
      .es-right {
        width: 100% !important
      }
  
      .es-content table,
      .es-header table,
      .es-footer table,
      .es-content,
      .es-footer,
      .es-header {
        width: 100% !important;
        max-width: 600px !important
      }
  
      .adapt-img {
        width: 100% !important;
        height: auto !important
      }
  
      .es-mobile-hidden,
      .es-hidden {
        display: none !important
      }
  
      .es-desk-hidden {
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        line-height: inherit !important
      }
  
      tr.es-desk-hidden {
        display: table-row !important
      }
  
      table.es-desk-hidden {
        display: table !important
      }
  
      td.es-desk-menu-hidden {
        display: table-cell !important
      }
  
      .es-menu td {
        width: 1% !important
      }
  
      table.es-table-not-adapt,
      .esd-block-html table {
        width: auto !important
      }
  
      .es-social td {
        padding-bottom: 10px
      }
  
      .h-auto {
        height: auto !important
      }
  
      .img-7614 {
        height: 38px !important
      }
  
      .img-8080 {
        width: 90px !important;
        height: auto !important
      }
    }
  
    @media screen and (max-width:384px) {
      .mail-message-content {
        width: 414px !important
      }
    }
  </style>
  </head>
  
  <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#fafafa"></v:fill>
            </v:background>
        <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none"
      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
      <tr>
        <td valign="top" style="padding:0;Margin:0">
          <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
            <tr>
              <td align="center" style="padding:0;Margin:0">
                <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                  role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                  <tr>
                    <td align="left"
                      style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px">
                      <table width="100%" cellspacing="0" cellpadding="0" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td style="padding:0;Margin:0;padding-bottom:20px;font-size:0px" align="center"><img
                                    src="https://firebasestorage.googleapis.com/v0/b/fedtrust-finance.appspot.com/o/fedtrust%2FD382BF38-982B-42D9-97ED-A66AF6F7850F.PNG?alt=media&token=d1322050-1c58-4f2c-97d7-94a956a04d77"
                                    alt="Logo"
                                    style="display:block;font-size:12px;border:0;outline:none;text-decoration:none"
                                    title="Logo" class="img-7614 img-7614" height="44" width="178"></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
            <tr>
              <td align="center" style="padding:0;Margin:0">
                <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                  role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                  <tr>
                    <td align="left"
                      style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px">
                      <table width="100%" cellspacing="0" cellpadding="0" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="left" style="padding:0;Margin:0;width:560px">
                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="center" style="padding:0;Margin:0;padding-top:30px;font-size:0"><img
                                    src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Fxx.png?alt=media&token=eb19f59c-3a7f-4bc1-b478-263b7e44b46c"
                                    alt="" width="105" class="img-8080" height="105"
                                    style="display:block;font-size:14px;border:0;outline:none;text-decoration:none">
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:20px">
                      <table cellpadding="0" cellspacing="0" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="left" style="padding:0;Margin:0;width:560px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="left" style="padding:0;Margin:0">
                                  <h5 align="center" class=" es-m-txt-c"
                                    style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#333333">
                                    <strong style="color: red;">Restricted Account Access Due to Unauthorized Transactions&nbsp;</strong></h5>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="padding:0;Margin:0;padding-top:35px">
                                  <p style="margin-top: 2%;" align="start"
                                  style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                  Dear Customer,&nbsp;</p>​
                                  <p style="margin-top: 2%;" align="start"
                                    style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                    We hope this message finds you well. We regret to inform you that your account has been restricted due to unauthorized transactions detected from an unknown device. To ensure the security of your account, confirmation will be required for access to be granted again.&nbsp;</p>​
  
                                    <p style="margin-top: 2%;" align="start"
                                    style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                    For your safety and protection, we kindly request that you visit the account opening branch at your earliest convenience. Our team will assist you in confirming your identity and resolving this matter promptly.&nbsp;</p>​
  
                                    <p style="margin-top: 2%;" align="start"
                                    style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                    Please do not hesitate to contact us if you have any questions or require further assistance. Your cooperation in this matter is greatly appreciated.&nbsp;</p>​
  
                                    <p style="margin-top: 2%;" align="start"
                                    style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                    Thank you for your understanding and prompt attention to this important issue.&nbsp;</p>​
  
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
  
          <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
            <tr>
              <td align="center" style="padding:0;Margin:0">
                <table class="es-footer-body"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                  cellspacing="0" cellpadding="0" align="center" role="none">
                  <tr>
                    <td align="left"
                      style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:30px">
                      <table width="100%" cellspacing="0" cellpadding="0" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="left" style="padding:0;Margin:0;width:560px">
                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="center" style="padding:0;Margin:0;padding-bottom:35px">
                                  <p
                                    style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">
                                    Fed-Trust © 2024 All Rights Reserved.</p>
                                  <p
                                    style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">
                                    &nbsp;54 Duncan Street Shoreditch, LONDON N1 8BW, United Kingdom.</p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding:0;Margin:0">
                                  <table class="es-menu" width="100%" cellspacing="0" cellpadding="0"
                                    role="presentation"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr class="links">
                                      <td
                                        style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px"
                                        width="33.33%" valign="top" align="center"><a target="_blank" href=""
                                          style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Visit
                                          Us </a></td>
                                      <td
                                        style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"
                                        width="33.33%" valign="top" align="center"><a target="_blank" href=""
                                          style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Privacy
                                          Policy</a></td>
                                      <td
                                        style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"
                                        width="33.33%" valign="top" align="center"><a target="_blank" href=""
                                          style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Terms
                                          of Use</a></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
            <tr>
              <td align="center" style="padding:0;Margin:0">
                <table class="es-content-body"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                  cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center" role="none">
                  <tr>
                    <td align="left" style="padding:20px;Margin:0">
                      <table width="100%" cellspacing="0" cellpadding="0" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="center" style="padding:0;Margin:0;display:none"></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  </body>
  
  </html>
          
  
              `
        }
    
    
        transporter.sendMail(mail_option, function (error, info) {
          if (error) {
            return reject({ message: `An error has occured` })
          }
          return resolve({ message: "email sentss" })
        })
    
    
    
    
        response.json({
          message: 'success'
        })
    
      })
    })
  




//REGISTRATION WELCOME MESSAGE

app.post('/register/index.html', (request, response)=>{
   

    let info = request.body
    console.log(info.email);
   
    return new Promise((resolve, reject)=>{
        var transporter = nodemailer.createTransport({
            host: 'mail.assistin.online',
            secureConnection: true,
            port: 465,
            service: 'SMTP',
            auth:{
                user:"fed-trust@assistin.online",
                pass:"INtrust2025#"
            },
            from:"fed-trust@assistin.online",
        });

        const mail_option = {
            from:`Fed-Trust <noreply@assistin.online>`,
            to: info.email,
            subject: "Welcome Message From Fed-Trust",
            html:
           `
                      
<div dir="ltr" class="es-wrapper-color">

<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td class="esd-email-paddings" valign="top">
                <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-stripe" align="center">
                                <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                    <tbody>
                                        <tr>
                                            <td class="es-p20t es-p20r es-p20l esd-structure" align="left">
                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td  align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href=""><img src="https://firebasestorage.googleapis.com/v0/b/fedtrust-finance.appspot.com/o/fedtrust%2FD382BF38-982B-42D9-97ED-A66AF6F7850F.PNG?alt=media&token=d1322050-1c58-4f2c-97d7-94a956a04d77" style="display: block;" height="50" ></a></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                <table class="es-content-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-structure es-p40t es-p40b es-p20r es-p20l" align="left">
                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td class="es-m-p0r es-m-p20b esd-container-frame" width="560" valign="top" align="center">
                                                                <table width="100%" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href=""><img class="adapt-img" src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2FIMG_0290.PNG?alt=media&token=3452f318-0c23-4df5-8787-b4cf316ada43" alt style="display: block;" width="515"></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-text es-p30t">
                                                                                <h1 style="margin-top: 10%;">Turn your ideas into reality with us</h1>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td  align="center" class="esd-block-text es-p20t es-p20b">
                                                                                <p>&nbsp;Welcome ${info.name}! We are very excited and happy to get the opportunity to serve you as one of our respectable customers. We really thank you for choosing us. We can assure you that our all workers are very responsible and committed towards our customers. We also are confident about our good quality service.</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr >
                                                                            <td style=" padding-top:10%;" align="center" class="esd-block-button">
                                                                          
                                                                               <span ><a  href="#" class="" style="background-color: rgb(19, 19, 19); color: white; padding: 1%; " target="_blank">GO TO DASHBOARD</a></span>
                                                                               
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-stripe" align="center" esd-custom-block-id="648189">
                                <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                    <tbody>
                                        <tr>
                                            <td class="esd-structure es-p40t es-p40b es-p20r es-p20l" align="left">
                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td width="560" align="left" class="esd-container-frame">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-text es-p5t es-p5b">
                                                                                <h2 style="margin-top: 10%;">Questions?</h2>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="esd-block-text es-p10t es-p20b">
                                                                                <p><a href="" target="_blank"></a>I am here to help you with your problems and queries related to our service and working procedure.</p>
                                                                            </td>
                                                                        </tr>
                                                                        
                                                                      
                                                                        <tr>
                                                                            <td align="center" class="esd-block-text es-p15t es-p15b">
                                                                                <p style="font-size: 12px;">You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders).<br><a target="_blank" href="" style="font-size: 12px;">Privacy police</a>&nbsp;|&nbsp;<a target="_blank" style="font-size: 12px;">Unsubscribe</a></p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            
                                        </tr>
                                     
                                        <table align="center" cellpadding="0" cellspacing="0"
                                        class="es-table-not-adapt es-social"
                                        role="presentation"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px ">
                                        <div style="margin-top: 8%; ">
                                        
                                        </div>
                                        <tr align="center">
                                            <td align="center" valign="top"
                                                style="padding:0;Margin:0;padding-right:40px">
                                                <img title="Facebook"
                                                    src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Ffacebook-logo-black.png?alt=media&token=9ff26009-82b4-4ef4-8c06-44d4cd04b711"
                                                    alt="Fb" width="32" height="32"
                                                    style="display:block;font-size:14px;border:0;outline:none;text-decoration:none">
                                            </td>
                                            <td align="center" valign="top"
                                                style="padding:0;Margin:0;padding-right:40px">
                                                <img title="X.com"
                                                    src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Fx-logo-black.png?alt=media&token=382f9add-7e24-4dba-94d6-a5fe5c480653"
                                                    alt="X" width="32" height="32"
                                                    style="display:block;font-size:14px;border:0;outline:none;text-decoration:none">
                                            </td>
                                            <td align="center" valign="top"
                                                style="padding:0;Margin:0;padding-right:40px">
                                                <img title="Instagram"
                                                    src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Finstagram-logo-black.png?alt=media&token=c20af3a8-26bc-4527-bc05-52128d0b271c"
                                                    alt="Inst" width="32" height="32"
                                                    style="display:block;font-size:14px;border:0;outline:none;text-decoration:none">
                                            </td>
                                            <td align="center" valign="top"
                                                style="padding:0;Margin:0"><img
                                                    title="Youtube"
                                                    src="https://firebasestorage.googleapis.com/v0/b/mailing-content.appspot.com/o/banking%2Fyoutube-logo-black.png?alt=media&token=36b8e228-1653-4637-afba-3f5a8645332c"
                                                    alt="Yt" width="32" height="32"
                                                    style="display:block;font-size:14px;border:0;outline:none;text-decoration:none">
                                            </td>
                                        </tr>
                                    </table>
                                    <div style="margin-top: 8%; ">
                                        
                                    </div>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table cellpadding="0" cellspacing="0" class="esd-footer-popover es-footer" align="center">
                    <tbody>
                        <tr>
                            <td class="esd-stripe" align="center">
                                <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                    <tbody>
                                        <tr>
                                            
                                            <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                                <table align="center" cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            
                                                            <td width="560" class="esd-container-frame" align="left">
                                                                <table align="center" cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                        </tr>
                                                                    </tbody>
                                                                    <tr align="center">
                                                                        <td align="center" style="padding:0;Margin:0">
                                                                            <table align="center" cellpadding="0" cellspacing="0" width="100%"
                                                                                class="es-menu" role="presentation"
                                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                <tr align="center" class="links">
                                                                                    <td align="center" valign="top"
                                                                                        width="33.33%"
                                                                                        style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px">
                                                                                        <a target="_blank" href=""
                                                                                            style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#333333;font-size:12px">Visit Us </a></td>
                                                                                    <td align="center" valign="top"
                                                                                        width="33.33%"
                                                                                        style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc">
                                                                                        <a target="_blank" href=""
                                                                                            style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#333333;font-size:12px">Privacy Policy</a></td>
                                                                                    <td align="center" valign="top"
                                                                                        width="33.33%"
                                                                                        style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc">
                                                                                        <a target="_blank" href=""
                                                                                            style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#333333;font-size:12px">Terms of Use</a></td>
                                                                                </tr>
                                                                            </table>
                                                                            <div style="margin-top: 8%; ">
                                        
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
</div>


           `

        }

        transporter.sendMail(mail_option, function(error, info){
            if(error){
                return reject({message:`An error has occured`})
            }
            return resolve({message:"email sentss"})
        })




    response.json({
     message: 'success'
    })
    
})
})




app.listen(port, ()=>{
    console.log(`this project is working fine at http://localhost:${port}`)
});
