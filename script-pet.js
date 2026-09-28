const petForm = document.getElementById('petForm');

petForm.addEventListener('submit', async (e) => {
    e.preventDefault();


    const formData = new FormData();
    
    
    formData.append('tutor', document.getElementById('tutor').value.trim());
    formData.append('nome_pet', document.getElementById('nomepet').value.trim());
    formData.append('raca', document.getElementById('raca').value.trim());
    formData.append('genero', document.getElementById('genero').value.trim());
    formData.append('peso', document.getElementById('peso').value.trim());
    formData.append('idade', document.getElementById('idade').value.trim());

    const imagemInput = document.getElementById('imagem');
    if (imagemInput && imagemInput.files[0]) {
        formData.append('imagem', imagemInput.files[0]);
    }

    try {
        const response = await fetch('http://localhost:3000/api/peyts', {
            method: 'POST',
            body: formData 
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            petForm.reset();
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Não foi possivel conectar ao servidor.');
    }
});











