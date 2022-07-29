const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config({ path: "info.env"});

//importation of variables
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;
const refresh_token = process.env.REFRESH_TOKEN;
const email = process.env.EMAIL;
const email_target = process.env.EMAIL_TARGET;

//Configuration of OAuth2
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);
oAuth2Client.setCredentials({ refresh_token: refresh_token });

//function
async function sendMail(){
    try{
        //used in the variable <infoTranport>
        const access_token = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: email,
                clientId: client_id,
                clientSecret: client_secret,
                refreshToken: refresh_token,
                accessToken: access_token
            }
        });

        const result = await transport.sendMail({
            from: `MeuNome <${email}>`,
            to: email_target,
            subject: "Título do Email",
            text: "Enviando email com NodeJS usando googleapis e nodemailer :o"
        });

        return result;

    } catch(error) {
        return error;
    }
};

sendMail()
    .then(result => console.log("Email enviado...", result))
    .catch(error => {console.log("Email não enviado...", error.message)})