# electron_lite

------------------------------------



根据实际需要，修改了 electron-quick-start，作为自己的模板

## 使用

```shell
npm install
npm intall electron-builder
npm start
```

## 单元测试

```shell
npm run test
```

如果出现以下错误

```powershell
errorOut='node-gyp-build' is not recognized as an internal or external command,
    operable program or batch file.
```

尝试`npm`安装`node-gyp-build`模块

```powershell
npm i -g node-gyp-build
```

## build 时的 extraResources 处理

`package.json`中

```json
"build":{
    "extraResources": [
      {
          "from":"./libs",
          "to":"../libs"
      }
  ]
}
```

`from`的`./`代表项目根目录，

但是`to`的`./`代表`resources`目录，如果使用`./libs`,最后实际路径为`/resources/libs`，而非`.exe`所在的`/libs`，如果加载额外的`dll`会导致无法找到文件。所以这里使用`../libs`，确保摆放到正确位置。

## asar

```js
"build":{
     "asar": true
}
```

是否使用`asar`压缩