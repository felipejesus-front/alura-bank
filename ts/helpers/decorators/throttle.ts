export function throttle(milissegundos = 500) {

    return function(target: any, propertykey: string, descriptor: PropertyDescriptor){

        const metodoOgirinal = descriptor.value;
        let timer = 0;
        descriptor.value = function (...args: any[]){
            if (event) event.preventDefault();        
            clearInterval(timer);
            timer = setTimeout(() => metodoOgirinal.apply(this, args), milissegundos); 
        
        
        }
        return descriptor;
    }
}