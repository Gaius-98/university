

const mysql = require('mysql');
const connection = mysql.createPool({
  host: '1.117.70.174',
  user: 'root',
  password: 'wang971217',
  database: 'ev'
});
const query = (sql) => {
  return new Promise((resolve,reject)=>{
    connection.query(sql,(err, results) => {
      if (err) {
        reject({
          code:10000,
          data:err,
          msg:err
        })
      }
      resolve({
        code:0,
        data:results,
        msg:'正常获取数据'
      })
    })
  })
}
module.exports = query