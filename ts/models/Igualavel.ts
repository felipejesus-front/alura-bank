import { Negociacao } from "./negociacao";

export interface Igualavel<T> {

    ehIgual(objeto: T) : boolean;
}
