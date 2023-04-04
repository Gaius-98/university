var express = require('express');
var router = express.Router();
var co = require('../utils/connection')
/* GET home page. */
/**
 * 根据关键词搜索省市
 */
router.get('/', async function(req, res, next) {
  const { name,lowestScoreLine } = req.query
  const sql = `select province,provinceId from my_university where name like'%${name}%' AND IFNULL(lowestScoreLine,0) <${lowestScoreLine || 750 } GROUP BY province`
  const data = await co(sql)
  res.send(data);
});
/**
 * 根据关键词搜索符合条件的学校
 */
router.get('/getUniversityListByProvince', async function(req, res, next) {
  const { name,lowestScoreLine,provinceId} = req.query
  const sql = `select id,name,province,provinceId from my_university where  name like'%${name}%' AND IFNULL(lowestScoreLine,0) < ${lowestScoreLine || 750} AND provinceId = ${provinceId} GROUP BY name `
  const data = await co(sql)
  res.send(data);
})
/**
 * 根据关键词搜索符合条件的学校专业
 */
router.get('/getSubjectListByName', async function(req, res, next) {
  const { name,lowestScoreLine } = req.query
  const sql = `select * from my_university where  name = '${name}' AND IFNULL(lowestScoreLine,0)<${lowestScoreLine || 750}`
  const data = await co(sql)
  res.send(data);
})
module.exports = router;
