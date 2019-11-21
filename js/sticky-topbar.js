!function(){
    var model={
        init:function(){  
            var { Query, User } = AV;
            AV.init({
              appId: "bo3HiyTYNDIePoQjP9XTWPzM-gzGzoHsz",
              appKey: "024wFdhqr0si8z01BwSTwG1v",
            })
        },
        fetch:function(){    
            var query = new AV.Query('X');
            return query.find() 
        },
        save: function(name){
            var Message=AV.Object.extend('X');
            var message=new Message();
            return message.save({  
                'name':name
            })
        }
}
    var view=View('#topNavBar')
     var controller={
        view:null,
        init: function(view){
            this.view=view
            this.bindEvents()
            // this.bindEvents.call(this)
        },
    bindEvents: function () {
    var view = this.view
    window.addEventListener('scroll', (x)=> {
            if (window.scrollY > 0) {
                this.active()
            } else {
                this.deactive()
            }
        })
    //箭头函数没有this
},
        active:function(){
            this.view.classList.add('sticky')
        },
        deactive:function(){
            this.view.classList.remove('sticky')
        }
     }
     controller.init(view)
     //controller.init.call(controller,view)
}.call()