<?php

namespace Drupal\uber_publisher_core\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure uber_publisher_core settings for this site.
 */
class UberPublisherCoreSettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'uber_publisher_core_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'uber_publisher_core.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('uber_publisher_core.settings');

    $form['share_buttons_style'] = [
      '#type' => 'select',
      '#title' => $this->t('Share buttons style'),
      '#default_value' => $config->get('share_buttons_style'),
      '#options' => [
        'top' => t('Top (under the main image)'),
        'bottom' => t('Bottom (at the end of article)'),
        'top_and_bottom' => t('Top and bottom'),
        'sticky_side' => t('Sticky side (sticky on the side as you scroll)'),
      ],
      '#description' => t('Please clear cache after save configuration to apply the last update.'),
    ];

    $form['auto_create_subqueue'] = [
      '#type' => 'radios',
      '#title' => $this->t('Auto create a subqueue for each term of the Section vocabulary'),
      '#default_value' => $config->get('auto_create_subqueue'),
      '#options' => [
        '1' => t('On'),
        '0' => t('Off'),
      ],
      '#description' => t('This will trigger automatic creation of a subqueue for each term under the <a href="/admin/structure/taxonomy/manage/section/overview">Section</a> vocabulary when the term is created. Set it <em>off</em> to disable automatic creation.')
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Retrieve the configuration.
    $this->config('uber_publisher_core.settings')
      // Set the submitted configuration setting.
      ->set('share_buttons_style', $form_state->getValue('share_buttons_style'))
      // You can set multiple configurations at once by making multiple calls to set()
      ->set('auto_create_subqueue', $form_state->getValue('auto_create_subqueue'))
      ->save();

    parent::submitForm($form, $form_state);
  }

}
