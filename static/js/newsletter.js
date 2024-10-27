document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');
    const messageDiv = document.getElementById('newsletter-message');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i data-feather="loader" class="loader"></i> Subscribing...';
            submitButton.disabled = true;
            
            try {
                const formData = new FormData(newsletterForm);
                const response = await fetch('/subscribe-newsletter', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                // Show message
                messageDiv.textContent = data.message;
                messageDiv.className = `mt-3 ${data.success ? 'success' : 'error'}`;
                messageDiv.style.display = 'block';
                
                // Clear form if successful
                if (data.success) {
                    newsletterForm.reset();
                }
            } catch (error) {
                messageDiv.textContent = 'An error occurred. Please try again.';
                messageDiv.className = 'mt-3 error';
                messageDiv.style.display = 'block';
            } finally {
                // Reset button state
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                feather.replace();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
            }
        });
    }
});
