import { PureComponent } from 'react';
import clsx from 'clsx';
import { DeleteIcon } from './icons/DeleteIcon.jsx';
import { CheckIcon } from './icons/CheckIcon.jsx';
import { localizeDate } from '../utils/localization.js';
import TextareaAutosize from 'react-textarea-autosize';
import { motion } from 'framer-motion';
import { removeNewLines } from '../utils/validation.js';
import { SEVERITY } from './constants.js';

export class Task extends PureComponent {
	handleComplete = () => {
		this.props.onComplete(this.props.task.id);
	};

	handleChangeTitle = (e) => {
		const value = removeNewLines(e.target.value);
		this.props.w(this.props.task.id, value);
	};

	handleChangeDescription = (e) => {
		const value = removeNewLines(e.target.value);
		this.props.onChangeDescription(this.props.task.id, value);
	};

	handleChangeSeverity = (e) => {
		this.props.onChangeSeverity(this.props.task.id, e.target.value);
	};

	handleDelete = () => {
		this.props.onDelete(this.props.task.id);
	};

	render() {
		const { id, title, description, severity, date, isDone } =
			this.props.task;

		return (
			<motion.div
				initial={{ x: 100, height: 0, opacity: 0 }}
				animate={{ x: 0, height: 'auto', opacity: 1 }}
				exit={{ x: -100, height: 0, opacity: 0 }}
			>
				<div className="w-full rounded-lg bg-gray-500 border border-gray-400 p-2 sm:p-4 my-2 flex gap-2 sm:gap-4 items-center">
					<button className="w-6 h-6" onClick={this.handleComplete}>
						<CheckIcon isChecked={isDone} />
					</button>
					<div className="flex-1 flex gap-3 sm:gap-4">
						<div className="flex-1 flex flex-col gap-1">
							<TitleInput
								id={id}
								title={title}
								isDone={isDone}
								onChangeTitle={this.handleChangeTitle}
								onKeyDown={this.handleKeyDown}
							/>
							<DescriptionInput
								id={id}
								description={description}
								isDone={isDone}
								onChangeDescription={
									this.handleChangeDescription
								}
								onKeyDown={this.handleKeyDown}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<span className="text-xs text-gray-300">
								{localizeDate(date)}
							</span>
							<SeverityInput
								severity={severity}
								isDone={isDone}
								onChangeSeverity={this.handleChangeSeverity}
							/>
						</div>
					</div>
					<button
						className="w-6 h-6 text-gray-300 rounded hover:bg-gray-400 hover:text-danger transition-colors [@media(hover:none)]:text-danger [@media(hover:none)]:bg-gray-400"
						onClick={this.handleDelete}
					>
						<DeleteIcon />
					</button>
				</div>
			</motion.div>
		);
	}
}

class TitleInput extends PureComponent {
	render() {
		return (
			<TextareaAutosize
				maxLength={100}
				value={this.props.title}
				placeholder="Task name"
				className={clsx(
					'text-sm font-bold text-gray-100 leading-[1.4]',
					'bg-transparent outline-none resize-none overflow-hidden',
					{
						['line-through text-gray-300']: this.props.isDone,
					}
				)}
				onChange={this.props.onChangeTitle}
				onKeyDown={this.props.onKeyDown}
				disabled={this.props.isDone}
			/>
		);
	}
}

class DescriptionInput extends PureComponent {
	render() {
		return (
			<TextareaAutosize
				maxLength={500}
				value={this.props.description}
				placeholder="Write description for task..."
				className={clsx(
					'text-xs text-gray-300 bg-transparent outline-none',
					'placeholder:text-gray-300 resize-none h-auto',
					{
						['line-through text-gray-300/70']: this.props.isDone,
					}
				)}
				onChange={this.props.onChangeDescription}
				onKeyDown={this.props.onKeyDown}
				disabled={this.props.isDone}
			/>
		);
	}
}

class SeverityInput extends PureComponent {
	render() {
		return (
			<select
				className={clsx(
					'text-gray-100 text-xs p-1 rounded-full cursor-pointer',
					'outline-none transition-colors text-center',
					{
						['bg-red-700']: this.props.severity === SEVERITY.URGENT,
						['bg-yellow-700']:
							this.props.severity === SEVERITY.MEDIUM,
						['bg-green-700']:
							this.props.severity === SEVERITY.NOT_URGENT,
					}
				)}
				value={this.props.severity}
				disabled={this.props.isDone}
				onChange={this.props.onChangeSeverity}
			>
				<option value={SEVERITY.URGENT}>{SEVERITY.URGENT}</option>
				<option value={SEVERITY.MEDIUM}>{SEVERITY.MEDIUM}</option>
				<option value={SEVERITY.NOT_URGENT}>
					{SEVERITY.NOT_URGENT}
				</option>
			</select>
		);
	}
}
