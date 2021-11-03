<?php
/**
 * Single page layout section.
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Defaults\Single_Post;
use Neve\Customizer\Types\Control;

/**
 * Class Layout_Single_Page
 */
class Layout_Single_Page extends Base_Layout_Single {
	use Single_Post;

	/**
	 * Returns the post type.
	 *
	 * @return string
	 */
	public function get_post_type() {
		return 'page';
	}

	/**
	 * @return string
	 */
	public function get_cover_selector() {
		return '.page .nv-post-cover';
	}

	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		parent::add_controls();
		$this->add_control(
			new Control(
				'neve_page_hide_title',
				[
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				],
				[
					'label'    => esc_html__( 'Disable Title', 'neve' ),
					'section'  => $this->section,
					'type'     => 'neve_toggle_control',
					'priority' => 25,
				],
				'Neve\Customizer\Controls\Checkbox'
			)
		);
	}
}
