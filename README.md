# README
A small weather app written for node.js as part of the Udemy course _»The Complete Node.js Developer Course (2nd Edition)«_.

## Installation
1. [Click here](https://darksky.net/dev "Dark Sky API") and sign up for a free account.
2. After copy the Dark Sky API secrets to the _secrets-dummy.js_ file.
3. Rename _secrets-dummy.js_ to _secrets.js_ to get the app working properly.
4. If needed you can adapt the request url within 'weather.js' file according the [documentation](https://darksky.net/dev/docs#/dev/docs#api-request-types "API Request Types") to fit your needs.
5. Now you can run either 'app.js' or 'app-promise.js'. The difference is that app.js uses callback functions to do the requests and parse the error messages, and app-promise.js is using promises along with 'axios' module.

## CLI Commands
Just change 'app.js' with 'app-promise.js' within the subsequent requests to switch between both approaches.

### Search for an address
*Request*
```
node app.js -a '1301 lombard street'
```
or
```
node app.js -address '1301 lombard street'
```

*Response*
```
1301 Lombard St, Philadelphia, PA 19147, USA
It's currently 32.67°C. It feels like 32.67°C.
```

### Search for a zip code
*Request*
```
node app.js -a 19147
```
or
```
node app.js -address 19147
```

*Response*
```
Philadelphia, PA 19147, USA
It's currently 32.91°C. It feels like 32.91°C.
```

### Search for a city
*Request*
```
node app.js -a Philadelphia
```
or
```
node app.js -address Philadelphia
```

*Response*
```
Philadelphia, PA, USA
It's currently 32.67°C. It feels like 32.67°C.
```
