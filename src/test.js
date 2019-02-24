function foo(){
    let local = 1
    function bar(){
        local++
        console.log(local)
    }
    return bar
}

let foofun =foo();
console.log(foofun())

function foo(){
    let local = 1
    return function bar(){
        local++
        console.log(local)
    }
}
let foofun =foo();
console.log(foofun())


function foo(){
    let local = 1
    return function(){
        local++
        console.log(local)
    }
}
let foofun =foo();
console.log(foofun())


(function(){}(
    console.log('函数自执行1')
))

(function(){
    console.log('函数自执行2')
})()

!function(){
    console.log('函数自执行3')
}()

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
      console.log(i);
    };
}
a[6]();