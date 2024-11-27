
# Material Theme (But I won't sue you)

So, uh, the guy who made the VS Code Material Theme is threatening everyone who uses it in their products. He [seems to have forgotten it was originally licensed under the Apache License, 2.0.](). He wiped the commit history to make it look like it was always his weird fake license.

What he has done is fraudulent and shameful. I have created this fork to maintain the original license and keep the project alive.

I permit you to do whatever you want with this code as long as it follows the original license. I won't sue you for it. I promise.

Sources:
- [Attack post](https://dev.to/equinusocio/you-should-avoid-zed-editor-59n1) ([archive](https://archive.ph/PlljZ))
- [Github Discussions attack on Zed](https://github.com/zed-industries/extensions/issues/1645) ([archive](https://archive.ph/5hZyK))

## Table of contents

The most epic theme meets Visual Studio Code.

- [Material Theme ](#material-theme-)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
    - [Installation](#installation)
  - [Activate theme](#activate-theme)
  - [Set the accent color](#set-the-accent-color)
  - [Override theme colors](#override-theme-colors)
  - [Recommended settings for a better experience](#recommended-settings-for-a-better-experience)
  - [Official Portings](#official-portings)
  - [Want to use the legacy version?](#want-to-use-the-legacy-version)
  - [Contributors](#contributors)


## Getting started

You can install this awesome theme through the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme). <a href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme#review-details"><img src="https://img.shields.io/badge/marketplace-gray.svg?colorA=655BE1&colorB=4F44D6&style=flat-square"/></a>

### Installation

Launch *Quick Open*:
  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+P`

Paste the following command and press `Enter`:

```shell
ext install t3dotgg.vsc-material-theme-but-i-wont-sue-you
```

And pick the one by **Theo (t3dotgg)** as author.

## Activate theme

Launch *Quick Open*:

  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl + Shift + P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘ + Shift + P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl + Shift + P`

Type `theme`, choose `Preferences: Color Theme`, and select one of the Material Theme variants from the list. After activation, the theme will set the correct icon theme based on your active theme variant.


## Set the accent color

Launch *Quick Open*:

  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl + Shift + P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘ + Shift + P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl + Shift + P`

Type `material theme`, choose `Material Theme: Set accent color`, and pick one color from the list.

## Override theme colors

Learn how to customize every part of this theme by using Visual Studio Code API. [Read more.](https://github.com/material-theme/vsc-material-theme/discussions/1274)

## Recommended settings for a better experience

```js
{
    // Controls the line height. Use 0 to compute the lineHeight from the fontSize.
    "editor.lineHeight": 28,
    // Enables font ligatures
    "editor.fontLigatures": "'ss01','ss05','dlig'",
    // Controls if file decorations should use badges.
    "explorer.decorations.badges": false
}
```

## Official Portings

You can find all the official portings and resources [here](https://github.com/material-theme/vsc-material-theme/discussions/1279).

## Want to use the legacy version?

If you're looking for the deprecated Community Material Theme [you can find it here](https://github.com/material-theme/vsc-material-theme/discussions/1278). This version has been deprecated and removed from the official marketplace.

## Contributors

This project exists thanks to all the people who contribute. [[Contribute]](CONTRIBUTING.md).
<a href="graphs/contributors"><img src="https://opencollective.com/material-theme/contributors.svg?width=890" /></a>

<p align="center"><a href="http://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/badge/License-Apache_2.0-5E81AC.svg?style=flat-square"/></a></p>

## Attribution

The code in this project was [previously hosted at this url](https://github.com/material-theme/vsc-material-theme), but the original author has wiped all history of it, making it incredibly hard to credit him and the other original contributors. Full credit has been preserved in the git history here to our best ability.
