/**
 * @file
 * Behaviors for the vartheme admin theme.
 */

(function ($, _, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.varbaseParagraphs = {
    attach: function (context) {
      $(document).ajaxComplete(function (context) {
        $('.field--widget-paragraphs .paragraph-top').each(function (context) {
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
      $('.field--widget-paragraphs .paragraph').click(function (context) {
        $(this).siblings('.paragraph-top').find('input.paragraphs-icon-button-edit').trigger('mousedown');
      });

      $(window).on('load', function () {
        $('.field--widget-paragraphs .paragraph-top').each(function (context) {
          if ($(this).parent().hasClass('opened') === false) {
            $(this).height($(this).parents('td').height());
          }
        });

        $('.field--widget-paragraphs .paragraph-type-add-modal.first-button').parent().addClass('hidden');

      });

      $(document).ajaxComplete(function (context) {
        $('.field--widget-paragraphs .paragraph-top').each(function (context) {
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

})(window.jQuery, window._, window.Drupal, window.drupalSettings);
