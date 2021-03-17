function bind (context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson () {
        console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}


const person1 = {name: 'Roman', age: 35, job: 'Frontend'}
const person2 = {name: 'Tania', age: 25, job: 'Designer'}

bind(person1, logPerson)()
bind(person2, logPerson)()

Document.getElementById('p').innerHTML = 'aaa'

//евент луп
//замикання
