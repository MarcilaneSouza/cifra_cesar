function confirma() {
        var selectContent = document.getElementById("id_select").value;
        var textAreaContent = document.getElementById("id_textarea").value;
        var deslocamento = document.getElementById ("deslocamento_id").value;
        var resultadoArea = document.getElementById("resultado_id");
        var radio = document.getElementById("codificador").checked; 
    
    if(selectContent == "base64"){
        if (radio == true){
            resultadoArea.innerHTML = codificadorBase64(textAreaContent);
        }else{
            resultadoArea.innerHTML = decodificadorBase64(textAreaContent);
        }
    }else if(selectContent == "cesar"){
        if (radio == true){
            resultadoArea.innerHTML = codificadorCesar(textAreaContent.toLowerCase(),parseInt(deslocamento));
        }else{
            resultadoArea.innerHTML = decodificadorCesar(textAreaContent.toLowerCase(),parseInt(deslocamento));
        }
    }
}

function codificadorCesar(palavra, deslocamento){
    var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z'];
    var resultado = "";
    var contador = 0;
    for(let i = 0; i < letras.length; i++){
        if(letras[i] == palavra[contador]){
            contador++;
            resultado = resultado + letras[i+deslocamento];
            i = -1;
        }
    }
    return resultado;
}
function decodificadorCesar(palavra, deslocamento){
    var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z']
    var resultado = "";
    var contador = 0;
    for(let i = 26; i < letras.length; i++){
        if(letras[i] == palavra[contador]){
            contador++;
            resultado = resultado + letras[i-deslocamento];
            i = 26;
        }
    }
    return resultado;

}

function codificadorBase64(palavra){
    var resultado = btoa(palavra)
    return resultado;
}

function decodificadorBase64(palavra){
    var resultado = atob(palavra)
    return resultado;
}
















/*function cifraCesar() {
    var frase = "";
    var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var frase = document.getElementById('frase').value.toLowerCase();
    var deslocamento = Document.getElementById('chave').value;
    var x = parseInt(deslocamento);
    var keep = [];
    
    for (var i = 0; i < frase.length; i++); {
        if (frase[i] != '') {
            for (var j = 0; j < alfabeto.length; j++) {
                if (frase[i] == alfabeto[j]) {
                    keep[i] = alfabeto[(j + x) % alfabeto.length];
                }
            }
        } else {
            keep[i] = ' ';
        };
    };
    
    let codigo = keep.join("");
    document.getElementById('resultado').innerHTML = `A msg é' : ${codigo}`
     
}; */