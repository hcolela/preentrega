let precio = 0;
let compra = "";
let costo = 0;
let agregarCompra = false;
let total = 0; //Variable a usar para sumar costo total compra.

do{
  compra = prompt("Seleccione el producto que desea adquirir. Mouse, Monitor, Microfono, Teclado, Memoria, Mother, Procesador.");
  producto(2999, 61999, 28499, 1599, 13041, 53990, 159990);
  agregarCompra = confirm("Deseas realizar la compra de otro producto?");
} while (agregarCompra);

function producto(mouse, monitor, microfono, teclado, memoria, mother, procesador){
let mensaje = "";
  switch(compra.toLowerCase()){
    case "mouse":
      costo = precio += mouse; 
      alert(`El producto seleccionado es un ${compra} Ultra Gamer Inalambrico Dpi y su valor es $ ${costo}`);
      mensaje = `El producto seleccionado es un ${compra} Ultra Gamer Inalambrico Dpi y su valor es $ ${costo}`;
      break;
  
    case "monitor":
      costo = precio += monitor;
      alert(`El producto seleccionado es un ${compra} Samsung F22T35 y su valor es $ ${costo}`);
      mensaje = `El producto seleccionado es un ${compra} Samsung F22T35 y su valor es $ ${costo}`;
      break;
  
    case "microfono":
      costo = precio += microfono;
      alert(`El producto seleccionado es un ${compra} Shure Sv100 y su valor es $ ${costo}`);
      mensaje = `El producto seleccionado es un ${compra} Shure Sv100 y su valor es $ ${costo}`;
      break;
  
    case "teclado":
      costo = precio += teclado;
      alert(`El producto seleccionado es un ${compra} Noganet 78005 y su valor es $ ${costo}`);
      mensaje = `El producto seleccionado es un ${compra} Noganet 78005 y su valor es $ ${costo}`;
      break;  
  
    case "memoria":
      costo = precio += memoria;
      alert(`El producto seleccionado es un ${compra} Ram 8 Gb Ddr3 1600 y su valor es $ ${costo}`);
      mensaje = `El producto seleccionado es un ${compra} Ram 8 Gb Ddr3 1600 y su valor es $ ${costo}`;
      break; 
  
    case "mother":
      costo = precio += mother;
      alert(`El producto seleccionado es un ${compra} Asus Prime A320m-k y su valor es $ ${costo}`);
      mensaje = `El producto seleccionado es un ${compra} Asus Prime A320m-k y su valor es $ ${costo}`;
      break; 
  
    case "procesador":
      costo = precio += procesador;
      alert(`El producto seleccionado es un ${compra} AMD Ryzen 7 5700g y su valor es $ ${costo}`);
      mensaje = `El producto seleccionado es un ${compra} AMD Ryzen 7 5700g y su valor es $ ${costo}`;
      break;
  
  default:
    alert(`No tenemos en stock el producto ${compra} que has seleccionado!`);
    mensaje = `No tenemos en stock el producto ${compra} que has seleccionado!`;
    precio = 0;
    compra = "";
    break;
  }
document.write(`${mensaje}<br>`);
}