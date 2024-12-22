import { Component } from 'react';
import { Logo } from './Logo.jsx';
import { Loading } from './Loading.jsx';

export class TodoList extends Component {
	render() {
		return (
			<div className="max-w-[856px] px-4 sm:px-8 h-screen mx-auto pt-[72px] flex flex-col overflow-hidden">
				<Logo className="min-h-16 self-center mb-9" />
				<form
					className="flex gap-3 sm:gap-6 items-start mb-6 sm:mb-12"
					onSubmit={this.props.onSubmitForm}
				>
					<div className="flex-1 flex flex-col">
						{this.props.inputForm}
					</div>
					{this.props.buttonForm}
				</form>
				{this.props.todoInfo}
				{this.props.loading && <Loading className="my-24 mx-auto" />}
				{!this.props.loading && this.props.taskList}
			</div>
		);
	}
}
