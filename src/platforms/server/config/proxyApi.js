const API = {
    auditLog: {
        'id': { url: '/api/v1/auditlogs/{id}', method: 'get' },
        'logs': { url: '/api/v1/auditlogs', method: 'get', useCache: false },
        'create': { url: '/api/v1/auditlogs/create', method: 'post' },
        'modules': { url: '/api/v1/auditlogs/getModuleNames', method: 'get', useCache: true },
    },
    email: {
        'verifyToken': { url: '/api/v1/email/verifyToken', method: 'post' },
        'sendToken': { url: '/api/v1/email/sendToken', method: 'post' },
    },
};
export default API;