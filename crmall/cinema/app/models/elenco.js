var moment = require('moment');

module.exports = function (orm, db) {
  var Elenco = db.define('elenco', {
    ator     : { type: 'text', size: 80, required: true },
    datahora : { type: 'date', required: true, time: true }
  },
  {
    hooks: {
      beforeValidation: function () {
        this.datahora = new Date();
      }
    },
    validations: {
      //body   : orm.enforce.ranges.length(1, 1024)
    },
    methods: {
      /*  
      serialize: function () {
        return {
          body      : this.body,
          createdAt : moment(this.createdAt).fromNow()
        }
      }
      */
    }
  });

  Elenco.hasOne('filme', db.models.filme, { required: true, reverse: 'elenco', autoFetch: true });
};