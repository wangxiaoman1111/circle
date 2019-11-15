'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result=await ctx.service.news.index()
    if(result){
      ctx.body = {
        code:1,
        result
      };
    }else{
      ctx.body={
        code:0
        
      }
    }
   
  }

  async login() {
    const { ctx } = this;
    const result=await ctx.service.news.login()
    if(result){
      ctx.body = {
        code:1,
        result
      };
    }else{
      ctx.body={
        code:0
        
      }
    }
   
  }

  async register() {
    const { ctx ,service} = this;
    let {username,password}=ctx.query
    const result=await service.news.register(username,password)
    if(result){
      ctx.body = {
        code:1,
        result
      };
    }else{
      ctx.body={
        code:0  
      }
    } 
  }


  async update(){
    const {ctx} = this
    let {id,name}=ctx.query
    let res = await ctx.service.news.update(id,name)
    if(res){
      ctx.body ={
            code:1,
            res
       }
    }else{
      ctx.body={
            code:0
      }
    }
    // if(res.affectedRows==1){
    //   let result = await ctx.service.news.Sel(id)
    //   ctx.body ={
    //     result
    //   }
    // }else{
    //   ctx.body={
    //     code:0
    //   }
    // }
  }

  async Del(){
    const {ctx} = this
    let {id}=ctx.query
    let res = await this.ctx.service.news.Del(id)
    if(res){
      ctx.body={
        code:1,
        res
      }
    }else{
      ctx.body={
        code:0
      }
    }
    // if(res.affectedRows==1){
    //   let result = await this.ctx.service.news.home()
    //   ctx.body ={
    //     result
    //   }
    // }
  }
}

module.exports = HomeController;
