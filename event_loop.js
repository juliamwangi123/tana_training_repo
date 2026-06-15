function greet() {
  console.log("Hey there");       
}

function farewell() {
  console.log("Bye bye");           
  setTimeout(function() {
    console.log("See you later");  
  }, 1000);
}

greet();
setTimeout(function() {
  console.log("I am async");      
}, 0);
farewell();