# Getting Started with TI Best Practices Frontend Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). ESLint and Prettier module configurations have been added on top of it for ensuring linting and formatting best practices. A folder structure for components and pages has also been created for users to refer along with some basic components.

Run `npm install` before using any of the available scripts.

## Folder Structure
- All application logic is in the `src` folder.
- Within the `src` folder we have a `components` folder. All components should be in this folder. 
- It is advised to put the components in sub-folders of their name so that other related files(CSS, test etc) can also be put in the same folder for ease of accessiblity.
- Within the `src` we also have a `pages` folder for pages which are higher-level components and can be navigated from the navbar of the app.
- Other folders like `redux` will also be created in the `src` folder according to user requirement choices.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Run the linter.

### `npm run format`

Run the formatter.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
### Adding Authorization Pages:
Add the necessary API Calls in submitHandler functions in the `signin` and `signup` components.
If you have added Login with Github/Google buttons then you also need to add the OAuth credentials(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI etc) in the `.env` file.
### Setting up Infra
In order to deploy to AWS, setup environment variables used in the `publish-with-infra.yml` workflow as GitHub Secrets in the application repository.
It will ensure that application is attempted to be deployed on AWS S3 bucket every time changes are pushed on the main branch of the repo.
### Debugging in VS Code
`launch.json` file has been added in the `.vscode` folder. Open the Run and Debug pane in VS Code and run the debugger(the green button on top). You can set breakpoints in your code and it will be executed only upto those points in the launched browser window. You can view variable values and call stack at this point.
