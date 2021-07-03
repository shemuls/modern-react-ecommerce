# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

## Editor Setup

You can use any editor but as I personally prefer VS Code. I will give some instructions about how I prefer VS code to be setup for React applications.

## My contact Information

- https://facebook.com/wpshemul
- Fiver: https://fiverr.com/wordpres_shemul
- shemulpro@gmail.com

### Plugins

I would recommend below plugins for VS Code:

- ESLint by Dirk Baeumer
- Prettier - Code formatter by Prettier
- Live Server by Ritwick Dey
- Path Autocomplete by Mithai Vilcu
- Bracket Pair Colorizer by CoenraadS
- Material Icon Theme by Phillipp Kief
- ES7 React/Redux/GraphQL/React-Native snippets - dsznajder

### Settings

I would also recommend below settings for VS Code. You can edit the VS Code settings.json file by simply pressing (CTRL + ,) in Windows or (CMD + ,) in MacOS

```json
{
  "editor.wordWrap": "on",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "eslint.alwaysShowStatus": true,
  "javascript.validate.enable": false,
  "prettier.disableLanguages": ["javascript", "javascriptreact"],
  "bracketPairColorizer.colorMode": "Independent",
  "bracketPairColorizer.independentPairColors": [
    ["()", ["White"], "Red"],
    ["[]", ["Orchid"], "Red"],
    ["{}", ["LightSkyBlue"], "Red"]
  ],
  "workbench.iconTheme": "material-icon-theme",
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "path-autocomplete.extensionOnImport": true,
  "path-autocomplete.excludedItems": {
    "**/*.js": {
      "when": "**"
    },
    "**/*.jsx": {
      "when": "**"
    }
  }
}
```

### Set Line Breaks

Make sure in your VS Code Editor, "LF" is selected as line feed instead of CRLF (Carriage return and line feed). To do that, just click LF/CRLF in bottom right corner of editor, click it and change it to "LF". If you dont do that, you will get errors in my setup.

<img src="public/line-feed.jpg" alt="Line Feed" width="700">

## Linting and auto Formatting Setup

- Open terminal and cd into the project directory
- enter below command

```bash
npx install-peerdeps --dev eslint-config-airbnb@18.1.0
```

- when the above one finishes, enter the below command

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier
```

- create 2 new files inside the project root folder called '.eslintrc' and '.eslintignore'
- write below lines inside .eslintignore file

```txt
src/serviceWorker.js
src/setupTests.js
public/*
```

- write below lines inside .eslintrc file

```txt
{
    "extends": [
        "react-app",
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react"
    ],
    "plugins": [
        "jsx-a11y",
        "prettier"
    ],
    "rules": {
        "no-console": "off",
        "react/state-in-constructor": "off",
        "react/prop-types": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 100,
                "tabWidth": 4,
                "semi": true
            }
        ]
    }
}
```
