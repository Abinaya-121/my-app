import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} ><img src="https://th.bing.com/th/id/OIP.N2L0ijKU7yripQfgui61YQHaB4?w=349&h=88&c=7&r=0&o=5&pid=1.7"></img></div>
            <div className="search-input">
                <div><span class="material-symbols-outlined">
search
</span>
        <input type="text"placeholder="search your products here......"/>
        </div>
        </div>
           
            <div onClick={() => props.handleShow(true)}> <span class="material-symbols-outlined">
shopping_cart
</span>
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;