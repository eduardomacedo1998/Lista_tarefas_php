function getDataFromPHP(tag1 , tag2) {
    fetch('../select.php')
      .then(response => response.json())
      .then(data => {
        
         const ul = document.getElementById("ul")



        data.forEach(item => {

            const html1 = document.createElement(tag1)
            html1.textContent = `tarefas: ${item.tarefa}`;

            const html2 = document.createElement(tag2)
            html2.textContent = `status: ${item.verificacao}`;

          ul.appendChild(html1)
          ul.appendChild(html2)
            
        });
  
        // Exibindo o valor total em uma div com id 'total'
      })
      .catch(error => console.error('Erro ao obter os dados:', error));
  }
  
  
  // Chama a função para obter os dados do PHP assim que a página carrega
  getDataFromPHP("h2","p");
  
