import Koa from 'koa';
import { CorseAction, ErrorAction, HeaderAction, LogsAction}  from './middleWares';
import convert from 'koa-convert';
import json from 'koa-json';
import Bodyparser from 'koa-bodyparser';

import Routers from './middleWares/routers';

const app = new Koa()
app.use(convert(Bodyparser()))
app.use(convert(json()))
// app.use(CorseAction());
app.use(ErrorAction());
app.use(ErrorAction());
app.use(HeaderAction());


Routers.forEach(route=>{
    if(route){
        app.use(route.routes())
        app.use(route.allowedMethods());
    }
})
// app.use(LogsAction());
app.on('error', (err, ctx) => {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
        message: err.message
    };
});
app.listen(8080, () => {
    console.log('This server is running at http://localhost:' + 8080)
})
