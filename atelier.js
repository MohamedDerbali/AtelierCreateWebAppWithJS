const http = require("http"); //instance dans le RAM
const url = require("url");
const querystring = require("querystring");
const server = http.createServer((req, res) => {
  //instance local
  //npm i -g nodemon => relancer serveur à chaque enregistrement
  const appPath = url.parse(req.url);
  const queries = querystring.parse(appPath.query);
  res.writeHead(200, { "content-type": "text/html" }); //OK
  if (appPath.pathname === "/users") {
    if (queries.id && queries["login"]) {
      res.end(renderUsersPage());
    } else {
      res.end(`<h1>you are not authorized to do this!</h1>`);
    }
  } else if (appPath.pathname === "/contacts") {
    res.end(renderContactPage());
  } else {
    res.end(`<h1>404 NOT FOUND</h1>`);
  }
});
const renderContactPage = () => {
  return `<html>
    <head>
       <title>contact</title>
    </head>
    <body>
        <p>contact page</p>
    </body>
    </html>`;
};
const renderUsersPage = () => {
  return `<html>
    <head>
        <title>4twin7</title>
        <style>
            #text {
                color: red;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1 id="text">Hello la classe</h1>
        <table border='1'>
        <thead>
            <th>id</th>
            <th>nom</th>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>ali</td>
            </tr>
            <tr>
                <td>2</td>
                <td>yesser</td>
            </tr>
        <tbody>
        </table>
    <body>
</html>`;
};
//ecouter le serveur sur le port 5000
server.listen(5000, () => {
  console.log("app is running on port 5000");
});
//users OK -> que si j'ai l'access {id et login}
//contacts -> interface contacts OK
