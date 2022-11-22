import './counterTasks.css';
import * as React from 'react';
interface IIForm {
    tasksCounter?: number;
    CompletedTasks?: number | string;
}
export const CounterTasks = ({
    tasksCounter: CountTasks,
    CompletedTasks: TaksCompleted,
}: IIForm) => {
    return (
        <>
            <div className="tasks-box">
                <div className="tasks-header">
                    <div className="tasks-created">
                        <h1>Added tasks</h1>
                        <div className="Counter">
                            <span>{CountTasks}</span>
                        </div>
                    </div>
                    <div className="completeTasks">
                        <h1>Completed Tasks</h1>
                        <div className="Counter">
                            <span>{TaksCompleted}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
