const mysql = require("mysql2/promise");

async function testConnection() {
    const connection = await mysql.createConnection({
        host: "192.168.1.1", // host ip adress
        user: "username", // username
        password: "database_password", // databse password
        database: "database_name" // database name
    });

    console.log("✅ MySQL connection is Succesfull!");

    const [rows] = await connection.query("SELECT NOW() AS time");
    console.log("⏳ Server time:", rows[0].time);

    await connection.end();
}

testConnection().catch(err => {
    console.error("❌ Connection Error:");
    console.error(err.message);
});
