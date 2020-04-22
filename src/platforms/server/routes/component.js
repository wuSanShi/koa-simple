import { Components } from '@server/controller';
export default (schemaMap)=>({
    prefix:   'component',
    routers: {
        'GET /':            { schema: { page: schemaMap.page, limit: schemaMap.limit }, action: Components.list },
        'GET /:id':         { schema: { page: schemaMap.page, limit: schemaMap.limit }, action: Components.search },
        'POST /add':        { schema: { name: schemaMap.name, action: Components.add }},
        'Delete /:id':      { schema: { name: schemaMap.id }, action: Components.add },
    }
})
