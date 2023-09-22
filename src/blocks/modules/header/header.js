const Header = class Header {
    constructor({isMobileMenuOpened}){
        this.isMobileMenuOpened = false;
    }
    toogleMobileMenu() {
        this.isMobileMenuOpened = !this.isMobileMenuOpened;
        if (this.isMobileMenuOpened) {
            document.documentElement.classList.add('ovh');
        } else {
            document.documentElement.classList.remove('ovh');
        }
    }
    closeMobileMenu() {
        this.isMobileMenuOpened = false;
        document.documentElement.classList.remove('ovh');
    }
    setEventListener() {
        document.addEventListener('click', (event) => {
            if (event.target.closest('.header__burger--body') || event.target.closest('.header__burger')) return;
            this.closeMobileMenu();
            document.documentElement.classList.remove('ovh');
        }) 
    }
    init() {
        this.setEventListener();
    }
}

export default Header;
