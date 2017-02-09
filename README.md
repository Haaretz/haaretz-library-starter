# slush-haaretz-lib
A Slush-based ES.next module generator with typescript, babel, webpack and testing infrastructure

## Instalation
The module generator depends on two global dependencies - [Yarn](https://yarnpkg.com/) and [Slush](http://slushjs.github.io). 
If you dont already have them installed, please install them and the generator using:

```sh
npm install -g yarn && yarn global add slush slush-haaretz-lib
```

In the event you do already have them installed, install the generator:

```
yarn && yarn global add slush-haaretz-lib
```


## Usage

Once you have the generator installed, `cd` to a directory of your choice (where your new project will be created)
and run `slush haaretz-lib` from the commend line.

Once the scaffolding is complete, your new project is ready to be worked on.

## Architecture
### File Structure
```
___ config/      Project configuration files.
|
|___ dist/       Production-ready generated files.
|
|__ src/         Library source files
|  |
|  |__ Lib/      Library sub modules
|  |
|  |__ Styles/   Stylesheets
|
|__ static/      Static files needed for the project,
                 namely html and images.

```

`index.{ts,js}` within the `src` directory, is the library's entry point, while submodules should 
reside in their own files inside the `src/lib/` directory.

Stylesheets (`css` or `scss`) should be placed in the `src/styles` directory. They can then be 
directly imported into `index.{ts,js}` using `import './styles/<filename>'`. When building for 
production, a single `css` file called `style.css` will be generated in the `dist` directory, and 
automatically linked to in the `html` file.

### NPM Scrips
Your new progect comes with several ready-made scripts which you can run with `npm run <script-name>`:

  * `build` - Builds production-ready files.
  * `dev` - Fires up the webpack dev server.
  * `lint` - Lints your files.
  * `serve` - Start a BrowserSync live server serving from `dist`.
  * `test` - Run test specs.
  * `tdd` - Run test specs whenever files change.
  * `test:browser` - Run test specs in a browser environment (using Karma).
  * `tdd:browser` - Run test specs  in a browser environment (using Karma) whenever files change.
  * `jsdoc` - Generate JSdoc documentation.
  * `gh-pager` - Publish documentation as gh-pages.
