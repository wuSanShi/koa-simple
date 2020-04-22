class EventDispatcher {
    constructor(){
        this.listenerMap = {};
        this.addEventListener = function(type, listener, status) {
            if(typeof listener !== 'function') return 
            [].concat(type).forEach(key=>{
                if(typeof (key)!='string') return 
                let listenerMap = this.listenerMap[key];
                if (!listenerMap) listenerMap = this.listenerMap[key] = [];
                switch(status){
                    case 'once':
                    this.listenerMap[key] = [listener]
                    break;
                    default:
                    listenerMap.push(listener);
                }
            })
        };
        this.removeEventListener = function(type, listener) {
            let listenerMap = this.listenerMap[type];
            if (!listenerMap || !listenerMap.length) return;
            for (let i in listenerMap) {
                if (listenerMap[i] === listener) {
                    listenerMap.splice(i, 1);
                    if (!listenerMap.length) delete this.listenerMap[type];
                    break;
                }
            }
        };
        this.clearEventListener = function(type) {
            if(type) {
                delete this.listenerMap[type];
            }else {
                this.listenerMap = {};
            }
        };
        this.onceEventListener = function(type, listener){
            this.addEventListener(type, listener, 'once')
        }
        this.dispatchEvent = function(type,data,param) {
            let listeners = this.listenerMap[type];
            if (!listeners || !listeners.length) return;
            let event = {
                type:   type,
                data:   typeof data === 'function'? data(): data,
                param:  param
            }
            return listeners.map(item=> item(event))
        };
        this.EventList = function(type){
            return this.listenerMap[type] || []
        };
    }
}
export default EventDispatcher
