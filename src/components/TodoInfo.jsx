import { PureComponent } from 'react';
import clsx from 'clsx';
import { CheckIcon } from './icons/CheckIcon.jsx';
import { Input } from './Input.jsx';
import { SEVERITY } from './constants.js';

export class TodoInfo extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			done: {
				value: false,
				fn: this.filterDone,
			},
			severity: {
				value: {
					[SEVERITY.NOT_URGENT]: true,
					[SEVERITY.MEDIUM]: true,
					[SEVERITY.URGENT]: true,
				},
				fn: this.filterSeverity,
			},
			search: {
				value: '',
				fn: this.filterSearch,
			},
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.tasks !== this.props.tasks) {
			return;
		}

		this.props.onChangeFilter(
			Object.values(this.state).map((filter) => {
				return filter.fn(filter.value);
			})
		);
	}

	filterDone = (value) => {
		return (task) => !value || !task.isDone;
	};

	filterSeverity = (value) => {
		return (task) => value[task.severity];
	};

	filterSearch = (value) => {
		return (task) =>
			task.title.toUpperCase().includes(value.toUpperCase()) ||
			task.description.toUpperCase().includes(value.toUpperCase());
	};

	handleFilterDone = () => {
		this.setState((filters) => ({
			done: { ...filters.done, value: !filters.done.value },
		}));
	};

	handleFilterSeverity = (severity) => {
		this.setState((filters) => ({
			severity: {
				...filters.severity,
				value: {
					...filters.severity.value,
					[severity]: !filters.severity.value[severity],
				},
			},
		}));
	};

	handleFilterSearch = (e) => {
		this.setState((filters) => ({
			search: {
				...filters.search,
				value: e.target.value,
			},
		}));
	};

	render() {
		return (
			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-2 sm:flex-row sm:gap-0 sm:items-center sm:justify-between">
					<div className="flex gap-6">
						<Counter
							className="text-purple"
							name="Completed"
							value={
								this.props.tasks.filter((task) => task.isDone)
									.length
							}
						/>
						<Counter
							className="text-blue"
							name="Created"
							value={this.props.tasks.length}
						/>
					</div>
					<Input
						className="w-full sm:w-60 text-xs py-2 px-4"
						type="text"
						placeholder="Search"
						onChange={this.handleFilterSearch}
					/>
				</div>
				<div className="flex flex-col gap-2 items-end sm:flex-row sm:items-center sm:justify-between sm:gap-0">
					<div className="w-full flex items-center justify-between sm:w-auto sm:gap-4 border border-gray-400 py-2 px-4 rounded-lg">
						<Filter
							isChecked={
								this.state.severity.value[SEVERITY.NOT_URGENT]
							}
							onCheck={() =>
								this.handleFilterSeverity(SEVERITY.NOT_URGENT)
							}
							title={SEVERITY.NOT_URGENT}
						/>
						<Filter
							isChecked={
								this.state.severity.value[SEVERITY.MEDIUM]
							}
							onCheck={() =>
								this.handleFilterSeverity(SEVERITY.MEDIUM)
							}
							title={SEVERITY.MEDIUM}
						/>
						<Filter
							onCheck={() =>
								this.handleFilterSeverity(SEVERITY.URGENT)
							}
							isChecked={
								this.state.severity.value[SEVERITY.URGENT]
							}
							title={SEVERITY.URGENT}
						/>
					</div>
					<Filter
						isChecked={this.state.done.value}
						onCheck={this.handleFilterDone}
						title="Only uncompleted"
					/>
				</div>
			</div>
		);
	}
}

class Counter extends PureComponent {
	render() {
		return (
			<div
				className={clsx(
					'flex gap-2 text-sm font-bold',
					this.props.className
				)}
			>
				{this.props.name}
				<span
					className={clsx(
						'text-xs text-gray-200 px-2 flex items-center',
						'bg-gray-400 rounded-full leading-none'
					)}
				>
					{this.props.value}
				</span>
			</div>
		);
	}
}

class Filter extends PureComponent {
	render() {
		return (
			<button
				className={clsx(
					'text-sm text-blue font-bold flex gap-1 items-center',
					'transition-colors',
					{
						['text-blue']: !this.props.isChecked,
						['text-purple']: this.props.isChecked,
					}
				)}
				onClick={this.props.onCheck}
			>
				<CheckIcon isChecked={this.props.isChecked} />
				{this.props.title}
			</button>
		);
	}
}
