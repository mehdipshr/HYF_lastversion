
//SideBar functionality
function closeSidebar(){
  var Sidebar = document.querySelector('.sidebar');
  Sidebar.style.opacity = 1;
  Sidebar.classList.remove('nav-active');
  

}

function openSidebar(){
  const Sidebar = document.querySelector('.sidebar');
  Sidebar.style.opacity = 1;
  Sidebar.classList.toggle('nav-active');

}



var cart = [];
var totalPrice = 0;

function addToCart(productName, productPrice){
  var product= {
    name: productName,
    price: productPrice
  };
  cart.push(product);
  totalPrice += product.price; /*totalPrice = totalPrice + product.price  */
  // Update the cart items and total price in the HTML
  updateCart();
}

function updateCart(){
  var cartItemsElement = document.getElementById('cartItems');
  var totalPriceElement = document.getElementById('totalPrice');

  cartItemsElement.innerHTML = '';

  cart.forEach(function(item){
    const listItems = document.createElement('li');
    listItems.textContent = item.name + ' - $' + item.price;
    cartItemsElement.appendChild(listItems);
  })
  totalPriceElement.textContent = totalPrice.toFixed(2);

}


window.onscroll = function(){
  showScrollButton();
}
function showScrollButton(){
  var Button = document.getElementById('scrollButton');
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    Button.style.display = "block";
  }else{
    Button.style.display = "none";
  }
}

function scrollToTop(){
  var intervalId = setInterval(function(){
    if(window.scrollY === 0) {
      clearInterval(intervalId)
    }else{
      window.scrollBy(0,-100);
    }
  },15)
  // window.scrollTo(0,0)
  //window.scrollTo({
    // left: 0,
    // behavior: 'smoth'
  // })
}

