var moment = require('moment');

module.exports = function (orm, db) {
  var Galeria = db.define('galeria', {
    imagem   : { type: 'text', size: 255, required: true },
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

  Galeria.hasOne('filme', db.models.filme, { required: true, reverse: 'galeria', autoFetch: true });
};