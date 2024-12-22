import { Component } from 'react';
import clsx from 'clsx';

export class Loading extends Component {
	render() {
		return (
			<div
				className={clsx(
					'inline-block h-16 w-16 animate-spin rounded-full',
					'border-4 border-solid border-current border-e-transparent',
					'align-[-0.125em] text-surface dark:text-blue',
					' motion-reduce:animate-[spin_1.5s_linear_infinite]',
					this.props.className
				)}
				role="status"
			></div>
		);
	}
}
