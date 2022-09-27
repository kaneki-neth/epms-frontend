<template>
    <!-- BEGIN: Header-->
    <header class="page-topbar" id="header">
        <div class="navbar navbar-fixed">
            <nav class="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-light-blue-cyan">
                <div class="nav-wrapper">
                    <ul class="left">
                        <li>
                            <h1 class="logo-wrapper"><a class="brand-logo darken-1"><img src="@/images/logo/materialize-logo.png" alt="materialize logo"><span class="logo-text hide-on-med-and-down">Materialize</span></a></h1>
                        </li>
                    </ul>
                    <div class="header-search-wrapper hide-on-med-and-down"><i class="material-icons">search</i>
                        <input class="header-search-input z-depth-2" type="text" name="Search" placeholder="Explore Materialize" data-search="starter-kit-list">
                        <ul class="search-list collection display-none"></ul>
                    </div>
                    <ul class="navbar-list right">
                        <li class="dropdown-language"><a class="waves-effect waves-block waves-light translation-button" href="javascript:void(0);" data-target="translation-dropdown"><span class="flag-icon flag-icon-gb"></span></a></li>
                        <li class="hide-on-med-and-down"><a class="waves-effect waves-block waves-light toggle-fullscreen" href="javascript:void(0);"><i class="material-icons">settings_overscan </i></a></li>
                        <li><a class="waves-effect waves-block waves-light profile-button" href="javascript:void(0);" data-target="profile-dropdown"><span class="avatar-status avatar-online"><img src="@/images/avatar/avatar-7.png" alt="avatar"><i></i></span></a></li>
                    </ul>
                    <!-- translation-button-->
                    <ul class="dropdown-content" id="translation-dropdown">
                        <li class="dropdown-item"><a class="grey-text text-darken-1" href="#!" data-language="en"><i class="flag-icon flag-icon-gb"></i> English</a></li>
                        <li class="dropdown-item"><a class="grey-text text-darken-1" href="#!" data-language="fr"><i class="flag-icon flag-icon-fr"></i> French</a></li>
                        <li class="dropdown-item"><a class="grey-text text-darken-1" href="#!" data-language="pt"><i class="flag-icon flag-icon-pt"></i> Portuguese</a></li>
                        <li class="dropdown-item"><a class="grey-text text-darken-1" href="#!" data-language="de"><i class="flag-icon flag-icon-de"></i> German</a></li>
                    </ul>
                    <!-- profile-dropdown-->
                    <ul class="dropdown-content" id="profile-dropdown">
                        <li><a class="grey-text text-darken-1" href="#"><i class="material-icons">face</i> Profile</a></li>
                        <li><a class="grey-text text-darken-1" href="#"><i class="material-icons">settings</i> Settings</a></li>
                        <li><a class="grey-text text-darken-1" href="#"><i class="material-icons">live_help</i> Help</a></li>
                        <li class="divider"></li>
                        <li><a class="grey-text text-darken-1" href="#"><i class="material-icons">lock_outline</i> Lock</a></li>
                        <li><a class="grey-text text-darken-1" href="#"><i class="material-icons">keyboard_tab</i> Logout</a></li>
                    </ul>
                </div>
            </nav>
            <!-- BEGIN: Horizontal nav start-->
            <nav class="white hide-on-med-and-down" id="horizontal-nav">
                <div class="nav-wrapper">
                    <ul class="left hide-on-med-and-down" id="ul-horizontal-nav" data-menu="menu-navigation">
                        <li class="active"><a href="page-blank.html"><i class="material-icons">pages</i><span data-i18n="Blank Page">Blank Page</span></a></li>
                        <li><a class="dropdown-menu" href="#" data-target="formsTables"><i class="material-icons">photo_filter</i><span><span class="dropdown-title" data-i18n="Menu levels">Menu levels</span><i class="material-icons right">keyboard_arrow_down</i></span></a>
                            <ul class="dropdown-content dropdown-horizontal-list" id="formsTables">
                                <li data-menu=""><a href="#"><span data-i18n="Second level 1">Second level 1</span></a>
                                </li>
                                <li data-menu=""><a href="#"><span data-i18n="Second level 2">Second level 2</span></a>
                                </li>
                                <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu"><a class="dropdownSub-menu" href="#" data-target="thirdDropdown"><span data-i18n="Second level 3">Second level 3</span><i class="material-icons right">chevron_right</i></a>
                                    <ul class="dropdown-content dropdown-horizontal-list" id="thirdDropdown">
                                        <li data-menu=""><a href="#"><span data-i18n="Child 1">Child 1</span></a>
                                        </li>
                                        <li data-menu=""><a href="#"><span data-i18n="Child 2">Child 2</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="https://pixinvent.com/materialize-material-design-admin-template/documentation/" target="_blank"><i class="material-icons">import_contacts</i><span data-i18n="Documentation">Documentation</span></a></li>
                        <li><a href="https://pixinvent.ticksy.com/" target="_blank"><i class="material-icons">help_outline</i><span data-i18n="Support">Support</span></a></li>
                    </ul>
                    <!-- END: Horizontal nav start-->
                </div>
            </nav>
        </div>
    </header>
    <!-- END: Header-->
    <ul class="display-none" id="page-search-title">
        <li class="auto-suggestion-title"><a class="collection-item" href="#">
                <h6 class="search-title">PAGES</h6>
            </a></li>
    </ul>
    <ul class="display-none" id="search-not-found">
        <li class="auto-suggestion"><a class="collection-item display-flex align-items-center" href="#"><span class="material-icons">error_outline</span><span class="member-info">No results found.</span></a></li>
    </ul>
</template>

export default {
    name: 'Header'
}

