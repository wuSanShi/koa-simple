import { Components } from '@server/controller';
import Mock from 'mockjs';
const mockMap = {
    'abc': ()=>Mock.mock({
        'list|1-10': [{
            'id|+1': 1,
            'email': '@EMAIL'
        }]
    })
};
export default (schemaMap)=>({
    prefix:   '/jobs',
    routers: {
        'GET /:id':        { schema: {}, action: Components.list, proxy: '/api/v1/resourceGroup/{groupId}/jobs', mock: mockMap.abc},
    }
})
