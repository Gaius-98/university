import axios from 'axios'
interface listParams {
  name:string,
  lowestScoreLine:number|string
}
interface unParams extends listParams{
  provinceId:number|string
}
export default {
  getProvinceList(params:listParams){
    return axios.get('/api/',{
      params:{
        ...params
      }
    })
  },
  getUniversityListByProvince(params:unParams){
    return axios.get('/api/getUniversityListByProvince',{
      params:{
        ...params
      }
    })
  },
  getSubjectListByName(params:listParams){
    return axios.get('/api/getSubjectListByName',{
      params:{
        ...params
      }
    })
  }
}