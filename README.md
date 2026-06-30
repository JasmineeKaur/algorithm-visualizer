# Algorithm Visualizer

I built this to actually *see* how sorting and pathfinding algorithms work instead of just reading about them. It animates each comparison, swap, and path search step by step.

🔗 **Live Demo:** https://algorithm-visualizer-de5y.vercel.app

## What's in it

### Sorting
Watch Merge Sort, Quick Sort, Bubble Sort, and Insertion Sort run on a randomly generated array. You can drag a slider to change the array size and animation speed — fewer bars makes it easy to see exactly what's being compared and swapped at each step.

### Pathfinding
Draw walls on a grid by clicking and dragging, then run Dijkstra's Algorithm or BFS to see the shortest path get calculated and animated in real time.

## Built with
React, JavaScript, CSS

## Running it locally
```bash
git clone https://github.com/JasmineeKaur/algorithm-visualizer.git
cd sorting-visualizer
npm install
npm start
```

## What I learned
Building this helped me understand the actual mechanics behind sorting algorithms (especially the recursion in Merge Sort and Quick Sort's partitioning) and graph traversal with Dijkstra's and BFS — not just their theoretical time complexity.
