import React from 'react'

function Header() {
    return (
        <header className="bg-dark text-white">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-3 text-center text-md-left logo">
                        <h1>JM</h1>
                    </div>
                    <div className="col-12 col-md-9 title text-center text-md-right">
                        <h1>Todo List: Example code</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
