# simple-quickdb
某quick.dbの感覚をMySQLでも使えるようにしてみたやつです。<br>
JSONとかは対応してません。

## 仕様
はじめに`.env`ファイルか`database.js`にデータベースの接続情報をセットしておいてください。

各メソッドの第1引数はテーブル名です。実際のデータベースには`q_${table_name}`の形式で保存されます。

第2, 第3引数は順に キー, 値 です。<br>
何が何でも文字列として入れてください。

## 値のセット

```js
qdb.set("table_name", "key", "value"); //true
qdb.set("table_name", "key", "value2"); //true
```

## 値の取得

```js
qdb.get("table_name", "key"); //value
```

## 値の削除
```js
// [key]という名前のキーのデータを全削除
qdb.delete("table_name", "key"); //true

// [key]という名前のキーと[value]という値のデータを全削除
// この場合は[value2]のデータは残ります
qdb.delete("table_name", "key", "value");
