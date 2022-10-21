const db = require('../config/db');

class Product{

    constructor({name, brand, category, popularity, image, description, price, stock})
    {
         console.log('IMAGE YOU: ' + image)
        this.name = name;
        this.category = category;
        this.popularity = popularity;
        this.brand = brand;
        this.image = image;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    save()
    {
        let sql = `INSERT INTO Products 
                   ( Name, Category, Popularity, Brand, Image,  Description, Price, Stock)
                   VALUES 
                   ('${this.name}', '${this.category}','${this.popularity}', '${this.brand}', '${this.image}', '${this.description}', '${this.price}', '${this.stock}')
                   `
        
        return db.execute(sql)
    }

    static getAllProducts()
    {
        let sql = `SELECT * FROM Products
       `
        return db.execute(sql)
    }
    
    static getProductsByCategory(category)
    {
        if(category === 'new')
        {
            let sql = `SELECT * 
                        FROM Products p
                        WHERE p.Popularity = 'new'
                    `
            return db.execute(sql)
        }
        else if(category === 'trending')
        {
            let sql = `SELECT * 
                        FROM Products p
                        WHERE p.Popularity = 'trending'
                    `
            return db.execute(sql)
        }
        else if(category === 'all')
        {
            let sql = `SELECT * 
                        FROM Products
                    `
            return db.execute(sql)
        }
        else
        {
            let sql = `SELECT * 
                        FROM Products p
                        WHERE p.Category = '${category}'
                    `
            return db.execute(sql)
        }
    }


    static editProductById({id, name,description,price,popularity,image,brand,category,stock})
    { 

        let sql = `UPDATE Products
                   SET Name = '${name}', Category = '${category}', Brand = '${brand}',
                   Description = '${description}', Price = '${price}', Stock = '${stock}', Popularity = '${popularity}'
                   WHERE Id = ${id}
                  `

        return db.execute(sql);
    }

    static getProductById(id)
    {
        let sql = `SELECT *
                   FROM Products
                   WHERE Id = ${id}
                  `

        return db.execute(sql);
    }

    static deleteProductById(id)
    {
        let sql = `DELETE FROM Products
                   WHERE Id = ${id}
                  `

        return db.execute(sql);
    }

    
}

module.exports = Product;