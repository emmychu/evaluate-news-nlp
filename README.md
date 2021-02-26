# Evaluate News NLP

## Installation: Please use the commands to install necessary plugins and loaders:
* `npm install`
* `npm i node-fetch`
* `npm install --save-dev jest`
* `npm install workbox-webpack-plugin --save-dev`

## Commands for Terminal
* `npm run test` : Will run written tests using jest to test various js functions
* `npm run build-prod`: Will run production build of site
* `npm run build-dev`: Will run developer build of site
* `npm run start`: Will run local server on port 8081

## Important Notes
The application will accept either a URL or Text that must be indicated with the radio buttons before submission. The results of the interpretation will be displayed below the form. Regex is also used to interpret whether or not a URL is valid.

## Credits to:
* mock fetch borrowed from [here](https://www.leighhalliday.com/mock-fetch-jest)
* preventDefault error solution borrowed from [here](https://knowledge.udacity.com/questions/325789)
* Tutorial for regex url validation used from [here](https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/)
