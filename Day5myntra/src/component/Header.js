function Header(){
    return(
        <div className="heading">
            <img className="img"src="https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo-768x432.png" height="80px" width="80px"/>
            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Children</button>
                <button className="but">Kid's</button>
                <button className="but">Home and Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
              
            </div>
            <input className="input"placeholder="Search for product brands and more "></input>
            <div className="profile">
                <button className="pro">Profile</button>
                <button className="pro">Wishlist</button>
                <button className="pro">Bag's</button>
            </div>



        </div>
    )
}
export default Header;