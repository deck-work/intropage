const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const iframeContent = document.getElementById('iframeContent');

openModalBtn.addEventListener('click', () => {
  const iframeSource = 'https://www.example.com'; // Replace with your iframe source URL
  iframeContent.src = iframeSource;
  modal.style.display = 'block';
});

function closeModal() {
  modal.style.display = 'none';
}