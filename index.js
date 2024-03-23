const { returns } = require("chai-spies")

function receivesAFunction(backCall){
    backCall()
}

function returnsANamedFunction(){
    var fn
    function before(){
        return fn = returnsANamedFunction
    }
    return before()
}

function returnsAnAnonymousFunction(fnu){
    
    return function(){
        return fnu = returnsAnAnonymousFunction
    }
    
}
returnsAnAnonymousFunction()

// function returnsAnAnonymousFunction(){
//     var fnu
//     function before(){
//         return fnu = returnsAnAnonymousFunction
//     }
//     return before()
// }


// returnsAnAnonymousFunction(()=>{
//     before(()=>{
//         return returnsAnAnonymousFunction
//     })
//     return before
// })

// let returnsAnAnonymousFunction = function(){
//     var fnu
//     let before = function(){
//         return fnu = returnsAnAnonymousFunction
//     }
//     return before
// }
// returnsAnAnonymousFunction()
