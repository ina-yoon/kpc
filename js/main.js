let header = $('.header');
let item = $('.menu-item');
let text = $('.menu-item-text');
let su = $('.sub-menu');

item.attr('tabidex','0');

item.on('mouseover focusin', function(){
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});

menu.on('mouseout', function(){
  item.removeClass('menu-act')
});
