import React, {useState} from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import './App.css';

function App() {
    const [current, setCurrent] = useState('sorting');

    return (
        <div>
            <nav className="navbar">
                <h1 className="navbar-title"> Algorithm Visualizer</h1>
                <div>
                   <button
                       className = {current=='sorting'?'nav-btn active' : 'nav-btn'}
                       onClick = {() => setCurrent('sorting')}>
                        Sorting
                    </button>
                    <button
                       className = {current=='pathfinding'?'nav-btn active' : 'nav-btn'}
                       onClick = {() => setCurrent('pathfinding')}>
                        Pathfinding
                    </button>
                </div>
            </nav>
            {current === 'sorting' && <SortingVisualizer/>}
            {current === 'pathfinding' && <PathfindingVisualizer/>}
        </div>
    );
}
export default App;