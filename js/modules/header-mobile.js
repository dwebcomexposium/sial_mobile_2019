(function($) {
    $(function() {
        //Init main container
        var menu_mobile_container = $('<div class="custom-menu-mobile-container"></div>');
        //Init inner containers
                var main_menu_container = $('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-1"></ul>');
        var quicklinks_container = $('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-2"></ul>');
        var account_container = $('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-3"></ul>');
        var lang_container = $('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-4"></ul>');
        //And append them to the main one
                menu_mobile_container.append(main_menu_container, quicklinks_container, account_container, lang_container);
        //Build main menu part
                main_menu_container.append($('.site-banner > .inside .main-navigation .mn-menu-line ul.mn-menu').html());
        main_menu_container.find('ul.mn-menu-submenu').each(function() {
            var prev_wording = 'Back';
            if ($('html').is('[lang="fr"]')) {
                prev_wording = 'Retour';
            }
            $(this).prepend($('<li class="mn-menu-item mn-item-prev"><a class="mn-link"><span class="mn-link-text">' + prev_wording + '</span></a></li>').on('click', function(e) {
                e.preventDefault();
                $(this).closest('.mn-menu-submenu').siblings('.mn-link').removeClass('visible');
            }));
        });
        main_menu_container.on('click', 'li.mn-item-has-submenu > a', function(e) {
            var anchor = $(this);
            var ul = anchor.next('.mn-menu-submenu');
            if (ul.length) {
                e.preventDefault();
                main_menu_container.find('li.mn-item-has-submenu > a.visible').filter(function() {
                    if ($(this).next('.mn-menu-submenu').length) {
                        if ($(this).next('.mn-menu-submenu').find(anchor).length) {
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }).removeClass('visible');
                anchor.addClass('visible');
            }
        });
        //Build quicklinks part
                quicklinks_container.append($('.site-banner > .inside .top-quicklinks ul.ql-list').html());
        //Build Selection/account part
                var account_wording = 'My account';
        var selection_wording = 'My selection';
        if ($('html').is('[lang="fr"]')) {
            account_wording = 'Mon compte';
            selection_wording = 'Ma sélection';
        }
        account_container.append($('<li></li>').append($('<a class="triggerAccount">' + account_wording + '</a>').on('click', function(e) {
            e.preventDefault();
            if (comexposiumCap.isUserLogged()) {
                comexposiumCap.openCap('my-selection', 'logged');
            } else {
                comexposiumCap.openCap('login', 'login');
            }
        })));
        account_container.append($('<li></li>').append($('<a class="triggerSelection">' + selection_wording + '</a>').on('click', function(e) {
            e.preventDefault();
            if (comexposiumCap.isUserLogged()) {
                comexposiumCap.openCap('my-selection', 'logged');
            } else {
                comexposiumCap.openCap('my-selection', 'not-logged');
            }
        })));
        //Build lang
                $('.site-banner .lang-switcher ul.ls-lang-list > li').each(function() {
            var elem = $('<li><a href="' + $(this).find('a').attr('href') + '">' + $(this).text() + '</a></li>');
            if ($(this).hasClass('is-active')) {
                elem.addClass('is-active');
            }
            lang_container.append(elem);
        });
        // Init trigger menu mobile
                var triggerMenuMobile = $('<span class="custom-trigger-menu-mobile"><span></span><span></span><span></span></span>').on('click', function(e) {
            e.preventDefault();
            if ($('html').hasClass('custom-menu-mobile-open')) {
                main_menu_container.find('li.mn-item-has-submenu > a.visible').removeClass('visible');
                $('html').removeClass('custom-menu-mobile-open');
            } else {
                $('html').addClass('custom-menu-mobile-open');
            }
        });
        $('.site-banner > .inside').append(triggerMenuMobile);
        $('body').append(menu_mobile_container);
    });
})(jQuery);
//# sourceMappingURL=header-mobile.js.map