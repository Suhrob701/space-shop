const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productList = Array.from(document.querySelectorAll('.card-content')); // Преобразуем NodeList в массив
const noResultMessage = document.getElementById('noResultMessage');

function searchProduct() {
  const searchValue = searchInput.value.toLowerCase().trim();

  const filterProducts = productList.filter(product => {
    const productName = product.getAttribute('data-name').toLowerCase();
    return productName.includes(searchValue);
  });

  // Barcha mahsulotlarni yashirish
  productList.forEach(product => product.style.display = 'none');

  // Filtrlangan mahsulotlarni ko'rsatish
  filterProducts.forEach(product => product.style.display = 'flex'); // "block" emas, "flex" ishlatiladi

  // Natija yo'q xabarini ko'rsatish yoki yashirish
  noResultMessage.style.display = filterProducts.length ? 'none' : 'block';
}

// Qidiruv tugmasiga hodisani qo'shish
searchButton.addEventListener('click', searchProduct);
searchInput.addEventListener('keyup', searchProduct);
