// JavaScript for Modern CV Portfolio

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Bootstrap modal
    const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
    
    // Get button elements
    const viewContactBtn = document.getElementById('viewContactBtn');
    const downloadCVBtn = document.getElementById('downloadCVBtn');
    
    // View Contact button click event
    viewContactBtn.addEventListener('click', function() {
        // Show contact modal
        contactModal.show();
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Download CV button click event
    downloadCVBtn.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);

        // URL ของไฟล์ CV (แก้เป็นลิงก์ไฟล์จริงของคุณ)
        const cvUrl = 'assets/662110164_cv.png';

        // สร้างลิงก์ดาวน์โหลดชั่วคราว
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = '662110164_cv.png'; // ชื่อไฟล์ที่จะดาวน์โหลด
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // แสดง alert ว่ากำลังดาวน์โหลด
        showAlert('success', 'CV กำลังดาวน์โหลด...', 'ไฟล์ CV จะถูกดาวน์โหลดในอีกสักครู่');
    });
    
    // Add scroll animations
    addScrollAnimations();
    
    // (Effect particle ตัดออก ตามคำขอของคุณ)
});

// Function to show custom alerts
function showAlert(type, title, message) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = `
        top: 20px; 
        right: 20px; 
        z-index: 9999; 
        min-width: 300px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.9);
    `;
    
    alertDiv.innerHTML = `
        <strong>${title}</strong><br>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (alertDiv && alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 4000);
}

// Function to add scroll animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = Math.random() * 0.5 + 's';
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all cards and contact items
    document.querySelectorAll('.glass-card, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Remove skill pill hover and timeline item animations ifต้องการก็ตัดเองครับ

// Console message for developers
console.log(`
✨ Modern CV Portfolio Loaded Successfully!
📧 Contact: somchai@email.com
💻 Built with Bootstrap 5 & Modern CSS
🎨 Featuring Glass Morphism & Gradient Design
`);
