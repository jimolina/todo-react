import React from 'react'

import Tasks from './Tasks'
import tasksData from './tasksData'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            tasksData: tasksData.sort(function(a, b){return b.id - a.id}),
            activeLink: [],
            addNewArea: false,
            task: '',
            type: 'Regular',
            taskAdded: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClick(id) {
        this.setState(prevState => {
            return {
                activeLink: this.state.activeLink.concat(id)
            }
        })
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState(prevState => {
            const taskNewId = prevState.tasksData.length + 1
            const newTask = [
                {
                    id: taskNewId,
                    title: this.state.task,
                    type: this.state.type
                }
            ]

            return {
                tasksData: prevState.tasksData.concat(newTask).sort(function(a, b){return b.id - a.id}),
                taskAdded: taskNewId,
                task: '',
                addNewArea: false
            }
        })
    }

    displayAddNew(value) {
        this.setState(prevState => {
            return {
                addNewArea: value
            }
        })
    }

    render() {
        const tasksInfo = this.state.tasksData.map(task => <Tasks key={task.id} data={{id:task.id, title: task.title, type: task.type, handleClick: this.handleClick, activeLink: this.state.activeLink, taskAdded: this.state.taskAdded}}/>)

        return (
            <div className="container-fluid my-5">
                <div className="container shadow bg-white border border-info rounded p-0">
                    <header className={"task__header " + ((this.state.addNewArea === true) ? "task__addnew--active" : "" )}>
                        <button type="button" className="btn btn-light task__addnew--open" data-toggle="button" aria-pressed="false" autoComplete="off" value="Add new" disabled={this.state.addNewArea} onClick={() => this.displayAddNew(true)}>Add new</button>
                        <button type="button" className="btn btn-danger border border-white task__addnew--close" data-toggle="button" aria-pressed="false" autoComplete="off" value="X" onClick={() => this.displayAddNew(false)}>X</button>
                        <div className="task__addnew--container p-4 m-4 rounded">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-12 col-md-9 mb-3 mb-md-0">
                                        <input 
                                            type="text" 
                                            name="task" 
                                            value={this.state.task} 
                                            className="form-control" 
                                            placeholder="Your Task" 
                                            onChange={this.handleChange} 
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <select name="type" value={this.state.type} onChange={this.handleChange} id="inputState" className="form-control" required>
                                            <option value="Regular">Regular</option>
                                            <option value="Call">Call</option>
                                            <option value="Urgent">Urgent</option>
                                        </select>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <input type="submit" value="Save" className="btn btn-success w-100" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </header>
                    <ul className="list-group list-group-flush task__list">
                        {tasksInfo}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Main