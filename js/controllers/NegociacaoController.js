System.register(["../views/NegociacoesViews", "../views/MensagemView", "../models/Negociacoes", "../models/negociacao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacoesViews_1, MensagemView_1, Negociacoes_1, negociacao_1, NegociacaoController;
    return {
        setters: [
            function (NegociacoesViews_1_1) {
                NegociacoesViews_1 = NegociacoesViews_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (negociacao_1_1) {
                negociacao_1 = negociacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._negociacoesView = new NegociacoesViews_1.NegociacoesView('#negociciacoesView');
                    this._mensagemView = new MensagemView_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação Adicionada com Sucesso!');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
