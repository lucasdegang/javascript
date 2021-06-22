// The callback can be called as "next"
function main (id, callback){
    console.log(`Id number ${id}`);
    callback(); // this is required
}

function MessageCallback(msg){
    console.log(`MessageCallback function [${msg}]`);
}

// callback on function()
main(1, function(){
    console.log("Wowww This is a callback!!");
});

// callback on MessageCallback()
main(2, function(){
    MessageCallback("This is another callback!!");
});