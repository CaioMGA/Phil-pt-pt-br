const fs = require('fs');
const path = require('path');

// Função para remover linhas duplicadas
function removeDuplicateLines(inputFilePath, outputFilePath) {
  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }

    // Dividindo o conteúdo do arquivo em linhas e removendo duplicatas
    const uniqueLines = [...new Set(data.split(/\r?\n/))];

    // Unindo as linhas novamente para salvar o arquivo
    const outputData = uniqueLines.join('\n');

    fs.writeFile(outputFilePath, outputData, (err) => {
      if (err) {
        console.error('Erro ao escrever o arquivo:', err);
      } else {
        console.log('Arquivo salvo sem linhas duplicadas.');
      }
    });
  });
}

// Caminhos dos arquivos de entrada e saída
const inputFilePath = path.join(__dirname, 'WL-SP.txt');  // Arquivo de entrada
const outputFilePath = path.join(__dirname, 'WL-SP-clean.txt');   // Arquivo de saída

// Executa a função
removeDuplicateLines(inputFilePath, outputFilePath);