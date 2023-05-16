import React from "react";
import "./MainPage.css";
import NewNote from "../../Components/NewNote/NewNote";

export default function MainPage({allNotes, setAllNotes}) {
    
    return (  
        <div className="main-page">
            <div className="page-sections">
                
                <div className="left-section">

                </div>

                <div className="right-section">
                    <h1>Today</h1>
                    <NewNote allNotes={allNotes} setAllNotes={setAllNotes} />
                </div>
            </div>
        </div>
    )
}