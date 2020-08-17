System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos = false) {
        return function (target, propertykey, descriptor) {
            const metodoOgirinal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'ms';
                let divisor = 1;
                if (emSegundos) {
                    unidade = 's';
                    divisor = 1000;
                }
                console.log("---------------");
                console.log(`parametros passados para o metodo ${propertykey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOgirinal.apply(this, args);
                const t2 = performance.now();
                console.log(`O retorno do métoro ${propertykey} é: ${JSON.stringify(retorno)}`);
                console.log(`O metodo ${propertykey} demorou ${(t2 - t1) / divisor} ${unidade}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
