# Contributing guidelines

> Note: this document is intended as a draft, it will be updated soon

## Requirements:

* Nodejs ^8.x
* Visual Studio Code
* GPG Tool

- [Contributing guidelines](#contributing-guidelines)
  - [Requirements:](#requirements)
  - [Installing and compiling source](#installing-and-compiling-source)
    - [Testing the theme](#testing-the-theme)
    - [Adding new Material Theme commands](#adding-new-material-theme-commands)
      - [index.ts](#indexts)
        - [Example of `async` exported `function`](#example-of-async-exported-function)
        - [Example of `sync` exported `function`](#example-of-sync-exported-function)
      - [Using external "mini" modules](#using-external-mini-modules)
      - [Register the command](#register-the-command)
      - [Add to package.json](#add-to-packagejson)
      - [Build and run](#build-and-run)
      - [Test your command](#test-your-command)
    - [Adding new custom setting](#adding-new-custom-setting)
  - [Financial contributions](#financial-contributions)
  - [Credits](#credits)
    - [Contributors](#contributors)

## Installing and compiling source

First you will have to install node_modules through npm

```shell
npm install
```

To compile to the source code, you have to execute the build task through visual studio code.
First you need to invoke to quick command (on MacOS `⌘P`, while on Linux/windows is `ctrl+p`)
then type `task build` and wait until VSC will have finished the task.

### Testing the theme

To test the theme, you will have to go to the debug section, select the *Launch Extension* from debug and execute it.

### Adding new Material Theme commands

Material Theme commands are located inside the `extensions/commands` directory. They are split by folders so you can find a single specific `index.ts` file inside a `command` folder. This is a patter choice: so you can add related command helpers inside that folder.

#### index.ts

The main file must return a `function`. The `function` can be `async` or `sync`.

We want to make this clear, so the `async` declaration must be present even if you want to use `then()` for chaining inside the `function`.

##### Example of `async` exported `function`

```js
export default async (): Promise<boolean> => {

    ...
```

##### Example of `sync` exported `function`

```js
export default (): boolean => {

    ...
```

#### Using external "mini" modules

We encourage you to split up your command in other small modules so they can be **tested** more easily and outside of the context.

#### Register the command

You must register the new command to execute it when it's called by the user.

Firstly add the command to our commands `extensions/commands/index.ts`

```js
export {default as awesomeCommand} from './awesome-command';
```

Commands are registered within the `extensions/material.theme.config.ts` file.

Just add a new registration after the others that will run your command:

```js

  Commands.registerCommand('materialTheme.awesomeCommand', () => ThemeCommands.awesomeCommand());

```

#### Add to package.json

When you are ready to test your new command you must add its declaration within the `package.json`. The command **must be prefixed with** `materialTheme.` prefix.

As the others your command will look like this:

Level: `contribute.commands -> Array`
```json

      {
        "command": "materialTheme.awesomeCommand",
        "title": "Awesome Title For Command",
        "category": "🎨 Material Theme"
      }

```

#### Build and run

Now you can re-build the theme and just run the debug, you will see your command in the command list of VSCode just searching for its title.

## Credits

### Contributors

Thank you to all the people who have already contributed to vsc-material-theme!
<a href="graphs/contributors"><img src="https://opencollective.com/vsc-material-theme/contributors.svg?width=890" /></a>
