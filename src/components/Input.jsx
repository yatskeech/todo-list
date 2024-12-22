import { PureComponent } from 'react';
import clsx from 'clsx';

export class Input extends PureComponent {
	render() {
		return (
			<input
				className={clsx(
					'leading-[1.4] p-4 bg-gray-500 border',
					'rounded-lg placeholder:text-gray-300 outline-none',
					'text-gray-100 transition-colors',
					{
						['border-danger']: this.props.error,
						['border border-gray-400']: !this.props.error,
					},
					this.props.className
				)}
				type={this.props.type}
				value={this.props.value}
				placeholder={this.props.placeholder}
				onChange={this.props.onChange}
			/>
		);
	}
}
