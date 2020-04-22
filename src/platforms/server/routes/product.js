import { Product } from '@server/controller';
export default (schemaMap)=>({
    prefix:   'product',
    routers: {
        'GET /':            { schema: { page: schemaMap.page, limit:  schemaMap.limit, keyWord: schemaMap.keyWord}, action: Product.list },
        'POST /add':        { schema: { name: schemaMap.name}, action: Product.add },
        'POST /deletes':    { schema: { id: schemaMap.ids }, action: Product.del },
        'Delete /:id':      { schema: { id: schemaMap.id }, action: Product.del },
    }
})
