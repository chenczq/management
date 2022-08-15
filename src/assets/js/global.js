var init = {
    hostFun(){
     
         var host = "http://192.168.1.15:8080/mycrm/LargeDataShowSlt";//业务正式地址
       
        // Url = {
        //   hosted: 'http://221.178.97.38:9015/aqsq-app',//登录正式
        //   host: host + '/SecurityShaqu',//业务正式地址
        //   hosts: "http://221.178.97.41:8015/SecurityShaqu",
        //   jd_url: 'http://yzqyjaq.cq-ycy.com',//查询街道详情
        // }
      
      return {host};
      
    }
  } 

  let obj = init.hostFun()
  export default {
    host:obj.host,
    Url:obj.Url,
 
    // 
    init
  }