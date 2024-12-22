import { Component } from 'react';
import { TodoList } from './components/TodoList.jsx';
import { Input } from './components/Input.jsx';
import { Button } from './components/Button.jsx';
import { AddIcon } from './components/icons/AddIcon.jsx';
import { TodoInfo } from './components/TodoInfo.jsx';
import { LOCAL_STORAGE_TASKS_KEY, SEVERITY } from './components/constants.js';
import { TaskList } from './components/TaskList.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			tasks: this.getTasksLocalStorage() ?? [],
			loading: null,
			sort: (a, b) => a.isDone - b.isDone,
			filters: [],
		};
	}

	componentDidUpdate() {
		this.syncTasksLocalStorage();
	}

	getTasksLocalStorage = () => {
		return JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY));
	};

	syncTasksLocalStorage = () => {
		localStorage.setItem(
			LOCAL_STORAGE_TASKS_KEY,
			JSON.stringify(this.state.tasks)
		);
	};

	handleChangeInput = (e) => {
		this.setState({ input: e.target.value});
	};

	handleCreateTask = () => {
		this.setState((state) => {
			return {
				input: '',
				tasks: [
					{
						id: Math.max(...state.tasks.map((x) => x.id), 0) + 1,
						date: Date.now(),
						title: state.input.trim(),
						description: '',
						severity: SEVERITY.NOT_URGENT,
						isDone: false,
					},
					...state.tasks,
				],
			};
		});
	};

	handleCompleteTask = (id) => {
		this.setState((state) => ({
			tasks: state.tasks.map((task) => {
				if (task.id === id) {
					return { ...task, isDone: !task.isDone };
				}

				return task;
			}),
		}));
	};

	handleDeleteTask = (id) => {
		this.setState((state) => ({
			tasks: state.tasks.filter((x) => x.id !== id),
		}));
	};

	handleChangeTitle = (id, title) => {
		this.setState((state) => ({
			tasks: state.tasks.map((task) => {
				if (task.id === id) {
					return { ...task, title };
				}

				return task;
			}),
		}));
	};

	handleChangeDescription = (id, description) => {
		this.setState((state) => ({
			tasks: state.tasks.map((task) => {
				if (task.id === id) {
					return { ...task, description };
				}

				return task;
			}),
		}));
	};

	handleChangeSeverity = (id, severity) => {
		this.setState((state) => ({
			tasks: state.tasks.map((task) => {
				if (task.id === id) {
					return { ...task, severity };
				}

				return task;
			}),
		}));
	};

	setLoading = (timeout) => {
		if (this.state.loading) {
			clearInterval(this.state.loading);
		}

		const timerId = setTimeout(
			() => this.setState({ loading: null }),
			timeout
		);
		this.setState({ loading: timerId });
	};

	handleChangeFilter = (filters) => {
		this.setLoading(500);
		this.setState({ filters: filters ?? [] });
	};

	handleSubmitForm = (e) => {
		e.preventDefault();
		this.handleCreateTask();
	};

	render() {
		return (
			<div className={this.props.className}>
				<TodoList
					inputForm={
						<Input
							type="text"
							placeholder="Add a new task"
							value={this.state.input}
							onChange={this.handleChangeInput}
						/>
					}
					buttonForm={
						<Button disabled={!this.state.input}>
							Create
							<AddIcon />
						</Button>
					}
					onSubmitForm={this.handleSubmitForm}
					todoInfo={
						<TodoInfo
							tasks={this.state.tasks}
							onChangeFilter={this.handleChangeFilter}
						/>
					}
					loading={this.state.loading}
					taskList={
						<TaskList
							tasks={this.state.tasks}
							filters={this.state.filters}
							sort={this.state.sort}
							onCompleteTask={this.handleCompleteTask}
							onChangeTitle={this.handleChangeTitle}
							onChangeDescription={this.handleChangeDescription}
							onChangeSeverity={this.handleChangeSeverity}
							onDeleteTask={this.handleDeleteTask}
						/>
					}
				/>
			</div>
		);
	}
}

export default App;
