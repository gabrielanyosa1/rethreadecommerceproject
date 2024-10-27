document.addEventListener('DOMContentLoaded', () => {
    try {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Helper function to safely animate elements
        const safelyAnimateElements = (selector, animation) => {
            const elements = document.querySelectorAll(selector);
            if (elements && elements.length > 0) {
                animation(elements);
                return true;
            }
            return false;
        };

        // Hero section animation
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const heroElements = {
                heading: heroContent.querySelector('h1'),
                paragraph: heroContent.querySelector('p'),
                button: heroContent.querySelector('.btn'),
                image: heroContent.querySelector('img')
            };

            const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Only animate elements that exist
            const textElements = [heroElements.heading, heroElements.paragraph].filter(Boolean);
            if (textElements.length > 0) {
                gsap.set(textElements, { opacity: 0, y: 30 });
                heroTimeline.to(textElements, {
                    duration: 0.6,
                    y: 0,
                    opacity: 1,
                    stagger: 0.2
                });
            }

            if (heroElements.button) {
                gsap.set(heroElements.button, { opacity: 0, y: 30 });
                heroTimeline.to(heroElements.button, {
                    duration: 0.6,
                    y: 0,
                    opacity: 1
                }, "-=0.4");
            }

            if (heroElements.image) {
                gsap.set(heroElements.image, { opacity: 0, x: 30 });
                heroTimeline.to(heroElements.image, {
                    duration: 0.8,
                    x: 0,
                    opacity: 1
                }, "-=0.4");
            }
        }

        // Process steps animation (How It Works page)
        safelyAnimateElements('.process-step .card', elements => {
            gsap.from(elements, {
                duration: 0.6,
                y: 30,
                opacity: 0,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.process',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // Benefits section animation
        safelyAnimateElements('.benefit-card .card', elements => {
            gsap.from(elements, {
                duration: 0.8,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.benefits',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // Products Grid Animation (Shop page)
        safelyAnimateElements('.product-card', elements => {
            gsap.from(elements, {
                duration: 0.6,
                y: 30,
                opacity: 0,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.products',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // Featured Products Carousel Animation
        const featuredCarousel = document.querySelector('#featuredCarousel');
        if (featuredCarousel) {
            const carouselItems = featuredCarousel.querySelectorAll('.carousel-item');
            
            // Initial animation for the first slide
            const firstSlideCards = carouselItems[0]?.querySelectorAll('.card');
            if (firstSlideCards?.length > 0) {
                gsap.from(firstSlideCards, {
                    duration: 0.8,
                    y: 30,
                    opacity: 0,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.featured-products',
                        start: 'top center+=100',
                        toggleActions: 'play none none reverse'
                    }
                });
            }

            // Add animation on carousel slide
            featuredCarousel.addEventListener('slide.bs.carousel', (e) => {
                const nextSlideCards = e.relatedTarget.querySelectorAll('.card');
                if (nextSlideCards.length > 0) {
                    gsap.fromTo(nextSlideCards, 
                        { opacity: 0, y: 30 },
                        { 
                            duration: 0.6,
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                            ease: 'power2.out',
                            delay: 0.3
                        }
                    );
                }
            });
        }

    } catch (error) {
        console.error('Error in GSAP animations:', error);
    }
});
