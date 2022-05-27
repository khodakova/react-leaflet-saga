import React from 'react';
import Map from "./components/map";
import './App.css';
import 'antd/dist/antd.min.css';
import ApplicationTable from "./components/applicationTable";
import ResizableDiv from "./components/resizableDiv/ResizableDiv";

function App() {
    return (
        <div className="container">
            <div className='app'>
                <ResizableDiv>
                    <ApplicationTable/>
                </ResizableDiv>
                <Map/>
            </div>
        </div>
    );
}

export default App;
