(function($) {

  function tabPanel(el) {
    return $(el).find('a').attr('href');
  }

  $.fn.tabs = function() {
    var $activePanel;
    $(this).each(function(i, ul) {
      $(ul.children).each(function(i2, li) {
        if(i2 === 0) {
          $activePanel = tabPanel(li);
          $($activePanel).show();
        }
        else {
          $(tabPanel(li)).hide();
        }

        $(li).click(function(ev) {
          ev.preventDefault();
          var $newPanel = tabPanel(this);
          $($activePanel).hide();
          $($newPanel).show();
          $activePanel = $newPanel;
        });
      });
    });
  };

  // Call the tabs plugin
  $('#animals').tabs();

})(jQuery);

