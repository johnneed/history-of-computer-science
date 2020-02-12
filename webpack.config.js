/* global require, module, __dirname */

const path = require('path');

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/js')
    }
};
