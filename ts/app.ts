import {NegociacaoController} from './controllers/NegociacaoController';
const controller = new NegociacaoController();
//teste do remove coments
$('.form').submit(controller.adiciona.bind(controller))
