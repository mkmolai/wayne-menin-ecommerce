const db = require('../config/db');

class User{

    constructor({name, email, password, isAdmin})
    {
         
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    save()
    {
        let sql = `INSERT INTO Users 
                   ( Name, Email, Password,  IsAdmin)
                   VALUES 
                   ('${this.name}', '${this.email}', '${this.password}', '${this.isAdmin}')
                   `
        
        return db.execute(sql)
    }

    static getAllUsers()
    {
        let sql = `SELECT * FROM Users
       `
        return db.execute(sql)
    }
    
    static getAllUsers()
    {
        let sql = `SELECT * FROM Users
       `
        return db.execute(sql)
    }

    static getUserByCredentials({email, password})
    { 
        let sql =  `SELECT *
                    FROM Users
                    WHERE Email = '${email}' and Password = ${password}
       
        `
        return db.execute(sql)
    }

    static editUserById(id, placeholder)
    {
        let sql = `UPDATE Users
                   SET // = ${placeholder}
                   WHERE Id = ${id}
                  `

        return db.execute(sql);
    }

    static getUserById(id)
    {
        let sql = `SELECT *
                   FROM Users
                   WHERE Id = ${id}
                  `

        return db.execute(sql);
    }

    static deleteUserById(id)
    {
        let sql = `DELETE FROM Users
                   WHERE Id = ${id}
                  `

        return db.execute(sql);
    }

    
}

module.exports = User;