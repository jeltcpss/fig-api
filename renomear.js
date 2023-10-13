const fs = require('fs');
const path = require('path');

// Pasta onde estão os arquivos que você deseja renomear
const pastaDeOrigem = './figurinhas';

fs.readdir(pastaDeOrigem, (err, files) => {
  if (err) {
    console.error('Erro ao ler a pasta:', err);
    return;
  }

  // Inicialize um contador
  let contador = 1;

  // Itere sobre os arquivos na pasta
  for (const file of files) {
    const extensao = path.extname(file); // Obtém a extensão do arquivo
    const novoNome = `f${contador}${extensao}`; // Novo nome com "f" na frente do número sequencial

    const arquivoAntigo = path.join(pastaDeOrigem, file);
    const arquivoNovo = path.join(pastaDeOrigem, novoNome);

    fs.renameSync(arquivoAntigo, arquivoNovo);

    contador++; // Incrementa o contador para o próximo arquivo
  }

  console.log('Nomes antigos apagados e arquivos renomeados com sucesso!');
});
