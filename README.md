This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## NOTE
Okay, this shows the relationship between a parent --> grandchild. <br>
We show that you can pass state to the parent, and back down to the grandchild. It is a very contrived, easy example.<br>
But, it shows how you can compartmentalize state. We could compose state before (pre-hooks), fine, but in this instance, you can see that I just name the actions/context based on how we are using it. 

### Some things to enhance the architecture
1. you can site the context/types/reducer in the area where you need it, or are using. This way the cognitive load is small. Everything you have is there.
2. If you don't want to do #1, you can have a state folder that exports into an index.js file.
3. Or you can just do a context/reducer/action/type folder.. one for each.

I can't say what is best because I don't know how your app is shaping up. 

<b>I hope this is helpful. IF THIS IS NOT WHAT YOU NEEDED. Please tell me exactly what you need, in steps. Something tells me this is not exactly what you need.. but I am hoping it is :-)</b>




## READ BELOW FOR REACT-APP starting this. Just clone it, and run npm start.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# maeStateExample
