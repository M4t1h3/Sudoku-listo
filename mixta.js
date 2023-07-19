let arreglo = ["","","","","","","",""];

function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev)
{
    if(arreglo[parseInt(ev.target.id)] == "")
    {

    var data = ev.dataTransfer.getData("text");

    arreglo[parseInt(ev.target.id)] = data;

    ev.target.appendChild(document.getElementById(data));
    }

    if(arreglo[0] != "" && arreglo[1] != "" && arreglo[2] != "" && arreglo[3] != "" && arreglo[4] != "" && arreglo[5] != "" && arreglo[6] != "" && arreglo[7] != "")
    {

        if(arreglo[0] == "a" && arreglo[1] == "b" && arreglo[2] == "c" && arreglo[3] == "d" && arreglo[4] == "e" && arreglo[5] == "f" && arreglo[6] == "g" && arreglo[7] == "h" ) 
        {
        document.querySelector("h2").innerHTML = "Excelente...";
        }else{
        document.querySelector("h2").innerHTML = "Que Mal, intentalo de nuevo...";
        }
    }
}