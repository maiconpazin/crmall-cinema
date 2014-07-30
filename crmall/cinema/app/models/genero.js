var moment = require('moment');

module.exports = function (orm, db) {
  var Genero = db.define('genero', {
    nome     : { type: 'text', size: 80, required: true },
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

  Genero.hasOne('filme', db.models.filme, { required: true, reverse: 'generos', autoFetch: true });
};