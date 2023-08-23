function getDataFromPHP(tag1 , tag2) {
    fetch('../select.php')
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

            button_excluir.addEventListener("click",()=>{ // função btn excluir

              div.style.display = "none";

            })



            const button_finalizar = document.createElement("button") // botão finalizar
            button_finalizar.innerHTML = "finalizar";

            button_finalizar.addEventListener("click", ()=>{ // função btn finalizar
              
              div.style.display = "none";
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
  

  // Chama a função para obter os dados do PHP assim que a página carrega
  getDataFromPHP("h2","p");
  
