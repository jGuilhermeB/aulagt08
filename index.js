const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const booksContainer = document.getElementById('booksContainer')

searchButton.addEventListener('click', (event) => {
    event.preventDefault()
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return; 
        fetchBooks(query)
})

function fetchBooks (query){
    const livros = [
        {
            img: './assets/cafecomd.jpg',
            titulo: 'café com deus pai',
            categoria:'desenvolvimento pessoal',
            preco: 69.99,
            desconto: false,
        },
        {
            img: './assets/rio.jpg',
            titulo: 'tudo é rio',
            categoria:'desenvolvimento pessoal',
            preco: 69.99,
            desconto: true,
        },
        {
            img: './assets/cafecomd.jpg',
            titulo: 'café com deus pai',
            categoria:'desenvolvimento pessoal',
            preco: 69.99,
            desconto: false,
        },
        {
            img: './assets/cafecomd.jpg',
            titulo: 'café com deus pai',
            categoria:'desenvolvimento pessoal',
            preco: 69.99,
            desconto: true,
        },
        {
            img: './assets/cafecomd.jpg',
            titulo: 'café com deus pai',
            categoria:'desenvolvimento pessoal',
            preco: 69.99,
            desconto: true,
        },
        {
            img: './assets/cafecomd.jpg',
            titulo: 'café com deus pai',
            categoria:'desenvolvimento pessoal',
            preco: 69.99,
            desconto: false,
        },
        {
            img: './assets/cafecomd.jpg',
            titulo: 'café com deus pai',
            categoria:'desenvolvimento pessoal',
            preco: 69.99,
            desconto: true,
        },
        {
            img: './assets/cafecomd.jpg',
            titulo: 'café com deus pai',
            categoria:'desenvolvimento pessoal',
            preco: 69.99,
            desconto: false,
        },
    ]




const livrosFiltradros = livros.filter(item =>
    item.titulo.toLowerCase().includes(query) ||
    item.categoria.toLowerCase().includes(query)

)

if (livrosFiltradros.length ===0) {
    booksContainer.innerHTML = '<h1> Nenhum livro foi encontrado </h1>'
    return
    
}

booksContainer.innerHTML = livrosFiltradros.map( item => {
    return `
     <div class="div-card">
          <div class="div-img">
            <img src="${item.img}" alt="capa" >
            <p class="tag-p">frete grátis</p>
          </div>
          <div class="div-texto">
            <div class="div-titulo">
              <h1>${item.titulo}</h1>
              <button>+</button>
            </div>
            <h2><a href="">${item.categoria}</a></h2>
            <p>${item.preco}</p>
          </div>
        </div>
    
    
    `


}).join("")
}
