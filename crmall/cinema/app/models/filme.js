var moment = require('moment');

module.exports = function (orm, db) {
  var Filme = db.define('filme', {
    cartaz             : { type: 'text', required: false },
    titulo             : { type: 'text', size: 255, required: true },
    tituloOriginal     : { type: 'text', size: 255, required: false },
    sinopse            : { type: 'text', required: true },
    trailer            : { type: 'text', size: 255, required: false },
    diretor            : { type: 'text', size: 255, required: false },
    duracao            : { type: 'text', size: 20, required: true },
    ano                : { type: 'text', size: 255, required: false },
    pais               : { type: 'text', size: 80, required: false },
    classificacao      : { type: 'text', size: 80, required: true },
    imdbUrl            : { type: 'text', size: 255, required: false },
    imdbNota           : { type: 'text', size: 10, required: false },
    metacriticUrl      : { type: 'text', size: 255, required: false },
    metacriticNota     : { type: 'text', size: 10, required: false },
    rottenTomatoesUrl  : { type: 'text', size: 255, required: false },
    rottenTomatoesNota : { type: 'text', size: 10, required: false },
    ativo              : { type: 'boolean', defaultValue: true, required: true },
    dataHora           : { type: 'date', required: true, time: true }
  },
  {
    hooks: {
      beforeValidation: function () {
        this.dataHora = new Date();
      }
    },
    validations: {
      /* cidade: [
        orm.enforce.ranges.length(1, undefined, "Digite pelo menos um número"),
        orm.enforce.ranges.length(undefined, 20, "Este campo não pode conter mais que 20 números")
      ],
      grupo: [
        orm.enforce.ranges.length(1, undefined, "Digite pelo menos um número"),
        orm.enforce.ranges.length(undefined, 20, "Este campo não pode conter mais que 20 números")
      ] */
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