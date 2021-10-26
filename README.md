# Twitter App implementation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Link
This application was deployed in a firebase hosting.\
Open [https://twitter-frontendun.web.app/](https://twitter-frontendun.web.app/) to view it in the browser.

## Routes
- /
- /login
- /login/passwordRecovery
- /signup
- /explore
- /notifications
- /messages
- /bookmarks
- /lists
- /profile
- /more

## Lighthouse test results
We executed the lighthouse test in incognite mode due to some factor such as chrome extensions and stored data could affect the performance.\
![alt text](https://firebasestorage.googleapis.com/v0/b/images-hosting-84deb.appspot.com/o/warning-lighthouse.png?alt=media&token=867e619b-04fc-48ce-af03-0436f016e4f2)

### Results in desktop device
![alt text](https://firebasestorage.googleapis.com/v0/b/images-hosting-84deb.appspot.com/o/desktop-lighthouse.png?alt=media&token=5dda4252-c887-434a-977f-88e96c43d5c7)

### Results in mobile device
![alt text](https://firebasestorage.googleapis.com/v0/b/images-hosting-84deb.appspot.com/o/mobile-lighthouse.png?alt=media&token=f6c50f63-e327-4178-9422-28a56b585822)

## Second assignment
The API used in this App was deployed in Heroku and can be accessed through this endpoint:\
[https://twitter-api-un.herokuapp.com/api](https://twitter-api-un.herokuapp.com/api)

The following points were not implemented in this version:
1. Eliminar comentario (solo si está autenticado) (solo lo puede hacer el creador del comentario) - ***this route is not implemented in Back*** 
2. Lista de trending 1 (deben cargar los últimos 10 tweets de una cuenta, consumiendo el endpoint que se alimenta de Twitter original, como lo hicimos en la clase) - ***Especial credentials to connect with the real Twitter Api are needed in .env***
