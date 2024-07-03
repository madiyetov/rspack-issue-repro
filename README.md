## Rspack's issues 

### 1. Get the working app

1. Run `npm install`
2. Run `cd apps/remote`
3. Run `npm start`

These 3 steps will start the server. And the app will work correctly.

### Self referencing issue

But if you uncomment [this line](./packages/shared/src/components/Button/Button.tsx#L3), the app won't run in the browser (blank page).
Check out NodeJS's self referencing [here](https://nodejs.org/api/packages.html#self-referencing-a-package-using-its-name).

### Issue with DefinePlugin

And the uncommenting [this plugin](./apps/remote/rsbuild.config.ts) will crash the `npm start` at all.




