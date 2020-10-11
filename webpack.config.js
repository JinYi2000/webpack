const path = require('path');


module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')//因为mac、windows下目录不一样   绝对路径
    }
};
