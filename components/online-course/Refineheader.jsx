import React ,{useState ,useEffect}from 'react'
import Courses from './Courses';
import { useCart } from './CartContext';

export default function Refineheader({TableState  }) {
    const [activeSort, setActiveSort] = useState(''); 
    const [FilterTable, setFilterTable] = useState(true);
    // const [cartItems, setCartItems] = useState([]);
    const [shoppingCart, setShoppingCart] = useState(false);

    const { state, toggleCourseInCart } = useCart();
    const cartItems = state.cartItems;
  
    const handleRemoveFromCart = (course) => {
      toggleCourseInCart(course);
    };
  
    
    const handleSortCoursesBySales = () => {
        Courses.sortCoursesBySales(); 
        setActiveSort('sales'); 
      };
      const handleSortCoursesByDate = () => {
        Courses.sortCoursesByDate(); 
        setActiveSort('date');
      };
      const handleSortCoursesByRating = () => {
        Courses.sortCoursesByRating(); 
        setActiveSort('rating');
      };
      const handleSortCoursesByPrice = () => {
        Courses.sortCoursesByPrice();
        setActiveSort('price');  
      };
    const toggleFilterTable=()=>{
     setFilterTable(!FilterTable)
     TableState(FilterTable);  
        }






    const toggleShoppingCart =()=>{
      setShoppingCart(!shoppingCart);
      if(!shoppingCart){
        document.documentElement.style.overflowY = "hidden";
      }
      else{
        document.documentElement.style.overflowY = "scroll";
      }
    }
    const removeItem = (itemId) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
    };
    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => {
        const itemPrice = item.price === 'free' ? 0 : item.price;
        
        return total + itemPrice * item.quantity;
      }, 0);
    };
  
    const proceedToCheckout = () => {
      alert('Proceeding to checkout. Implement your checkout logic here.');
      console.log(cartItems)
    };

    
  return (
    <div className='col-md-12 ' >
            <div className="refineheader p-2">
                <div className="row mb-5 me-3 ms-3">
                    <div className="col-12 d-flex justify-content-between mb-3">
                            <div>
                                <button className="filter-refine" onClick={toggleFilterTable} >
                                     <i class="fa-solid fa-filter"></i>
                                     Filter & Refine
                                </button>
                            </div>
                         <button className='reset'onClick={() => window.location.reload()} >
                         <i class="fa-solid fa-arrows-rotate"></i>
                         Reset
                         </button>
                    </div>
                    <div className="col-12 d-flex justify-content-end gap-2">
                        <button className={`best-seller ${activeSort === 'sales' ? 'active' : ''}`}  onClick={handleSortCoursesBySales} >
                            Best Seller
                        </button>

                        <button className={`newest ${activeSort === 'date' ? 'active' : ''}`} onClick={handleSortCoursesByDate}>Newest</button>
                        <button className={`best-rated ${activeSort === 'rating' ? 'active' : ''}`} onClick={handleSortCoursesByRating}>Best Rated</button>
                        <button className={`price ${activeSort === 'price' ? 'active' : ''}`} onClick={handleSortCoursesByPrice}>
                        <i class="fa-solid fa-arrow-right-arrow-left fa-rotate-90"></i>
                            Price
                        </button>
                        <button className='cart' onClick={toggleShoppingCart}>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>{cartItems.length}</span>
                        </button>
                    </div>
                </div>
            </div>
            {shoppingCart && ( <div className='shopping-cart-model'>
            <div className='overlay d-flex justify-content-center'> 
            <button className='close-model'onClick={toggleShoppingCart}>
               <i className="fas fa-close"></i>
            </button>
            <div className="shopping-cart-content container">
  <h2 className='mb-5'>Your Shopping Cart</h2>
  <ul className="cart-list">
    {cartItems.length > 0 ? (
      cartItems.map((item, index) => (
        <li key={index}>
          <div className="item-details d-flex w-100 justify-content-between">
            <div className="d-flex">
            <img src={`${item.url}`} alt={`${item.title}`} />
            <div className="d-flex justify-content-between flex-column">
              <div className="ms-2">
                <p className='title'>{item.title}</p>
                <p>by {item.teacher}</p>
              </div>
              <p className='ms-2 mb-0'>{`${item.price === 'free' ? 'free' : '$'+item.price }`}</p>
            </div>
            </div>
            <button className='btn' onClick={() => handleRemoveFromCart(item)}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      ))
    ) : (
      <h3>There are no items yet.</h3>
    )}
  </ul>

  <p>Total Price: ${calculateTotalPrice()}</p>
  <button
    className='btn proceed-to-checkout'
    onClick={proceedToCheckout}
    disabled={cartItems.length === 0} // Disable the button if the cart is empty
  >
    Proceed to Checkout
  </button>
</div>

            </div>    
        </div>)}
    </div>
  )
}
