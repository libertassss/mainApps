// function throtter(fn, time = 300, isFirst = false) {
//     let timer = null;
//     let start = isFirst;
//     return function () {
//         if(start){
//             start = false;
//             fn()
//         }else{
//             if(timer){
//                 return;
//             }
//             timer = setTimeout(() => {
//                 fn();
//                 clearTimeout(timer);
//                 timer = null
//             }, time)
//         }
//     }
// }


// function debounce (fn, time = 300, isFirst = false) {
//     let start = isFirst;
//     let timer = null;
//     return function () {
//         if(start){
//             fn();
//             start = false;
//         }else{
//             if(timer){
//                 clearTimeout(timer);
//                 timer = null;
//                 return;
//             }
//             timer =setTimeout(() => {
//                 fn();
//                 clearTimeout(timer);
//                 timer = null;
//             }, time)
//         }
//     }
// }

// export {
//     debounce
// }

//setInterval(debounce(() => {console.log(1)}, 2000, true), (1000));

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1) 
    }, 1000)
}).then((res) => {return res}).then((data) => console.log('data', data))
