class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2)
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1)
    }
  }

  removeEgde(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    )

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    )
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEgde(vertex, adjacentVertex)
    }

    delete this.adjacencyList[vertex]
  }

  dfsRecursion(start) {
    let result = []
    let visited = {}
    let adjacencyList = this.adjacencyList

    function dfs(vertex) {
      if (!vertex) return null

      visited[vertex] = true
      result.push(vertex)

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    }

    dfs(start)

    return result
  }

  dfsIterative(start) {
    const stack = [start]
    const result = []
    const visited = {}

    visited[start] = true

    while (stack.length > 0) {
      const currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return result
  }

  bfs(start) {
    const queue = [start]
    const visited = {}
    const result = []

    visited[start] = true

    while (queue.length > 0) {
      const currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return result
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

// graph.dfsRecursion("A")
// graph.dfsIterative("A")
// grapg.bfs("A")
