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

// var TestObject = AV.Object.extend('Sean');
// var testObject = new TestObject();
// testObject.set('words', 'Hello world!');
// testObject.save().then(function (testObject) {
//   alert('留言成功')
// })
