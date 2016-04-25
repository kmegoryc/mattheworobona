$(document).ready(function() {
 $('.drawer').drawer({
  class: {
    nav: 'drawer-nav',
    toggle: 'drawer-toggle',
    overlay: 'drawer-overlay',
    open: 'drawer-open',
    close: 'drawer-close',
    dropdown: 'drawer-dropdown'
  },
  iscroll: {
    // Configuring the iScroll
    // https://github.com/cubiq/iscroll#configuring-the-iscroll
    mouseWheel: true,
    preventDefault: false
  },
  showOverlay: true
});
}); //end document ready function

/*$('.drawer').on('drawer.opened', function(){});
 $('.drawer').on('drawer.closed', function(){});
 $('.drawer').drawer('open');
 $('.drawer').drawer('close');
 $('.drawer').drawer('toggle');
 $('.drawer').drawer('destroy');*/