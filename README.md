## Rspack's issue with self referencing

Check out NodeJS's self referencing [here](https://nodejs.org/api/packages.html#self-referencing-a-package-using-its-name).

1. Run `npm install`
2. Run `cd apps/remote`
3. Run `npm start`

These 2 steps will start the server. And the app will work correctly.
But if you uncomment [this line](./packages/shared/src/components/Button/Button.tsx#L3), the app won't run in the browser.
