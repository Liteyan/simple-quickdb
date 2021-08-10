const pool = require("./database.js");

exports.set = async function (table, key, value) {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS q_${table} ( unique_key INT(11) NOT NULL AUTO_INCREMENT , quick_key VARCHAR(225) NOT NULL , quick_value VARCHAR(225) NOT NULL , updated DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP , UNIQUE (unique_key))`);
        await pool.query(`INSERT INTO q_${table} (quick_key, quick_value) VALUES ("${key}", "${value}")`);
        return true;
    } catch (error) {
        throw error;
    }
}

exports.get = async function (table, key) {
    try {
        const results = await pool.query(`SELECT * FROM q_${table} WHERE quick_key="${key}"`);
        const return_value = await results[0].quick_value.toString();
        return return_value;
    } catch (error) {
        throw error;
    }
}

exports.delete = async function (table, key, value) {
    try {
        const sql = value ? `DELETE FROM q_${table} WHERE quick_key="${key}" AND quick_value="${value}"` : `DELETE FROM q_${table} WHERE quick_key="${key}"`
        await pool.query(sql);
        return true;
    } catch (error) {
        throw error;
    }
}
