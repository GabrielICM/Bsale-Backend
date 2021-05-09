const pool = require('../database');

var dataModel = {
    getProducts : (callback) =>{
        if(pool) {
            const sql = `select p.id, p.name, p.price, p.discount, c.name as category 
                from product p inner join category c on p.category = c.id
                order by c.id asc`;
            
            pool.query(sql, (error, rows) =>{
                if(error) throw error;
                callback(rows);
            })
        }
    },
    getFilterProducts : (data, callback) =>{
        if(pool) {
            console.log(search);
            const sql = `select p.id, p.name, p.price, p.discount, c.name as category 
            from product p inner join category c on p.category = c.id 
            where (p.name like  ${pool.escape(data)} or
                    c.name like ${pool.escape(data)})
            order by p.id asc;`;
            
            pool.query(sql, (error, rows) =>{
                if(error) throw error;
                callback(rows);
            })
        }
    }
}

module.exports = dataModel;