document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const response = await axios.post('/submit', { name, email });
        console.log(response.data);
        alert('Form submitted successfully');
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form');
    }
});
