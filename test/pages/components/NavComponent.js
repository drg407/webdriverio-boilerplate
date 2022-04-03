class NavComponent {
    get navMenuLinks() {
        return $$('#primary-menu li[id*=menu]');
    }

    get firstNavMenuList() {
        return $('#primary-menu li');
    }
}

export default new NavComponent();