const pool = require('../database');

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
            const sql = `select p.id,COALESCE(p.url_image,'1') as image, p.name, p.price, p.discount, c.name as category 
            from product p inner join category c on p.category = c.id 
            where c.id = ?
            order by p.id asc;`
            
            pool.query(sql,[data], (error, rows) => {
                if(error) throw error;
                callback(rows);
            })
        }
    },
    getFilterProducts : (data, callback) =>{
        if(pool) {
            const sql = `select p.id,COALESCE(p.url_image,'1') as image, p.name, p.price, p.discount, c.name as category 
            from product p inner join category c on p.category = c.id 
            where (p.name like  ? or
                    c.name like ?)
            order by p.id asc;`;
            
            pool.query(sql,[`%${data}%`,`%${data}%`], (error, rows) =>{
                if(error) throw error;
                callback(rows);
            })
        }
    }
}

module.exports = dataModel;