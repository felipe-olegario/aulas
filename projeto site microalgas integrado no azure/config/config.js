module.exports = {
    production: {
        username: 'algasensors',
        password: '#Gfgrupo11',
        database: 'banco-algasensors',
        host: 'banco-algasensors.database.windows.net',
        dialect: 'mssql',
        xuse_env_variable: 'algasensors',
        dialectOptions: {
            options: {
                encrypt: true
            }
        },
        pool: {
            max: 5,
            min: 1,
            acquire: 5000,
            idle: 30000,
            connectTimeout: 5000
        }
    }
};