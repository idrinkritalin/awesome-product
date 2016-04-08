document.addEventListener('DOMContentLoaded', function() {

  var heart = document.getElementById('item-heart');

  var itemTypes = document.getElementById('item-type');
  var imgTarget = document.getElementById('item__img');

  var buttons = itemTypes.childNodes;

  var tabsHeader = document.getElementById('tabs-header');

  var tabs = document.getElementsByClassName('item__tabs__description');

  heart.addEventListener('click', function() {

    if (heart.className == 'item__heart heart__full') {
      heart.className = 'item__heart';
    } else {
      heart.className += ' heart__full';
    }
  });

  var removeActives = function() {
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].className)
        buttons[i].className = buttons[i].className.replace(' item__list__selected', '');
    }
  };

  var removeVisibles = function() {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].className)
        tabs[i].className = tabs[i].className.replace(' item__tabs--visible', '');
    }
  };

  itemTypes.addEventListener('click', function(e) {

    removeActives();

    var target = e.target.hash.replace('#', '');

    e.target.className += ' item__list__selected';

    imgTarget.src = 'img/' + target + '.jpg';
  }, false);

  tabsHeader.addEventListener('click', function(e) {

    removeVisibles();

    var target = e.target.hash.replace('#', '');

    document.getElementById('tab-' + target).className += ' item__tabs--visible';

  });

}, false);