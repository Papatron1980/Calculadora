
var ecuacion='';

document.getElementById("display").value='0';

function opActivo() {

    const elementos = document.querySelectorAll('.operador');
    const elementosArray = Array.from(elementos);
    return elementosArray.some(elemento => elemento.classList.contains('pressed'));
    
}

function display(event)

{
    var disp = document.getElementById("display").value;
       
    let contenido = event.target.textContent;

    if (contenido == '0' && document.getElementById("display").value=='0') return;
    if (contenido == '.' && disp.includes('.') && unpPressed(elementos)) return;
    if (contenido == '.' && document.getElementById("display").value=='0')
       contenido = "0.";
    

    { }

    if (opActivo()) 
    {    
        desactivarTodos();
        document.getElementById("display").value='0';
        display(event);
        return;   
    }

    ecuacion+=contenido;

    disp = disp == '0' ? contenido : disp + contenido;
    
    document.getElementById("display").value=disp;

    console.log("El valor de ecuacion es: ",ecuacion);
    
}




function reset()

{
   
    document.getElementById("display").value ='0';
    desactivarTodos();
    ecuacion='';
    contenido='';
    console.log("El valor de ecuacion es: ",ecuacion);
    

}

function keymap(event)

{

    if (event.key=='Enter') resultado();
    if (event.key=='Backspace') reset();
    if (event.key=='+')
    {
        var boton=document.getElementById("suma");
        boton.click(); 
    } 
    if (event.key=='-')
    {
        var boton=document.getElementById("resta");
        boton.click(); 
    } 
    if (event.key=='*')
    {
        var boton=document.getElementById("mult");
        boton.click(); 
    } 
    if (event.key=='/')
    {
        var boton=document.getElementById("div");
        boton.click(); 
    } 
    if (event.key=='.')
    {
        var boton=document.getElementById("punto");
        boton.click(); 
    } 
    if (event.key=='1')
    {
        var boton=document.getElementById("uno");
        boton.click(); 
    } 
    if (event.key=='2')
    {
        var boton=document.getElementById("dos");
        boton.click(); 
    } 
    if (event.key=='3')
    {
        var boton=document.getElementById("tres");
        boton.click(); 
    } 
    if (event.key=='4')
    {
        var boton=document.getElementById("cuatro");
        boton.click(); 
    } 
    if (event.key=='5')
    {
        var boton=document.getElementById("cinco");
        boton.click(); 
    } 
    if (event.key=='6')
    {
        var boton=document.getElementById("seis");
        boton.click(); 
    } 
    if (event.key=='7')
    {
        var boton=document.getElementById("siete");
        boton.click(); 
    } 
    if (event.key=='8')
    {
        var boton=document.getElementById("ocho");
        boton.click(); 
    } 
    if (event.key=='9')
    {
        var boton=document.getElementById("nueve");
        boton.click(); 
    } 
    if (event.key=='0')
    {
        var boton=document.getElementById("cero");
        boton.click(); 
    } 


}

function resultado()
{
    ecuacion=ecuacion.replace(/X/g, "*");
    ecuacion=ecuacion.replace(/x/g, "*");
    ecuacion=ecuacion.replace(/%/g, "/");
    let resultado = eval(ecuacion);
    resultado = parseFloat(resultado.toFixed(3));
    console.log("La ecuacion final antes de evaluar es: ",ecuacion);
    console.log("El resultado de ecuacion es: ",resultado);
    document.getElementById("display").value=resultado;
    ecuacion=resultado;
}


document.getElementById("igual").addEventListener('click',resultado);

document.addEventListener('keydown',keymap); 

document.getElementById("clear").addEventListener('click',reset);

let numero = document.getElementsByClassName("boton disp");

for (let i=0; i < numero.length; i++)
{
    numero[i].addEventListener('click',display);
}   


const elementos = document.querySelectorAll('.operador');

function desactivarTodos()
{ 
elementos.forEach(elemento => {elemento.classList.remove('pressed')});
}

function unpPressed(el)
{

el.forEach(elem => {
    if (elem.classList.contains('pressed')) {
        todosNoIncluyenClase = false;
    }
});

return todosNoIncluyenClase;

}

elementos.forEach( elemento => 
    {elemento.addEventListener('click', function()
    
    {

     const estabaActivo = this.classList.contains('pressed');

     desactivarTodos();

     if (!estabaActivo)
        {
        
         this.classList.add('pressed');
         ecuacion+=elemento.textContent;
         console.log("El valor de ecuacion es: ",ecuacion);

        }
        else
        {
            ecuacion=ecuacion.replace(elemento.textContent,"");   
            console.log("El valor de ecuacion es: ",ecuacion);
        }
    }
    
    )}); 

