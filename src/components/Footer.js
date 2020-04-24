import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark text-white fixed-bottom">
            <div className="container py-2">
                <div className="row">
                    <div className="col-12 col-md-3 text-center text-md-left logo">
                        JM
                    </div>
                    <div className="col-12 col-md-9 title text-center text-md-right">
                        Todo List: Example Code | <a href="www.josemolinaresume.com" target="_Blank" className="text-white"><u>josemolinaresume.com</u></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer