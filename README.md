# rock-paper-scissors-pair-programming

## リポジトリのclone
```
$ git clone git@github.com:hironomiu-vg/rock-paper-scissors-pair-programming.git
```
※**但しインターン時はforkしcloneすること**

## 事前準備
- 仮想サーバなどで利用する場合は事前にlivereload用のPORT 8080、35729を空けること
- node.js,npmがインストールされていること
- grunt-cliがインストールされていること
  - インストールされていない場合、以下でインストールすること
  ```
  # npm install -g grunt-cli
  ```

## install
```
$ make install
```

## 開発
ターミナルを二つ立ち上げ1つ目のターミナルでgruntを起動し、2つ目のターミナルで開発を行いましょう

### ターミナル1 gruntによるタスク自動化
`grunt`実行後`Waiting...`で常駐していることを確認（停止はCTL+Cで行う）
```
$ grunt
Running "jshint:files" (jshint) task
>> 3 files lint free.

Running "less:build" (less) task
File original/css/base.css created

Running "csslint:check" (csslint) task
>> 1 file lint free.

Running "cssmin:minimize" (cssmin) task

Running "connect:server" (connect) task
Started connect web server on http://localhost:8080

Running "watch" task
Waiting...
```
#### 画面の確認
grunt起動後、開発中の変更はgruntプラグインlivereloadにより自動的に反映される

http://localhost:8080

※localhost以外でlivereloadを使う場合index.htmlの下記のlocalhostを変更すること
```
<script src="http://localhost:35729/livereload.js"></script>
```

### ターミナル2 開発するにあたって
original/index.htmlを編集し http://localhost:8080 で表示される内容が自動的に変わることを確認しましょう

34行目`<h1>じゃんけんゲーム</h1>`を`<h1>livereload確認　じゃんけんゲーム</h1>`と書き換えてみましょう

どのファイルを常時監視しているかはGruntfile.js内33行目のfilesで設定しています
```
watch: {
             options: {
                 livereload: true
             },
             files: ['<%= config.target %>/js/rock-paper-scissors.js','<%= config.target %>/index.html','src/styles/*.less'],
             tasks: ['jshint','less','csslint','cssmin']
         },
```
## Mission
http://localhost:8080 に表示された追加仕様1、追加仕様2を実装してみましょう

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


### plugins
以下導入してあるpuluginの一覧

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
