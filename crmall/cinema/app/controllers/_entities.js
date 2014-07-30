
module.exports = {
    setProgramacao: function(req, data, filme, shopping) {
        req.models.programacao.create({
            filme_id: filme,
            shopping_id: shopping
        }, function(err, programacao) {

            if (err) {
                return false;
                /*
                if (Array.isArray(err)) {
                    return res.send(200, {errors: helpers.formatErrors(err)});
                } else {
                    return next(err);
                }
                */
            }

            return programacao.id;
        });
    },
    setSessao: function(req, data, programacao) {

    },
    setFilme: function(req, data) {
        req.models.filme.create({
            cartaz: data.cartaz,
            titulo: data.titulo,
            tituloOriginal: data.tituloOriginal,
            sinopse: data.sinopse,
            trailer: data.trailer,
            diretor: data.ficha.diretor,
            duracao: data.ficha.duracao,
            ano: data.ficha.ano,
            pais: data.ficha.pais,
            classificacao: data.ficha.classificacao,
            imdbUrl: data.avaliacao.IMDB.url,
            imdbNota: data.avaliacao.IMDB.avaliacao,
            metacriticUrl: data.avaliacao.Metacritic.url,
            metacriticNota: data.avaliacao.Metacriticavaliacao,
            rottenTomatoesUrl: data.avaliacao.RottenTomatoes.url,
            rottenTomatoesNota: data.avaliacao.RottenTomatoesavaliacao,
            ativo: true
        }, function(err, filme) {

            if (err) {
                return false;
                /*
                if (Array.isArray(err)) {
                    return res.send(200, {errors: helpers.formatErrors(err)});
                } else {
                    return next(err);
                }
                */
            }

            return filme.id;
        });
    },
    setElenco: function(req, data, filme) {

    },
    setGaleria: function(req, data, filme) {

    },
    setGenero: function(req, data, filme) {

    }
};
