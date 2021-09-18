// config
require('dotenv').config();
const env = process.env.MODE_ENV;

console.log(env)

const dev = {
    app: {
        port: 3000
    },
    api: {
        route: 'api',
        version: 'v1'
    },
    uploads: {
        destination: './uploads'
    }
}

const build = {
    app: {
        port: 80
    },
    api: {
        route: 'api',
        version: 'v1'
    },
    uploads: {
        destination: './uploads'
    }
}

const config = {
    dev,
    build
}

module.exports = config[env]