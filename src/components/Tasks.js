import React from 'react'

class Tasks extends React.Component { 
    render() {
        const taskType = this.props.data.type
        let badgeClass = "info"

        if (taskType === "Urgent") {
            badgeClass = "warning"
        } else if (taskType === "Call") {
            badgeClass = "primary"
        }

        return (
            <li className={"list-group-item task " + (this.props.data.activeLink.includes(this.props.data.id) ? 'task__complete' : 'task__todo' ) + (this.props.data.taskAdded === this.props.data.id ? ' task__added' : '' )} onClick={() => this.props.data.handleClick(this.props.data.id)}>
                <i className="far fa-check-circle fa-2x"></i>
                {this.props.data.title}
                <span className="h5 float-right task__type">
                    <span className={"badge badge-" + badgeClass}>{this.props.data.type}</span>
                </span>
            </li>
        )
    }
}

export default Tasks