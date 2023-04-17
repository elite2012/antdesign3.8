建立config-overrides.js
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
   fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
 );
 #package.json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "antd": "^3.10.9",
    "babel-plugin-import": "^1.2.1",
    "babel-plugin-transform-decorators-legacy": "^1.3.5",
    "babel-polyfill": "^6.6.1",
    "customize-cra": "^1.0.0",
    "mobx": "^6.9.0",
    "mobx-react": "^7.6.0",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-script": "^2.0.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "react-app-rewired": "^1.6.2"
  }
}
![image-20230417170105962](2023年工作计划-网站开发设计与学习前台学习-antdesign学习-1-1-1-4-1-v1.0.assets/image-20230417170105962.png)