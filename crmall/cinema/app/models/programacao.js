var moment = require('moment');

module.exports = function (orm, db) {
  var Programacao = db.define('programacao', {
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

  Programacao.hasOne('filme', db.models.filme, { required: true });
  Programacao.hasOne('shopping', db.models.shopping, { required: true, reverse: 'programacao', autoFetch: true });
};