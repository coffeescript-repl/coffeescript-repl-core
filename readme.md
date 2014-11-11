# coffeescript-repl-core

core script for CoffeeScript REPL.

## Usage

simple repl using prompt.

```js
<script src="coffeescript.js"></script>
<script>
$(function(){
    var repl = new CoffeeScriptREPL();
    var input;
    while(input = prompt(repl.log+"\n"+repl.buffer, repl.defaultInput)){
        repl.terminal(input);
    }
});
</script>
```

```
.help  show repl options
.[n]   revert last nth input
.hist  view input history
.clear clear log

c[space][enter]
cons[space][enter]
console.[space][enter]
console.lo[space][enter]
       autosuggestion

log(str)   alt console.log()
clear()    alt console.clear()
dir(obj [, depth])
           alt console.dir()
type(obj)  alt typeof()
load(url)  load js file
$$[n]         last nth result variable
```


## for bookmarklet

Simple CoffeeScript REPL Bookmarklet for Safari on iOS

### Install

```js
javascript:(function(d,u,x,c,a){function a(a,b,c){c=d.createElement("script");c.src=a;c.onload=b;d.body.appendChild(c)}a(u,function(){a(c,function(){x=new CoffeeScriptREPL();while(c=prompt(x.log+"\n"+x.buffer,x.defaultInput))x.terminal(c)})})}(document,"https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.7.1/coffee-script.min.js",null,"https://dl.dropboxusercontent.com/u/265158/repl.js"))
```
