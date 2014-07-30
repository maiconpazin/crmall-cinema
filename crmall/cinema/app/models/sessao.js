var moment = require('moment');

module.exports = function (orm, db) {
  var Sessao = db.define('sessao', {
    tipo     : { type: 'text', size: 80, required: true },
    horario  : { type: 'text', size: 5, required: true },
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

  Sessao.hasOne('programacao', db.models.programacao, { required: true, reverse: 'sessoes', autoFetch: true });
};