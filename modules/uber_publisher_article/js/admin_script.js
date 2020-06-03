/**
 * @file
 * Behaviors for the admin admin theme.
 */

(function ($, _, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.varbaseParagraphs = {
    attach: function (context) {
      $(document).ajaxComplete(function (context) {
        $('.field--widget-paragraphs-previewer .paragraph-top').each(function (context) {
          if ($(this).parent().find('.paragraphs-subform').length > 0) {
            $(this).parent().addClass('opened');
          } else {
            $(this).parent().removeClass('opened');
          }
        });
      });
    }
  };

  Drupal.behaviors.varbaseParagraphs = {
    attach: function (context) {
      $('.field--widget-paragraphs-previewer .paragraph').click(function (context) {
        $(this).siblings('.paragraph-top').find('input.paragraphs-icon-button-edit').trigger('mousedown');
      });

      $(window).on('load', function () {
        $('.field--widget-paragraphs-previewer .paragraph-top').each(function (context) {
          $(this).height($(this).parents('td').height());
        });

        $('.field--widget-paragraphs-previewer .paragraph-type-add-modal.first-button').parent().addClass('hidden');

      });

      $(document).ajaxComplete(function (context) {
        $('.field--widget-paragraphs-previewer .paragraph-top').each(function (context) {
          if ($(this).parent().find('.paragraphs-subform').length > 0) {
            $(this).parent().addClass('opened');
          } else {
            $(this).parent().removeClass('opened');
          }
        });
      });
    }
  };

  Drupal.behaviors.realtimeSEO = {
    attach: function (context) {
      $('#edit-field-yoast-seo-0-yoast-seo').removeAttr("open");
    }
  };
})(window.jQuery, window._, window.Drupal, window.drupalSettings);;
