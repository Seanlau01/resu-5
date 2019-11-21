window.Model=function(options){
   let resourceName=options.resourceName
   return {
       init:function(){
        var { Query, User } = AV;
        AV.init({
          appId: "bo3HiyTYNDIePoQjP9XTWPzM-gzGzoHsz",
          appKey: "024wFdhqr0si8z01BwSTwG1v",
        })
       },
       fetch:function(){
        var query = new AV.Query(resourceName);
        return query.find() //Promise对象
       },
       save:function(object){
        var X=AV.Object.extend(resourceName);
        var x=new X();
        return x.save(object)
       }
   }
}