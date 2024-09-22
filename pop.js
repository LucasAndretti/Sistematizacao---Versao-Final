document.getElementById('salvar').addEventListener('click', () => {
    const nota = document.getElementById('nota').value;
    chrome.storage.sync.set({ 'nota': nota }, function() {
      alert('Nota salva!');
    });
  });
  
  window.onload = function() {
    chrome.storage.sync.get('nota', function(data) {
      if (data.nota) {
        document.getElementById('nota').value = data.nota;
      }
    });
  };

  