const qdb = require("./quickdb.js");

//set
function setData () {
    qdb.set("users", "Liteyan", "0"); //true
    qdb.set("users", "Taro", "1"); //true
    qdb.set("users", "Taro", "2"); //太郎さんが2人いた
}

//get
async function getData () {
    const result = await qdb.getData("users", "Liteyan"); // 0 (String)
    console.log(result);
}

//delete
function deleteData () {
    qdb.delete("users", "Liteyan"); //true
    qdb.delete("users", "Taro", "2"); //2の太郎さんだけdelete
}
