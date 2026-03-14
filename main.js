class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const { image, title, price } = this.dataset;
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .content {
                    padding: 1rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                h3 {
                    margin: 0 0 0.5rem 0;
                    font-size: 1.25rem;
                    color: #333;
                }
                p {
                    margin: 0 0 1rem 0;
                    font-size: 1.1rem;
                    color: #007bff;
                    font-weight: bold;
                }
                .button-container {
                    margin-top: auto;
                }
                button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 100%;
                    font-size: 1rem;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="card">
                <img src="${image}" alt="${title}">
                <div class="content">
                    <h3>${title}</h3>
                    <p>${price}원</p>
                    <div class="button-container">
                        <button>장바구니 담기</button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);

const products = [
    {
        image: 'https://via.placeholder.com/300x200.png?text=수학의+정석',
        title: '수학의 정석',
        price: '25,000'
    },
    {
        image: 'https://via.placeholder.com/300x200.png?text=쎈+수학',
        title: '쎈 수학',
        price: '22,000'
    },
    {
        image: 'https://via.placeholder.com/300x200.png?text=개념원리',
        title: '개념원리',
        price: '23,000'
    },
    {
        image: 'https://via.placeholder.com/300x200.png?text=RPM',
        title: 'RPM',
        price: '18,000'
    },
    {
        image: 'https://via.placeholder.com/300x200.png?text=블랙라벨',
        title: '블랙라벨',
        price: '28,000'
    },
    {
        image: 'https://via.placeholder.com/300x200.png?text=일품',
        title: '일품',
        price: '26,000'
    }
];

const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const productCard = document.createElement('product-card');
    productCard.dataset.image = product.image;
    productCard.dataset.title = product.title;
    productCard.dataset.price = product.price;
    productGrid.appendChild(productCard);
});
