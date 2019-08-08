// import contact from './contact';
// import menu from './menu';

const page = () => {
    let body = `<div id="container-fluid">
    <section class="search-form">
        <div class="logo">
            <a href="#"><img src="img/Screenshot from 2019-08-07 06-57-02.png" alt="Allmenus.com"></a>
        </div>
        <div class="form-container">
            <input class="form-control" type="text" placeholder="Enter Your Address, City, Zip Code">
            <button class="btn btn-md btn-block mt-2 mb-3">Find Menus</button>
        </div>
    </section>
    <section class="link">
        <div>
            <a href="#" id="menu-btn">Menu</a> | <a href="#" id="contact-btn">Contact</a>
            <div id="menu-contact">Rice, Beans, Potatoes</div>
        </div>
    </section>
    <section class="menus row justify-content-center" >
        <h2 class="h2">Browse restaurant menus in top cities</h2>
        <div class="flex-display"></div>
        <div><a href="#" class="col-md-3"><img src="img/los.png" alt=""></a></div>
        <div><a href="#" class="col-md-3"><img src="img/san.png" alt=""></a></div>
        <div><a href="#" class="col-md-3"><img src="img/san.png" alt=""></a></div>
    </section>
</div>`

    let tbody = document.getElementById('content');
    tbody.innerHTML += body;
    return tbody;
}

export default page;