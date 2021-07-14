import React from 'react';
import {
	Button,
	Spinner,
	Icon,
	Popover,
	ButtonGroup,
} from '@wordpress/components';
import { useState, lazy, Suspense } from '@wordpress/element';

const IconsContent = lazy(() =>
	import(/* webpackChunkName: "icon-selector" */ './IconsContent')
);

const IconSelector = ({ label, value, onIconChoice, icons }) => {
	const [visible, setVisible] = useState(false);

	const handleRemove = () => {
		onIconChoice('');
	};

	return (
		<div className="neve-control-header icon-control">
			{label && <span className="customize-control-title">{label}</span>}
			{icons[value] && (
				<ButtonGroup className="icon-setter">
					<Button
						className="repeater-icon-preview"
						onClick={() => setVisible(!visible)}
					>
						{icons[value]}
					</Button>
					<Button
						className="repeater-delete-icon"
						onClick={handleRemove}
					>
						<Icon icon="no-alt" />
					</Button>
				</ButtonGroup>
			)}
			{!icons[value] && (
				<Button
					className="add-icon-button"
					onClick={() => setVisible(!visible)}
				>
					<Icon icon="plus-alt2" />
				</Button>
			)}
			{visible && (
				<Popover
					position="bottom left"
					onFocusOutside={() => {
						setVisible(false);
					}}
				>
					{
						<Suspense fallback={<Spinner />}>
							<IconsContent
								onIconChoice={onIconChoice}
								setVisible={setVisible}
								icons={icons}
							/>
						</Suspense>
					}
				</Popover>
			)}
		</div>
	);
};

export default IconSelector;
