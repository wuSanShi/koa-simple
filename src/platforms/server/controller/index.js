"use strict";

export default async (ctx, next)=>{
    res.render('index.html');
}
export const Product =  {
    list: async (ctx, next, param) => { ctx.response.body = { message: 'Product/list' , param: param} },
    search: async (ctx, next, param) => { ctx.response.body = { message: 'Product/search' , param: param} },
    upload: async (ctx, next, param) => { ctx.response.body = { message: 'Product/upload', param: param } },
    add:  async (ctx, next, param) => { ctx.response.body = { message: 'Product/add', param: param } },
    del:  async (ctx, next, param) => { ctx.response.body = { message: 'Product/del', param: param } },
}
export const LayOut = {
    list: async (ctx, next, param) => { ctx.response.body = { message: 'LayOut/list', param: param } },
    search: async (ctx, next, param) => { ctx.response.body = { message: 'Product/search' , param: param} },
    upload: async (ctx, next, param) => { ctx.response.body = { message: 'LayOut/upload', param: param } },
    add:  async (ctx, next, param) => { ctx.response.body = { message: 'LayOut/add', param: param } },
    del:  async (ctx, next, param) => { ctx.response.body = { message: 'LayOut/del', param: param } },
}
export const Components =  {
    list: async (ctx, next, param) => { ctx.response.body = { message: 'Components/list', param: param } },
    search: async (ctx, next, param) => { ctx.response.body = { message: 'Product/search' , param: param} },
    upload: async (ctx, next, param) => { ctx.response.body = { message: 'Components/upload', param: param } },
    add:  async (ctx, next, param) => { ctx.response.body = { message: 'Components/add', param: param } },
    del:  async (ctx, next, param) => { ctx.response.body = { message: 'Components/del', param: param } },
}