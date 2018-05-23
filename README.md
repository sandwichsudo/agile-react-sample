# Agile React Sample

This is an example express app with a React front end.

It is based on this tutorial: https://daveceddia.com/deploy-react-express-app-heroku/ 
and uses React Slingshot as a base. See the client README for more info on that.

## Should I use this?

Do you like javascript, React and Redux? Do you want a pre-configured sample page that lists out
the next day's prices from the Agile API? Then you might find this helpful.
It's a resource to help you get up and hacking quickly, instead of
having to set up a whole project from scratch.

If you've never worked with JavaScript, React or Redux, then this might be useful example, or
maybe utterly confusing :)

Basically you don't have to use this, but you can if it's helpful.

## Getting started

First install your node modules (using npm or yarn) in the base directory and the client directory

Then you can run these apps as one with the express app serving the compiled app (`client/dist`)
To do this with `npm start` in the base directory

You can also run the front end with webpack-dev setup, and point it at the local api.
To do this, run `npm start` in the base directory and then `npm start` in the client directory.
You will then have the api endpoints available at `localhost:5000` (eg `localhost:5000/agile-prices`)
and the dev front end available at `localhost:3000`

### Happy hacking!
