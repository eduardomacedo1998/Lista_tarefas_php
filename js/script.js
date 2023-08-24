function getDataFromPHP(tag1 , tag2) {//função principal com rederização de elementos e chamada de funções externas
    fetch('../php/select.php')
      .then(response => response.json())
      .then(data => {
        
         const ul = document.getElementById("ul")



        data.forEach(item => {
            
            const div = document.createElement("div")  // div de cada tarefa
            div.setAttribute("class", "divtarefa");

            const html1 = document.createElement(tag1)  // nome da tarefa
            html1.textContent = `tarefas: ${item.tarefa}`;

            const html2 = document.createElement(tag2) // status da terefa
            html2.textContent = `status: ${item.verificacao}`;




            const divBotoes = document.createElement("div")  // div dos botões
            divBotoes.setAttribute("class", "divbotoes");

            const button_excluir = document.createElement("button") // botão excluir
            button_excluir.innerHTML = "excluir";

            logica_excluir(button_excluir,item.id)

            const button_finalizar = document.createElement("button") // botão finalizar
            button_finalizar.innerHTML = "finalizar";

            logica_finalizar(button_finalizar,div)

            button_finalizar.addEventListener("click", ()=>{ // função btn finalizar

              div.style.backgroundColor = "green"

              
            })
          
          
          div.appendChild(html1)
          div.appendChild(html2)
          divBotoes.appendChild(button_excluir)
          divBotoes.appendChild(button_finalizar)
          div.appendChild(divBotoes)
          



          ul.appendChild(div)
          
            
        });
  
        // Exibindo o valor total em uma div com id 'total'
      })
      .catch(error => console.error('Erro ao obter os dados:', error));
  }
  
function logica_excluir(button_excluir,id){ // função btn excluir, toda loja excluir encaposulada aqui

  button_excluir.addEventListener("click",()=>{ 

    const dados = {
         id : id
    };

    $.ajax({
      url: '../php/delet.php', // Substitua pelo nome do arquivo PHP que irá receber os dados
      type: 'POST', // Ou 'GET' se preferir uma solicitação GET
      data: dados, // Os dados a serem enviados para o servidor
      dataType: 'json',
      success: function(data) {
          // Manipule a resposta JSON recebida do servidor aqui.
          console.log('Resposta do servidor:', data);

      },
      error: function(xhr, status, error) {
          console.log('Erro na requisição AJAX:', error);
      }
  });
  
  location.reload();

  })}


function logica_finalizar(button_finalizar,div){ // função btn finalizar, toda logica encaposulada aqui

    button_finalizar.addEventListener("click",()=>{ 
  
      div.style.backgroundColor = "green"
  
  
    })}


  // Chama a função para obter os dados do PHP assim que a página carrega
  getDataFromPHP("h2","p");
  
