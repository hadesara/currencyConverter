'use strict';
var oxr = require('open-exchange-rates');
var money = require('money');
oxr.set({ app_id: 'dd988d8bce8f4705b7c95712be3669c7' });
module.exports = {

    convert : function(req, res) {
        var from = req.params.from;
        var to = req.params.to;
        var value = req.params.value;
        console.log("Converting currency from " + from + " to " + to + " for value:" + value);
        money.rates = oxr.rates;
        money.base = oxr.base;
        var newcurrency = money(value).from(from).to(to);
        console.log("New currency:" + newcurrency + " new value:" + value);
    }
}
