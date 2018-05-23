# Agile React Sample

This is an example [Express](https://expressjs.com/) application with a React front end.

The Express app is a backend which can use your API key to make authenticated calls and
expose the data on api endpoint which can then be used by the React front end.

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

- Install [nodejs](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/en/docs/install)

#### Show me the app

From the base directory:

```shell
$ yarn
$ yarn build
$ yarn start
```

App will be available on http://localhost:5000.

#### I want to edit the front end

Follow the steps in the section above first (so you have the express app running on http://localhost:5000 and all your node modules installed).
Then, from the base directory:

```shell
$ cd client
$ yarn start
```
The dev front end will be available on http://localhost:3000.

### Talk me through this a bit

First install node and yarn (if you don't have these already).

Now install your node modules in the base directory and the client directory.

```shell
$ yarn
$ yarn build
```

Then you can run these apps as one entity, with the express app serving the compiled app (which lives in `client/dist`).

Do this by running `yarn start` in the base directory.

You can also run the front end with webpack-dev setup, and point it at the express app.
To do this, run `yarn start` in the base directory and then `yarn start` in the client directory.
You will then have the express app available at `localhost:5000` (with the example api call `localhost:5000/agile-prices`) and the dev front end available at `localhost:3000`.

### Happy hacking!
