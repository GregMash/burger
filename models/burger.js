const orm = require('../config/orm');

const burger = {
    all: (cb) => {
        orm.all('burgers', (res) => {
            cb(res);
        });
    },
    create: (cols, vals, cb) => {
        orm.create('burgers', cols, vals, (res) => {
            cb(res);
        });
    },
    update: (objColsVals, condition, cb) => {
        orm.update('burgers', objColsVals, condition, (res) => {
            cb(res);
        });
    },
    delete: (condition, cb) => {
        orm.delete('burgers', condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;