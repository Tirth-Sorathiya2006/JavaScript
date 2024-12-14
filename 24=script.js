//IIFE (Imidiately Invoked function expression)

//IIFE are use for run the function directly. In case to reduce the global contaxt polution we are using the IIFE.
//IIFE is need the semicolan(;) at the end of it when more than one IIFE are need to exicute.

(function chai() {
    //Named IIFE
    console.log(`DB CONNECTED`);
})();

(() => {
    //
    console.log(`DB TWO CONNECTED`);
})();