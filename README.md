# Agile React Sample

This is an example express app with a React front end.

It is based on this tutorial: https://daveceddia.com/deploy-react-express-app-heroku/ 
and uses React Slingshot as a base. See the client README for more info on React Slingshot.

## Should I use this?

Do you like javascript, React and Redux? Do you want a pre-configured sample page that lists out
the next day's prices from the Agile API? Then you might find this helpful.
It's a resource to help you get up and hacking quickly, instead of
having to set up a whole project from scratch.

If you've never worked with JavaScript, React or Redux, then this might be useful example, or
maybe utterly confusing :)

Basically you don't have to use this, but you can if it's helpful.

## Getting started

### TLDR;

#### Show me the app

From the base directory:

```shell
$ npm install
$ cd client
$ npm install
$ npm build
$ cd ..
$ npm start
```

App will be available on http://localhost:5000

#### I want to edit the front end

Follow the steps in the section above first (so you have the express app running on http://localhost:5000)
Then, from the base directory:

```shell
$ cd client
$ npm start
```
The dev front end will be available on http://localhost:3000

### Talk me through this a bit

First install your node modules in the base directory and the client directory

```shell
$ npm install
$ cd client
$ npm install
```

Then you can run these apps as one entity, with the express app serving the compiled app (which lives in `client/dist`)

Do this by runnning `npm start` in the base directory

You can also run the front end with webpack-dev setup, and point it at the express app.
To do this, run `npm start` in the base directory and then `npm start` in the client directory.
You will then have the express app available at `localhost:5000` (with the example api call `localhost:5000/agile-prices`)
and the dev front end available at `localhost:3000`

### Happy hacking!
