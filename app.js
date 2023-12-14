const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rlagus1212!',
  database: 'KIN',
  connectionLimit: 5,
});

pool.getConnection()
  .then(connection => {
    console.log('Connected to MariaDB');
    connection.release();  // 연결을 해제합니다.
  })
  .catch(error => console.error('Error connecting to MariaDB:', error));
