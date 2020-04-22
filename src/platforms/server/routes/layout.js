import {LayOut} from '@server/controller';
import Mock from 'mockjs';
export default (schemaMap)=>{
    return {
        prefix:   'component',
        routers: {
            'GET /':            { schema: { page: schemaMap.page, limit:  schemaMap.limit, keyWord: schemaMap.keyWord}, action: LayOut.list },
            'POST /add':        { schema: { name: schemaMap.name}, action: LayOut.add },
            'POST /deletes':    { schema: { id: schemaMap.ids }, action: LayOut.del },
            'Delete /:id':      { schema: { id: schemaMap.id }, action: LayOut.del },
        }
    }
}
