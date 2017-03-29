# Searchthe

Small utility to searches target files recursively to find the desired string.

``` bash
npm install -g searchthe
//example
searchthe hello from js # search "hello" string in all js files under current path
searchthe world from all # search "world" string in every files under current path
```

It must be `search xx from yy` formation and the command above searches target files recursively to find the desired string, output the source file and the text which the string occurs in to stdout!
