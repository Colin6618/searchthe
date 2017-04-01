# Searchthe

> Small utility to searches target files recursively to find the desired string.


## Installation

``` bash
npm install -g searchthe
```

## searchthe

`npm <string> from <ext>`

```


// search "hello" string in js files under current path, u can specify css or md ... any extension name.
searchthe hello from js 

// search "world" string in all files under current path
searchthe world from all 

```

It must be `search xx from yy` formation and the command above searches target files recursively to find the desired string, output the source file and the text which the string occurs in to stdout!


## License

  MIT
