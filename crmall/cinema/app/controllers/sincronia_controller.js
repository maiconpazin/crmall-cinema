var settings = require('../../config/settings');
var http = require('http');
var querystring = require('querystring');
var helpers = require('./_helpers');
var entities = require('./_entities');

module.exports = {
    sincronizar: function(req, res, next) {

        /* shopping,cidade,grupo,url */

        req.models.shopping.find({ativo: true}).all(function(err, shoppings) {
            if (err)
                return next(err);

            //var items = shoppings.map(function (m) {
            //  return m.serialize();
            //});

            shoppings.forEach(function(shopping) {

                var url = 'http://www.crmall.com.br/cinema/index.php?' + querystring.stringify(shopping);

                console.log(url); console.log("\r\n");

                http.get(url, function(res) {

                    var data = '';
                    res.on('data', function(chunk) {
                        data += chunk;
                    });

                    res.on('end', function() {
                        var programacaoJson = JSON.parse(data);
                        for (var k in programacaoJson) {
                            
                            var filmeJson = programacaoJson[k];
                            
                            console.log(filmeJson); console.log("\r\n");
                            
                            req.models.filme.find({tituloOriginal:filmeJson.tituloOriginal}, function(err, filme) { //, ano:data.ficha.ano
                                
                                if (err) {
                                   filme = entities.setFilme(req, filmeJson);
                                }
                                
                                console.log(filme); console.log("\r\n");
                                
                                if (filme && filme.id !== undefined && filme.id > 0) {
                                    var programacao = entities.setProgramacao(req, data, filme.id, shopping.id);
                                }
                                
                                console.log(programacao); console.log("\r\n");
                                
                            });

                        }
                    });

                }).on('error', function(e) {
                    return res.send({erro: true, msg: e.message});
                });

            });

            res.send({erro: false, msg: 'Sincronização em andamento..'});
        });

    }
};