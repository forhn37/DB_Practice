const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'your_database_username',
  password: 'your_database_password',
  database: 'KIN',
  connectionLimit: 5,
});

pool.getConnection()
  .then(connection => {
    console.log('Connected to MariaDB');
    connection.release();  // 연결을 해제합니다.
  })
  .catch(error => console.error('Error connecting to MariaDB:', error));

  pool.getConnection()
  .then(connection => {
    console.log('Connected to MariaDB');
    // 데이터베이스 쿼리 예시
    connection.query('SELECT * FROM your_table_name')
      .then(results => console.log('Query results:', results))
      .catch(error => console.error('Error executing query:', error))
      .finally(() => connection.release());
  })
  .catch(error => console.error('Error connecting to MariaDB:', error));
