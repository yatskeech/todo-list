import { PureComponent } from 'react';

export class Button extends PureComponent {
	render() {
		return (
			<button
				className="p-4 rounded-lg bg-blue-dark enabled:hover:bg-blue-light disabled:bg-blue-disabled transition-colors text-gray-100 flex gap-2 items-center"
				disabled={this.props.disabled}
				onClick={this.props.onClick}
			>
				{this.props.children}
			</button>
		);
	}
}
