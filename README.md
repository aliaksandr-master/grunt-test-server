[![npm](http://img.shields.io/npm/v/grunt-test-server.svg?style=flat-square)](https://www.npmjs.com/package/grunt-test-server)
![npm](http://img.shields.io/npm/l/grunt-test-server.svg?style=flat-square)
[![Dependency Status](https://david-dm.org/aliaksandr-pasynkau/grunt-test-server.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/grunt-test-server)
[![devDependency Status](https://david-dm.org/aliaksandr-pasynkau/grunt-test-server/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/grunt-test-server#info=devDependencies)
[![Build Status](https://travis-ci.org/aliaksandr-pasynkau/grunt-test-server.svg?branch=master&style=flat-square)](https://travis-ci.org/aliaksandr-pasynkau/grunt-test-server)
[![Coverage Status](https://img.shields.io/coveralls/aliaksandr-pasynkau/grunt-test-server.svg?style=flat-square)](https://coveralls.io/r/aliaksandr-pasynkau/grunt-test-server?branch=master)

# grunt-test-server
Powerful grunt task =)

## Getting started 

To install `grunt-test-server` from npm, run:
```bash
npm install -g grunt-test-server --save
```

Finally, use the library:
```js

{
   testServerRun: {
      someServer: {
         options: {
            port: 3000,
            serve: function (app) {
               // app - empty express application

               app.get('/hello/world', function (req, res) {
                  req.send({ "hello": "world" });
               });
            }
         }
      }
   },
   
   testServerClose: {
      someServer: {
         options: {
             port: 3000 // need for removing test server
         }
      }
   },
   
   testServerCloseAll: {} // for removing all active test servers
}

// do something helpful
```

### Enjoy!


## Support
If you have any problems, you cached a bug, or you have any suggestion - please [find an existing issue or create new](https://github.com/aliaksandr-pasynkau/grunt-test-server/issues)


## Contributing
If you want to develop this library do not be shy - Do that! [How to contribute open-source projects](https://guides.github.com/activities/contributing-to-open-source/)

### Run tests grunt-test-server
```shell
$ npm test
```
