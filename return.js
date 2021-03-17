let count = (function(){ //closers
    let count=0;
    return function(){
        return count++;
    }
})()

console.log(count())
console.log(count())



function domainUrl (domain){  //callback
    return function(url){
        return `https://${url}.${domain}`

    }
}
const domainCom = domainUrl(`com`)
console.log(domainCom(`google`))

// const handleClick = () => { /* */ }
// Document.element.addEventListener('click', handleClick)
// Document.element.removeEventListener('click', handleClick)


let a = 7; //promise. Usually ajax request to server
console.log(a)
let b = new Promise (function(resolve, reject){
    setTimeout(()=>{ //timeout, interval or not response from server
       resolve(a = 99);
    }, 2000)
});

b.then(function () {
    console.log(a)
});
console.log('---------------------')

async function one () { //async and await
    const res = await fetch('/test.php?d=1');
    return res.text();
        // .then(data => {
        //     return data.text()
        // })
        // .then(data => {
        //     console.log(data);
        // })
}

async function two () {
    const res = await fetch('/test.php?d=2');
    return res.text();
    //console.log(2);
}
async function three () {
    const res = await fetch('/test.php?d=3');
    return res.text();
   // console.log(3);
}

async function start() {
    let a = one();
    console.log(a)
    let b = two();
    console.log(b)
    let c = three();
    console.log(c);
}
start()
