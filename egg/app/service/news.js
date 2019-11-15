const Service=require('egg').Service

class NewsService extends Service{
    async index(){
        let {ctx,app}=this
      const result=  await app.mysql.select("circle")
      return result
    }

    async login(){
        let {ctx,app}=this
      const result=  await app.mysql.select("login")
      return result
    }


    async register(username,password){
        let {app}=this  
      const result=  await app.mysql.insert("login",{username,password})
      return result
    }
    async Sel(id){
        let result = await this.app.mysql.get("circle",{id})
        return result
      } 
      
    async update(id,name){
        let result = await this.app.mysql.update("circle",{id,name})
        return result
      }
    async Del(id){ 
    let result = await this.app.mysql.delete("circle",{id})
    return result
    }
}
module.exports=NewsService