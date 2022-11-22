import * as React from 'react';
import { useCallback, useState } from 'react';
import { render } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import { Header } from '../src/Header/header';
import { CounterTasks } from '../src/CounterTasks/counterTasks';
import './styles.css';
import { Trash } from 'phosphor-react';

interface IIProps {
    id?: string;
    title?: string;
    isSelected?: boolean;
}

function App() {
    const [List, setList] = useState<IIProps[]>([]);

    const handleClick: React.KeyboardEventHandler<HTMLInputElement> = React.useCallback((e) => {
        if (e.key === 'Enter') {
            const value = e.currentTarget.value;
            let myuuid = uuidv4();

            const obj = {
                title: value,
                isSelected: false,
                id: myuuid,
            };

            setList((oldList) => {
                return [...oldList, obj];
            });
        }
    }, []);

    const handleDelete = useCallback((id: string) => {
        setList((oldLista) => {
            return oldLista.filter((oldListItem) => oldListItem.id !== id);
        });
    }, []);

    return (
        <>
            <Header />
            <h1>Add a new task</h1>
            <div className="box-input">
                <input className="InputStyle" type="text" onKeyDown={handleClick} />
            </div>
            <CounterTasks
                tasksCounter={List.length}
                CompletedTasks={
                    List.filter((listItem) => listItem.isSelected).length + ' out of ' + List.length
                }
            />

            {List.map((ListItem, index) => {
                return (
                    <div className="List-task-box">
                        <div className="List-tasks">
                            <div className="box1">
                                <label htmlFor="checkboxid" className="form-control">
                                    <input
                                        id="checkboxid"
                                        type="checkbox"
                                        placeholder="Add a new Task"
                                        onChange={() => {
                                            setList((oldList) => {
                                                return oldList.map((oldListItem) => {
                                                    const newIsSelected =
                                                        oldListItem.title === ListItem.title
                                                            ? !oldListItem.isSelected
                                                            : oldListItem.isSelected;
                                                    return {
                                                        ...oldListItem,
                                                        isSelected: newIsSelected,
                                                    };
                                                });
                                            });
                                        }}
                                    />
                                </label>
                            </div>
                            <div className="box2">
                                <p>{ListItem.title}</p>
                                <span className="trash" onClick={() => handleDelete(ListItem.id!)}>
                                    <Trash size={20} className="trashIcon" />
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
