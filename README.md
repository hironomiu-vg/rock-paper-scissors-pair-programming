# rock-paper-scissors-pair-programming

## ディレクトリ構成
```
.
├── Gruntfile.js
├── README.md
├── config.json.template
├── original
│   ├── bootstrap
│   │   ├── css
│   │   │   ├── bootstrap-theme.css
│   │   │   ├── bootstrap-theme.css.map
│   │   │   ├── bootstrap-theme.min.css
│   │   │   ├── bootstrap.css
│   │   │   ├── bootstrap.css.map
│   │   │   └── bootstrap.min.css
│   │   ├── fonts
│   │   │   ├── glyphicons-halflings-regular.eot
│   │   │   ├── glyphicons-halflings-regular.svg
│   │   │   ├── glyphicons-halflings-regular.ttf
│   │   │   └── glyphicons-halflings-regular.woff
│   │   └── js
│   │       ├── bootstrap.js
│   │       ├── bootstrap.min.js
│   │       └── npm.js
│   ├── css
│   │   ├── base.css
│   │   └── base.min.css
│   ├── img
│   │   ├── paper.png
│   │   ├── rock.png
│   │   └── scissors.png
│   ├── index.html
│   └── js
│       ├── jquery-2.1.3.min.js
│       └── rock-paper-scissors.js
├── package.json
└── src
    └── styles
        └── base.less
```

## install
```
$ git clone git@github.com:hironomiu-vg/rock-paper-scissors-pair-programming.git
```
※但しペアプログラミング時はforkしcloneすること

## setup
仮想サーバなどで利用する場合PORT 8080、35729を空けること

### config.jsonの準備
- 作成後localhost以外のhostを利用する場合適時修正すること
```
$ cp config.json.template config.json
```

###  npm installの実行
- node.js,npmがインストールされていること
- grunt-cliがインストールされていること
  - インストールされていない場合
  ```
  # npm install -g grunt-cli
  ```
- packageの導入
```
$ npm install
```

## gruntによるタスク自動化
```
$ grunt
```

### browse
livereloadにより自動的に反映

http://localhost:8080

localhost以外でlivereloadを使う場合index.htmlの下記のlocalhostを変更すること
```
<script src="http://localhost:35729/livereload.js"></script>
```

### plugins
以下導入してあるpulugin

- grunt-contrib-less

  https://github.com/gruntjs/grunt-contrib-less
  
- grunt-contrib-csslint

  https://github.com/gruntjs/grunt-contrib-csslint

- grunt-contrib-cssmin

  https://github.com/gruntjs/grunt-contrib-cssmin
  
- grunt-contrib-watch

  https://github.com/gruntjs/grunt-contrib-watch
  
- grunt-contrib-connect

  https://github.com/gruntjs/grunt-contrib-connect
  
- grunt-contrib-jshint

  https://github.com/gruntjs/grunt-contrib-jshint
