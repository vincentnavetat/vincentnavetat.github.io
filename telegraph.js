$('.header-top-wrapper').css({
'box-shadow': '0 5px 10px 0 rgba(0,0,0,0.15),0 -5px 3px -10px #fff',
'padding': '1rem 1rem .5rem',
'position': 'fixed',
'width': '100%',
'z-index': '10'
});
$('.page-article.container, .header-headline-wrapper, .header-nav-local .component-content').css({
'width': '115rem'
});

function injectStyles(rule) {
var div = $("<div />", {
html: '<style>' + rule + '</style>'
}).appendTo("body");
}

injectStyles('.page-article .col.article__sidebar.article__sidebar-sticky-top { margin-left: 76.8rem; margin-top: 3rem; max-width: 38.1rem; } .page-article .headline, .page-article .breadcrumb, .page-article .social-share, .page-article .facebookLike { margin-left: 0; } .header-logobar.header-logobar--small { left: 50%; margin-left: -7.5rem; position: absolute; } .header-nav-primary__item, .header-nav-overlay-button__label, .header-nav-primary+.header-nav-overlay-button .component-content:before { line-height: 3rem; } .header-logobar.header-logobar--small, .header-nav-primary { margin-bottom: 0; margin-top: 0; } .header-nav-global.premium-mode { float: left; } .header-headline-wrapper { padding-top: 5.5rem; } .header-nav-primary+.header-nav-overlay-button { margin-bottom: 0; margin-top: -.1rem; } .page-article .col.article__sidebar { margin-top: 5rem; }');
