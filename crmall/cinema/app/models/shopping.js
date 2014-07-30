var moment = require('moment');

module.exports = function (orm, db) {
  var Shopping = db.define('shopping', {
    nome       : { type: 'text', size: 80, required: true },
    cidade     : { type: 'text', size: 20, required: true },
    grupo      : { type: 'text', size: 20, required: true },
    linkCompra : { type: 'text', required: false },
    ativo      : { type: 'boolean', defaultValue: true, required: true },
    dataHora   : { type: 'date', required: true, time: true }
  },
  {
    hooks: {
      beforeValidation: function () {
        this.dataHora = new Date();
      }
    },
    validations: {
      cidade: [
        orm.enforce.ranges.length(1, undefined, "Digite pelo menos um número"),
        orm.enforce.ranges.length(undefined, 20, "Este campo não pode conter mais que 20 números")
      ],
      grupo: [
        orm.enforce.ranges.length(1, undefined, "Digite pelo menos um número"),
        orm.enforce.ranges.length(undefined, 20, "Este campo não pode conter mais que 20 números")
      ]
    },
    methods: {
      /* serialize: function () {
        var comments;

        if (this.comments) {
          comments = this.comments.map(function (c) { return c.serialize(); });
        } else {
          comments = [];
        }

        return {
          id        : this.id,
          title     : this.title,
          body      : this.body,
          createdAt : moment(this.createdAt).fromNow(),
          comments  : comments
        };
      } */
    }
  });
};