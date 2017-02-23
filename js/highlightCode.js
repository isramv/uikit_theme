(function ($) {
    'use strict';
    Drupal.behaviors.hightlightCode = {
        attach: function (context) {
            $('pre code', context).each(function(i, block) {
                hljs.highlightBlock(block);
            });
        }
    };
})(jQuery);
