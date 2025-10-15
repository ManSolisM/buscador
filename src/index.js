import { highlightAndCount } from './buscar.js';

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const textArea = document.getElementById('textArea');
const countSpan = document.getElementById('count');
const highlightedText = document.getElementById('highlightedText');

function performSearch() {
    const searchTerm = searchInput.value;
    const text = textArea.value;

    if (!text.trim()) {
        highlightedText.innerHTML = '<p style="color: #999;">Ingresa un texto para buscar</p>';
        countSpan.textContent = '0';
        return;
    }

    const { highlighted, count } = highlightAndCount(text, searchTerm);
    
    countSpan.textContent = count;
    highlightedText.innerHTML = highlighted || '<p style="color: #999;">No hay texto que mostrar</p>';
}

searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

textArea.addEventListener('input', () => {
    if (searchInput.value.trim()) {
        performSearch();
    }
});