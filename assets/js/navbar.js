/*==================== LOAD NAVBAR ====================*/
header_div = document.getElementById("header_navbar")
header_div.innerHTML = `           <!--========== HEADER ==========-->
<header class="header">
    <div class="header__container">

        <a href="#" class="header__logo"><img class="header__img" src="assets/img/logo.png">GoodFit</a>
        <h3 id="title">Pargid ja rohealad</h1>

        <div class="header__toggle">
            <i class='bx bx-menu' id="header-toggle"></i>
        </div>
    </div>
</header>

<!--========== NAV ==========-->
<div class="nav" id="navbar">
    <nav class="nav__container">
        <div>
            <a href="#" class="nav__link nav__logo">
                <i class='bx bxs-disc nav__icon' ></i>
                <span class="nav__logo-name">GoodFit</span>
            </a>

            <div class="nav__list">
                <div class="nav__items">
                    <h3 class="nav__subtitle">Menüü</h3>

                    <a href="index.html" class="nav__link" id="link_avaleht">
                        <i class='bx bx-home nav__icon' ></i>
                        <span class="nav__name">Avaleht</span>
                    </a>
                    <a href="pargid.html" class="nav__link" id="link_pargid">
                        <i class='fa fa-tree nav__icon' ></i>
                        <span class="nav__name">Pargid</span>
                    </a>
                    <div class="nav__dropdown">
                        <a href="treeningideed_suvi.html" class="nav__link" id="treening">
                            <i class='fas fa-biking nav__icon' ></i>
                            <span class="nav__name">Õuetegevused</span>
                            <i class='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                        </a>
                        <div class="nav__dropdown-collapse">
                            <div class="nav__dropdown-content">
                                <a href="treeningideed_suvi.html" class="nav__dropdown-item" id="treening_suvi">Suvel</a>
                                <a href="treeningideed_talv.html" class="nav__dropdown-item" id="treening_talv">Talvel</a>
                            </div>
                        </div>
                    </div>
                    <a href="aboutus.html" class="nav__link" id="link_about">
                        <i class='bx bx-message-rounded nav__icon' ></i>
                        <span class="nav__name">Meie veebilehest</span>
                    </a>
                </div>
            </div>
        </div>

        <a href="report.html" class="nav__link nav__logout">
            <i class="fas fa-exclamation-circle nav__icon"></i>
            <span class="nav__name">Teata veast</span>
        </a>
    </nav>
</div>`
/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))
