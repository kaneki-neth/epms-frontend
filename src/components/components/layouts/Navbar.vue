<template>
    <!-- BEGIN: SideNav-->
    <aside class="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-fixed hide-on-large-only">
        <div class="brand-sidebar sidenav-light"></div>
        <ul class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed hide-on-large-only menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
            <li class="active bold"><a class="collapsible-header waves-effect waves-cyan " href="#"><i class="material-icons">pages</i><span class="menu-title" data-i18n="Pages">Pages</span></a>
                <div class="collapsible-body">
                    <ul class="collapsible collapsible-sub" data-collapsible="accordion">
                        <li class="active"><a class="active" href="page-blank.html"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Page Blank">Page Blank</span></a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="navigation-header"><a class="navigation-header-text">Misc </a><i class="navigation-header-icon material-icons">more_horiz</i>
            </li>
            <li class="bold"><a class="collapsible-header waves-effect waves-cyan " href="#"><i class="material-icons">photo_filter</i><span class="menu-title" data-i18n="Menu levels">Menu levels</span></a>
                <div class="collapsible-body">
                    <ul class="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a href="#"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Second level">Second level</span></a>
                        </li>
                        <li><a class="collapsible-header waves-effect waves-cyan" href="#"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Second level child">Second level child</span></a>
                            <div class="collapsible-body">
                                <ul class="collapsible" data-collapsible="accordion">
                                    <li><a href="#"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Third level">Third level</span></a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="https://pixinvent.com/materialize-material-design-admin-template/documentation/" target="_blank"><i class="material-icons">import_contacts</i><span class="menu-title" data-i18n="Documentation">Documentation</span></a>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="https://pixinvent.ticksy.com/" target="_blank"><i class="material-icons">help_outline</i><span class="menu-title" data-i18n="Support">Support</span></a>
            </li>
        </ul>
        <div class="navigation-background"></div><a class="sidenav-trigger btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i class="material-icons">menu</i></a>
    </aside>
    <!-- END: SideNav-->
</template>

export default {
    name: 'Navbar'
}