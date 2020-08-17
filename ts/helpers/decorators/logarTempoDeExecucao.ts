export function logarTempoDeExecucao(emSegundos: boolean = false) {

    return function(target: any, propertykey: string, descriptor: PropertyDescriptor){

        const metodoOgirinal = descriptor.value;

        descriptor.value = function (...args: any[]){

            let unidade = 'ms';
            let divisor = 1;
            if(emSegundos) {
                unidade = 's';
                divisor = 1000
            }


            console.log("---------------")
            console.log(`parametros passados para o metodo ${propertykey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const retorno = metodoOgirinal.apply(this, args);
            const t2 = performance.now();
            console.log(`O retorno do métoro ${propertykey} é: ${JSON.stringify(retorno)}`);
            console.log(`O metodo ${propertykey} demorou ${(t2-t1)/divisor} ${unidade}`)
            return retorno;
        }
        return descriptor;
    }
}