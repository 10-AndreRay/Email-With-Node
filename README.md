# Enviando email com Node
Código capaz de enviar e-mails através do Nodejs usando a bilbioteca nodemailer e googleapis.

* npm install dotenv
* npm install nodemailer
* npm install googleapis

### É importante criar um arquivo .env na raiz do projeto com as variáveis e passar o path no config do dotenv.
* ex: criar arquivo info.env e colocar no index.js: require("dotenv").config({path: "info.env")

### Também é importante pegar todas as credenciais da conta do google
* [API do google](https://console.cloud.google.com)
* [Tutorial da configuração](https://www.youtube.com/watch?v=-rcRf7yswfM)
