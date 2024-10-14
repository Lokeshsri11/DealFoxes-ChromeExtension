document.addEventListener('DOMContentLoaded', function() {
    const couponContainer = document.getElementById('coupon-container');
  
    // Example coupon data (you can replace this with an API call to your website)
    const coupons = [
      { title: '10% OFF at Nike', code: 'NIKE10' },
      { title: '20% OFF at Adidas', code: 'ADIDAS20' },
      { title: 'Free Shipping at Amazon', code: 'SHIPFREE' }
    ];
  
    coupons.forEach(coupon => {
      const couponElement = document.createElement('div');
      couponElement.className = 'coupon';
      couponElement.innerHTML = `
        <h3>${coupon.title}</h3>
        <p>Use code: <strong>${coupon.code}</strong></p>
      `;
      couponContainer.appendChild(couponElement);
    });
  });
  