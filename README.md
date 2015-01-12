# rock-paper-scissors-pair-programming

## install
```
$ git clone git@github.com:hironomiu-vg/rock-paper-scissors-pair-programming.git
```
※但しペアプログラミング時はforkしcloneすること

## setup
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

