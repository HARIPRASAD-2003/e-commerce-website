const mysql = require('mysql2');
const fs = require('fs');

var config =
{
    host: 'your_server_name.mysql.database.azure.com',
    user: 'your_admin_name',
    password: 'your_admin_password',
    database: 'quickstartdb',
    port: 3306,
    ssl: {ca: fs.readFileSync("your_path_to_ca_cert_file_DigiCertGlobalRootCA.crt.pem")}
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) {
    if (err) {
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
        console.log("Connection established.");
        // queryDatabase();
    }
});

export default conn;
