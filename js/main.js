!function(a){"use strict";function b(){var b=a(window).height(),c=1;c=b/780;var d=a(window).width(),e=d/c;navigator.userAgent.indexOf("Firefox")!=-1?a("#Zoom").css({"-moz-transform":"scale("+c+")","transform-origin":"0 0",width:e}):a("#Zoom").css({zoom:c})}a(".block-header .menubar").on("click",function(){a(this).toggleClass("menu_open"),a(this).parents("body").toggleClass("menu_open")}),b(),a(window).on("load resize",function(){b()})}(jQuery);