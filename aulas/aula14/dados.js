fetch("./dados.json")
    .then(response => response.json())
    .then(users => {
        

        // Itera sobre os usuários
        for (const user in users) {
            const titulo = document.querySelector(".tiuloluis");
            titulo.textContent = user;

            // Itera sobre as propriedades de cada usuário
            for (const propriedade of users[user]) {

                const pnome = document.createElement('p');
                pnome.innerText = propriedade.nome;
                const pidade = document.createElement('p');
                pidade.innerText = propriedade.idade;
                const pcpf = document.createElement('p');
                pcpf.innerText = propriedade.cpf;
                const ptelefone = document.createElement('p');
                ptelefone.innerText = propriedade.telefone;
                

                document.querySelector(".pusers").appendChild(pnome);
                document.querySelector(".pusers").appendChild(pidade);
                document.querySelector(".pusers").appendChild(pcpf);
                document.querySelector(".pusers").appendChild(ptelefone);
            }
        }
    });
