# spaceinvaders
space invaders

This is a rewrite of David Kerr's old [space invaders javascript sample](https://www.codeproject.com/Articles/681130/Learn-JavaScript-Part-Space-Invaders) updated from his ES5 to ECMA2015 (ES6) class styles. I also tested implementing [parcel.js](https://parceljs.org/) the new no-config bundler to see about how to make ES6 work in older browsers.


## Getting Started

* install parcel for your bundler ```npm install -g parcel-bundler@1.8.1```. This is a simple no-config style bundler for javascript/css/html. We use an older version due to an issue with the latest that seems to [cause problems with constructors](https://github.com/parcel-bundler/parcel/issues/1453).
* install babel to allow parcel to also transpile the ES6 syntax back to ES5 so that Internet Explorer can still run the website.
* run parcel to start server and compile: ```parcel src/index.html```
* if you have debugger for chrome VS extension and you want to launch, hit f5.


## What happens

* You should see parcel build a bundled version of your code in the dist folder. This should run in all browsers including ie 11. 
* You should still be able to run the native ES6 code in the latest browsers without any bundling. I have live server extension for VSCode so just right click index.html and launch.

## Important notes

* If you want to build, you can run ```parcel build src/index.html```*



*Note, having trouble with links working in build. Workaround at moment is to remove starting slash.

