// Para testear tu código en nuestros servidores debes mantener la estructura expuesta abajo.
// Eres libre de crear nuevas funciones/procedimientos.
// Recuerda que el código que escribas podrá ser visto por las empresas a las que te postules.
 var stock = {
    'tornillo': 10,
    'tuerca': 2,
    'cable': 4,
   'sensor': 5
 };
var maquinas = [{'tornillo': 23, 'cable': 20}, {'tuerca': 15, 'cable': 12, 'sensor': 23}];


function cuanto_comprar(stock, maquinas){
	
	for(i=0; i < maquinas.length; i++){
	    for (var key in maquinas[i]){
	        for(var k in stock){
	        	if (k == key)
				stock[k] = stock[k] - maquinas[i][key];
			}
	    }	
	}
	
	for(var item in stock){
		stock[item] = stock[item] * -1;
	}
	
	return stock;
	// return {'tornillo': 13, 'sensor': 18, 'tuerca': 13, 'cable': 28};
	
}

console.log(cuanto_comprar(stock, maquinas));