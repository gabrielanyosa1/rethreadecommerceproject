document.addEventListener('DOMContentLoaded', () => {
    // Initialize filter elements only if we're on the shop page
    const searchInput = document.querySelector('.search-input');
    const filters = {
        search: searchInput,
        category: document.querySelector('.category-filter'),
        condition: document.querySelector('.condition-filter'),
        price: document.querySelector('.price-filter')
    };

    // Exit if not on shop page (prevent errors on other pages)
    if (!searchInput) {
        return;
    }

    const productCards = document.querySelectorAll('.product-card');

    // Debug logging function
    const logFilterOperation = (filterType, value, matchedCards) => {
        console.log(`Filter Operation - ${filterType}:`, {
            value: value,
            matchedCards: matchedCards,
            totalCards: productCards.length
        });
    };

    const filterProducts = () => {
        try {
            // Get filter values with fallbacks
            const searchTerm = (filters.search && filters.search.value) ? filters.search.value.toLowerCase() : '';
            const selectedCategory = (filters.category && filters.category.value) ? filters.category.value : 'all';
            const selectedCondition = (filters.condition && filters.condition.value) ? filters.condition.value : 'all';
            const selectedPrice = (filters.price && filters.price.value) ? filters.price.value : 'all';

            console.log('Starting filter operation with criteria:', {
                search: searchTerm,
                category: selectedCategory,
                condition: selectedCondition,
                price: selectedPrice
            });

            let visibleCards = 0;

            productCards.forEach(card => {
                let showCard = true;
                const cardData = {
                    title: card.dataset.title ? card.dataset.title.toLowerCase() : '',
                    category: card.dataset.category || '',
                    condition: card.querySelector('.badge') ? card.querySelector('.badge').textContent.toLowerCase() : '',
                    price: parseFloat(card.querySelector('.h5') ? card.querySelector('.h5').textContent.replace('$', '') : '0')
                };

                // Search filter
                if (searchTerm) {
                    const cardText = cardData.title + ' ' + (card.querySelector('.card-text') ? card.querySelector('.card-text').textContent.toLowerCase() : '');
                    showCard = cardText.includes(searchTerm);
                    logFilterOperation('Search', searchTerm, showCard);
                }

                // Category filter
                if (showCard && selectedCategory !== 'all') {
                    showCard = cardData.category === selectedCategory;
                    logFilterOperation('Category', selectedCategory, showCard);
                }

                // Condition filter
                if (showCard && selectedCondition !== 'all') {
                    const normalizedCondition = cardData.condition.replace('-', ' ').toLowerCase();
                    showCard = normalizedCondition === selectedCondition.toLowerCase();
                    logFilterOperation('Condition', selectedCondition, showCard);
                }

                // Price filter
                if (showCard && selectedPrice !== 'all') {
                    const [min, max] = selectedPrice.split('-').map(val => val === '+' ? Infinity : parseFloat(val));
                    showCard = cardData.price >= min && (max === Infinity || cardData.price <= max);
                    logFilterOperation('Price', `${min}-${max}`, showCard);
                }

                // Apply visibility with animation
                if (showCard) {
                    card.style.display = 'block';
                    gsap.to(card, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    visibleCards++;
                } else {
                    gsap.to(card, {
                        opacity: 0,
                        y: 20,
                        duration: 0.3,
                        ease: 'power2.in',
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });

            console.log('Filter operation completed:', {
                visibleCards: visibleCards,
                hiddenCards: productCards.length - visibleCards
            });
        } catch (error) {
            console.error('Error in filterProducts:', error);
        }
    };

    // Add event listeners with debounce for better performance
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const debouncedFilter = debounce(filterProducts, 300);

    // Bind events only if elements exist
    if (filters.search) filters.search.addEventListener('input', debouncedFilter);
    if (filters.category) filters.category.addEventListener('change', filterProducts);
    if (filters.condition) filters.condition.addEventListener('change', filterProducts);
    if (filters.price) filters.price.addEventListener('change', filterProducts);

    // Initialize product cards with animation
    productCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });

    // Run initial filter
    filterProducts();
});
