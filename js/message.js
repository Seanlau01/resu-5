!function(){
var { Query, User } = AV;
AV.init({
  appId: "bo3HiyTYNDIePoQjP9XTWPzM-gzGzoHsz",
  appKey: "024wFdhqr0si8z01BwSTwG1v",
});
var query = new AV.Query('Message');
query.find().then(function (messages) {
    let array=messages.map((item)=>item.attributes)
   array.forEach((item)=>{
       let li=document.createElement('li')
       li.innerText=`${item.name}: ${item.content}`
       let messageList=document.querySelector('#messageList')
       messageList.appendChild(li)
   })
}
)
let myForm=document.querySelector('#postMessage')
myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let name=myForm.querySelector('input[name=name]').value
    let content=myForm.querySelector('input[name=content]').value
    var Message=AV.Object.extend('Message');
    var message=new Message();
    message.save({
        'name':name,
        'content':content
    }).then(function(object){
        let li=document.createElement('li')
        li.innerText=`${object.attributes.name}: ${object.attributes.content}`
        let messageList=document.querySelector('#messageList')
        messageList.appendChild(li)
        let content=myForm.querySelector('input[name=content]').value=''
        console.log(object)
    })
})
}.call()
//这里save和saveMessage没有打印出数字
// !function(){
//     var model={
//         //获取数据
//         init:function(){
//             console.log(1)
//             var { Query, User } = AV;
//             AV.init({
//               appId: "bo3HiyTYNDIePoQjP9XTWPzM-gzGzoHsz",
//               appKey: "024wFdhqr0si8z01BwSTwG1v",
//             })
//         },
//         fetch:function(){
//             console.log(2)
//             var query = new AV.Query('Message');
//             return query.find() //Promise对象
//         },
       
       
//         save: function(name,content){
//             console.log(3)
//             var Message=AV.Object.extend('Message');
//             var message=new Message();
//             return message.save({  //Promise对象
//                 'name':name,
//                 'content':content
//             })
//         }
// }


//     var view=document.querySelector('section.message')

// console.log(4)
//     var controller={
//         view:null,
//         model:null,
//         messageList:null,
//         init: function(view,model){
//             console.log(5)
//             this.view=view
//             this.model=model
//             this.messageList=view.querySelector('#messageList')
//             this.form=view.querySelector('form')
//             this.model.init()
//             this.loadMessages()
//             this.bindEvents()
//         },
//         loadMessages:function(){
//             console.log(6)
//             this.model.fetch().then(
//             (messages)=>{
//             let array=messages.map((item)=>item.attributes)
//             array.forEach((item)=>{
//                 let li=document.createElement('li')
//                 li.innerText=`${item.name}: ${item.content}`
//                 this.messageList.appendChild(li)
//                 })
//              } 
//         )
//      },
//      bindEvents:function(){
//          console.log(7)
//         this.form.addEventListener('submit',function(e){
//             e.preventDefault()
//             this.saveMessage()
//         }) 
//      },
//     saveMessage:function(){
//         let myForm=this.form
        
//         let name=myForm.querySelector('input[name=name]').value
//         let content=myForm.querySelector('input[name=content]').value
//         this.model.save(name,content).then(function(object){
//             let li=document.createElement('li')
//             li.innerText=`${object.attributes.name}: ${object.attributes.content}`
//             let messageList=document.querySelector('#messageList')
//             messageList.appendChild(li)
//             myForm.querySelector('input[name=content]').value=''
//             console.log(object)
//         })
//     }
//  }
//   controller.init(view,model) 
//        console.log(9)
// }.call()

