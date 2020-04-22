
class MiddleWare {
  constructor(){
      const middlewares = [];
      this.use = function(...args){ 
          [].concat(args).forEach(function(fn){
            if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
            middlewares.push(fn);
          })
          return this;
      };
      this.handle = function(context, next){
          this.compose(middlewares)(context, next)
      };
      this.compose = function(middleware){
        return function (context, next) {
              let index = -1
              return dispatch(0)
              function dispatch (i) {
                if (i <= index) return Promise.reject(new Error('next() called multiple times'))
                index = i
                let fn = middleware[i]
                if (i === middleware.length) fn = next
                if (!fn) return Promise.resolve()
                try {
                  return Promise.resolve(fn(context, function next (){
                    return dispatch(i + 1)
                  }))
                } catch (err) {
                  return Promise.reject(err)
                }
              }
            }
      };        
  }
}
export default MiddleWare

