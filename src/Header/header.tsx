import * as React from 'react';
import './header.css';
export const Header = () => {
    return (
        <>
            <header>
                <div className="flexbox">
                    <img src="https://storagelonder.w3spaces.com/rocket.svg" alt="rocket" />
                    <h1>
                        <span className="to">To</span>
                        <span className="do">Do</span>
                    </h1>
                </div>
            </header>
        </>
    );
};
