import './logo.png';
import '../styles/DashComponent.css'
import './images/cartimg1.png'
import './images/cartimg2.png'
import './images/cartimg3.png'
import './images/cartimg4.png'
import './images/cartimg5.png'
import './images/cartimg6.png'
import './images/cartimg7.png'
import './images/cartimg8.png'
import 'bootstrap/dist/css/bootstrap.css';
function DashComponent()
{
    return(
        <>
        <link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /> 
        <div className="headertag">
            <img src={require('./logo.png')} alt="logo" width="60px" height="50px"/>
            <h1 className="title">FurniHaven</h1>
        </div>
        <ul class="navbar">
            <li><a class="active" href="/home"><i class="bi bi-house"></i> Home</a></li>
            <li><a href="/contact"><i class="bi bi-telephone"></i> ADD PRODUCT</a></li>
            <li class="right"><a href="/cart"><i class="bi bi-cart4"> </i>DELETE PRODUCT</a></li>
            <li class="right"><a href="/cart"><i class="bi bi-cart4"> </i>EDIT PRODUCT</a></li>
            <li class="right"><a href="/admin/orders"><i class="bi bi-cart-check"></i> Orders</a></li>
            <li class="right"><a href="/logout"><i class="bi bi-box-arrow-left"></i> Logout</a></li>
        </ul>
        <div className="name">
            <h1 className='tag'>ADMIN PRODUCTS</h1>
        </div>
        <div className="cardgroup">
            <div class="card">
                <img src={require('./images/cartimg2.png')}  class="card-img-top" alt="." width="4rem" height="240rem"/>
                <div class="card-body">
                    <h5 class="card-title">Fabric Sofa Set</h5>
                    <p class="card-text"><small>Elegant, comfortable fabric sofa set: durable, stylish, customizable, and easy maintenance.</small></p>
                    <div className="btns">
                        <button id="submitButton" className="cartbtn">Add To Cart</button>
                        <button id="submitButton" className='buybtn'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='card'>
            <img src={require('./images/cartimg3.png')}  class="card-img-top" alt="." width="4rem" height="240rem"/>
                <div class="card-body">
                    <h5 class="card-title">Accent ArmChair</h5>
                    <p class="card-text"><small>Stylish, comfortable accent armchair: durable, versatile, elegant, and easy maintenance.</small></p>
                    <div className="btns">
                        <button id="submitButton" className="cartbtn">Add To Cart</button>
                        <button id="submitButton" className='buybtn'>Buy Now</button>
                    </div>
                </div>
            </div> 
            <div className='card'>
            <img src={require('./images/cartimg4.png')}  class="card-img-top" alt="." width="4rem" height="240rem"/>
                <div class="card-body">
                    <h5 class="card-title">Chair</h5>
                    <p class="card-text"><small>Comfortable, stylish chair: durable and versatile, with elegant design, perfect for enhancing any space.</small></p>
                    <div className="btns">
                        <button id="submitButton" className="cartbtn">Add To Cart</button>
                        <button id="submitButton" className='buybtn'>Buy Now</button>
                    </div>
                </div>
            </div> 
            <div className='card'>
            <img src={require('./images/cartimg5.png')}  class="card-img-top" alt="." width="4rem" height="240rem"/>
                <div class="card-body">
                    <h5 class="card-title">L Shaped Sofa</h5>
                    <p class="card-text"><small>Spacious L-shaped sofa: stylish, comfortable, perfect for maximizing seating and enhancing decor.</small></p>
                    <div className="btns">
                        <button id="submitButton" className="cartbtn">Add To Cart</button>
                        <button id="submitButton" className='buybtn'>Buy Now</button>
                    </div>
                </div>
            </div> 
            <div className='card'>
            <img src={require('./images/cartimg6.png')}  class="card-img-top" alt="." width="4rem" height="240rem"/>
                <div class="card-body">
                    <h5 class="card-title">Fabric Sofa Set</h5>
                    <p class="card-text"><small>Elegant, comfortable fabric sofa set: durable, stylish, customizable, and easy maintenance.</small></p>
                    <div className="btns">
                        <button id="submitButton" className="cartbtn">Add To Cart</button>
                        <button id="submitButton" className='buybtn'>Buy Now</button>
                    </div>
                </div>
            </div> 
            <div className='card'>
            <img src={require('./images/cartimg7.png')}  class="card-img-top" alt="." width="4rem" height="240rem"/>
                <div class="card-body">
                    <h5 class="card-title">Vogue Table</h5>
                    <p class="card-text"><small>The Vogue Table: elegant, modern design with durable construction, perfect for enhancing any living space.</small></p>
                    <div className="btns">
                        <button id="submitButton" className="cartbtn">Add To Cart</button>
                        <button id="submitButton" className='buybtn'>Buy Now</button>
                    </div>
                </div>
            </div> 
            <div className='card'>
            <img src={require('./images/cartimg8.png')}  class="card-img-top" alt="." width="4rem" height="240rem"/>
                <div class="card-body">
                    <h5 class="card-title">Lounge Chair</h5>
                    <p class="card-text"><small>Luxurious lounge chair: ergonomic design, ultimate comfort, and style, ideal for relaxing in any space.</small></p>
                    <div className="btns">
                        <button id="submitButton" className="cartbtn">Add To Cart</button>
                        <button id="submitButton" className='buybtn'>Buy Now</button>
                    </div>
                </div>
            </div> 
            <div className='card'>
            <img src={require('./images/cartimg1.png')}  class="card-img-top" alt="." width="4rem" height="240rem"/>
                <div class="card-body">
                    <h5 class="card-title">ArmChair</h5>
                    <p class="card-text"><small>Comfortable and stylish armchair: durable, perfect for relaxing and enhancing any living space.</small></p>
                    <div className="btns">
                        <button id="submitButton" className="cartbtn">Add To Cart</button>
                        <button id="submitButton" className='buybtn'>Buy Now</button>
                    </div>
                </div>
            </div> 
        </div>
        <footer class="bg-body-tertiary text-center" id="footertag">
  		<div class="container p-4 pb-0" id="links">
    		<section class="mb-4">
			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: '#3b5998' }}
  				href="#!"
  				role="button"
			>
  			<i className="fab fa-facebook-f"></i>
			</a>

			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: '#55acee' }}
  				href="#!"
  				role="button"
			>
  				<i className="fab fa-twitter"></i>
			</a>

			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: '#dd4b39' }}
  				href="#!"
  				role="button"
			>
  				<i className="fab fa-google"></i>
			</a>

	  		<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: "#ac2bac" }}
  				href="#!"
  				role="button"
			>
  			<i className="fab fa-instagram"></i>
			</a>

			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#0082ca"}}
  				href="#!"
  				role="button"
			>
  				<i className="fab fa-linkedin-in"></i>
			</a>

			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: "#333333" }}
  				href="#!"
  				role="button"
			>
  				<i className="fab fa-github"></i>
			</a>

    	</section>
  	</div>
  <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
  © 2024 Copyright:
  <a className="text-body" href="https://furnihaven.com/">FurniHaven.com</a>
</div>
</footer>
        </>
    );
}
export default DashComponent;