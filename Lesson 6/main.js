// Lấy giỏ hàng trên local storage , nếu k có thì trả về mảng rỗng
function getCartFromLC() {
    let raw_cart = localStorage.getItem('cart');
    let cart = JSON.parse(raw_cart);
    if (cart == null) {
      cart = [];
    }
    return cart;
  }
  
  // Đẩy giỏ hàng lên local storage
  function setCartToLC(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const listBtnAddToCart = document.querySelectorAll('.btn-add-to-cart');
  for (let x of listBtnAddToCart) {
    x.onclick = function (e) {
      e.preventDefault(); // Tránh trang web bị load lại
      const posInData = x.getAttribute('data-product-id'); // vị trí của product trong mảng data
      const productSelected = product[posInData]; // lấy sản phẩm tại vị trí đã tìm được
      const cartFromLC = getCartFromLC(); // lấy giỏ hàng hiện tại ( trên local storage )
      cartFromLC.push(productSelected); // thêm sản phẩm vừa chọn vào giỏ hàng
      setCartToLC(cartFromLC); // cập nhật giỏ hàng ( lên local storage )
    };
  }