function criaConversorvelocidade(){
    
    //mude o nome da função acima
    //Copie e cole esse arquivo e faça as alterações pedidas
  
    
    

    var nome = window.document.getElementById('escolha')

    nome.innerHTML= `Conversor de Comprimento`



    var inputtype = window.document.getElementById('inputtype')
    var outputype =  window.document.getElementById('outputype')
    var input = window.document.getElementById('input')
    var resultado = window.document.getElementById('resultado')

    //mude o nome da função

    inputtype.setAttribute("onchange","conversor_comprimento()")
    outputype.setAttribute("onchange","conversor_comprimento()")
    input.setAttribute("oninput","conversor_comprimento()")
    resultado.setAttribute("oninput","conversor_comprimento()")
    
    inputtype.innerHTML=''
    outputype.innerHTML=''


    //Aqui começa a colocar as opções. Altere as opções entre parenteses na direita
    //value e option se mantém
    

    var option1 = window.document.createElement('option','quilômetro')
    option1.setAttribute('value','quilômetro')
    option1.text='Quilômetro'
    inputtype.appendChild(option1)

    var option2 = window.document.createElement('option','metro')
    option2.setAttribute('value','metro')
    option2.text='metro'
    inputtype.appendChild(option2)

    var option3 = window.document.createElement('option','decímetro')
    option3.setAttribute('value','decímetro')
    option3.text='decímetro'
    inputtype.appendChild(option3)

    var option4 = window.document.createElement('option','centímetro')
    option4.setAttribute('value','centímetro')
    option4.text='centímetro'
    inputtype.appendChild(option4)

    var option5 = window.document.createElement('option','milímetro')
    option5.setAttribute('value','milímetro')
    option5.text='milímetro'
    inputtype.appendChild(option5)

    var option6 = window.document.createElement('option','micrômetro')
    option6.setAttribute('value','micrômetro')
    option6.text='micrômetro'
    inputtype.appendChild(option6)

    var option7 = window.document.createElement('option','légua')
    option7.setAttribute('value','légua')
    option7.text='légua'
    inputtype.appendChild(option7)

    var option8 = window.document.createElement('option','milha')
    option8.setAttribute('value','milha')
    option8.text='milha'
    inputtype.appendChild(option8)

    var option9 = window.document.createElement('option','jarda')
    option9.setAttribute('value','jarda')
    option9.text='jarda'
    inputtype.appendChild(option9)

    var option10 = window.document.createElement('option','pé')
    option10.setAttribute('value','pé')
    option10.text='pé'
    inputtype.appendChild(option10)

    var option11 = window.document.createElement('option','polegada')
    option11.setAttribute('value','polegada')
    option11.text='polegada'
    inputtype.appendChild(option11)



    var option1 = window.document.createElement('option','quilômetro')
    option1.setAttribute('value','quilômetro')
    option1.text='Quilômetro'
    outputype.appendChild(option1)

    var option2 = window.document.createElement('option','metro')
    option2.setAttribute('value','metro')
    option2.text='metro'
    outputype.appendChild(option2)

    var option3 = window.document.createElement('option','decímetro')
    option3.setAttribute('value','decímetro')
    option3.text='decímetro'
    outputype.appendChild(option3)

    var option4 = window.document.createElement('option','centímetro')
    option4.setAttribute('value','centímetro')
    option4.text='centímetro'
    outputype.appendChild(option4)

    var option5 = window.document.createElement('option','milímetro')
    option5.setAttribute('value','milímetro')
    option5.text='milímetro'
    outputype.appendChild(option5)

    var option6 = window.document.createElement('option','micrômetro')
    option6.setAttribute('value','micrômetro')
    option6.text='micrômetro'
    outputype.appendChild(option6)

    var option7 = window.document.createElement('option','légua')
    option7.setAttribute('value','légua')
    option7.text='légua'
    outputype.appendChild(option7)

    var option8 = window.document.createElement('option','milha')
    option8.setAttribute('value','milha')
    option8.text='milha'
    outputype.appendChild(option8)

    var option9 = window.document.createElement('option','jarda')
    option9.setAttribute('value','jarda')
    option9.text='jarda'
    outputype.appendChild(option9)

    var option10 = window.document.createElement('option','pé')
    option10.setAttribute('value','pé')
    option10.text='pé'
    outputype.appendChild(option10)

    var option11 = window.document.createElement('option','polegada')
    option11.setAttribute('value','polegada')
    option11.text='polegada'
    outputype.appendChild(option11)

    //---------------------------------------------------------

}