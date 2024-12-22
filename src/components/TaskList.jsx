import { Component } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Task } from './Task.jsx';

export class TaskList extends Component {
	getTasks = () => {
		const { tasks, filters, sort } = this.props;
		return tasks
			.filter((task) => filters.every((filter) => filter(task)))
			.sort(sort);
	};

	render() {
		const tasks = this.getTasks();
		const {
			onCompleteTask,
			onChangeTitle,
			onChangeDescription,
			onChangeSeverity,
			onDeleteTask,
		} = this.props;

		return (
			<>
				{!!tasks.length && (
					<div className="flex flex-col px-2 my-2 sm:px-4 sm:my-4 overflow-y-scroll">
						<AnimatePresence>
							{tasks.map((task) => (
								<Task
									key={task.id}
									task={task}
									onComplete={onCompleteTask}
									onChangeTitle={onChangeTitle}
									onChangeDescription={onChangeDescription}
									onChangeSeverity={onChangeSeverity}
									onDelete={onDeleteTask}
								/>
							))}
						</AnimatePresence>
					</div>
				)}
				{!tasks.length && (
					<div className="flex flex-col gap-3 items-center py-20">
						<img className="w-14" src="/error.svg" alt="" />
						<div className="text-center">
							<h2 className="font-bold text-gray-300">
								You don't have any tasks created yet
							</h2>
							<p className="text-xs text-gray-300/75">
								Create tasks and organize your affairs
							</p>
						</div>
					</div>
				)}
			</>
		);
	}
}
