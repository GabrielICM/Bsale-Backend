const pool = require('../database');

function replaceSql (query,values = {}){
    Object.keys(values).forEach((name) =>{
        query = query.replace(name,pool.escape(values[name]));
    })
    return query;
}
//prepare sql string.
var dataModel = {
    getProducts : (callback) =>{
        if(pool) {
            const sql = `select p.id, COALESCE(p.url_image,'1') as image, p.name, p.price, p.discount, c.name as category 
                from product p inner join category c on p.category = c.id
                order by c.id asc`
            
            pool.query(sql, (error, rows) =>{
                if(error) throw error;
                callback(rows);
            })
        }
    },
    getProductsByCategory : (data,callback) =>{
        if(pool) {
            const sql = replaceSql(`select p.id,COALESCE(p.url_image,'1') as image, p.name, p.price, p.discount, c.name as category 
            from product p inner join category c on p.category = c.id 
            where c.id = :name1
            order by p.id asc;`, {':name1' : `${data}`});
            
            pool.query(sql, (error, rows) =>{
                if(error) throw error;
                callback(rows);
            })
        }
    },
    getFilterProducts : (data, callback) =>{
        if(pool) {
            const sql = replaceSql(`select p.id,COALESCE(p.url_image,'1') as image, p.name, p.price, p.discount, c.name as category 
            from product p inner join category c on p.category = c.id 
            where (p.name like  :name1 or
                    c.name like :name2)
            order by p.id asc;`, {':name1' : `%${data}%`,
                                    ':name2' : `%${data}%`});
            
            pool.query(sql, (error, rows) =>{
                if(error) throw error;
                callback(rows);
            })
        }
    }
}

module.exports = dataModel;