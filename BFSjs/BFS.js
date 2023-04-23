/* Graphs: Breadth-first search för JavaScript */
//funktion kommer att förklara och innehåller hela koden för BFS
const start = performance.now();
function bfs(graph, root) {
  
  //Koden nedanför lagras statnoden för BFS
  var nodesLen = {};
  
  //Koden nedanför definierar alla distanser från startnoden  
  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }

  //Koden nedanför sätter startnoden som 0 lägger startposition i en queue 
  //Och queue i denna hållet är då vår queue data structure 
  nodesLen[root] = 0; 
  var queue = [root];
  var current; //Titta var man är i noden 
  

  //Koden nedanför är då var queue data structure för att vet vilken nod man har besökt 
  //Och markerar att man har besökt detta noden 
  while (queue.length != 0) {
    current = queue.shift(); //Tar bort den givna startposition från queue för att den är redan besökt
    var curConnected = graph[current]; //Kopplar alla noder till den aktuella noden exempel är då startar vid node 2 och kopplar till 1, 4 och 5 noden
    var neighborIdx = []; //kollar vilka noder är kopplat till den aktuella noden
    var idx = curConnected.indexOf(1); //Kopplar den första noden till den aktuella noden

    //Koden nedanför visar om det inte finns en index av ett
    while (idx != -1) {
      neighborIdx.push(idx); //Sätter index till vår neighborIdx lista
      idx = curConnected.indexOf(1, idx + 1); //lettar efter nästa noden från den föra noden
    }

    //Koden nedanför kommer att visa vår distancen för alla noden 
    for (var j = 0; j < neighborIdx.length; j++) {
      
      //Tittar om granne index från granne index är lika med Infinity
      //Så har vi inte deffinerat distancen för noden
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1; //Sätter värden av nodens length array för den aktuella noden
        queue.push(neighborIdx[j]); //Sätter den in i queue för att titta alla noder från den noden
      }
    }
  }
  return nodesLen; //returnar nodens length array
};

//Koden nere är en incidence matrix som visas vilken index en array är kopplad med
//Exempel: Index 0 vissar att den är kopplad med noden 2,3,4 och 5
//Note: i0 -> i5 är index för exBFSGraph
var exBFSGraph = [
       /*0, 1, 2, 3, 4, 5*/
  /*i0*/[0, 0, 1, 1, 1, 1],
  /*i1*/[0, 0, 0, 0, 0, 0],
  /*i2*/[0, 1, 0, 0, 1, 1],
  /*i3*/[1, 0, 1, 1, 0, 0],
  /*i4*/[1, 0, 1, 0, 0, 0],
  /*i5*/[0, 1, 0, 1, 1, 1]
];
console.log(bfs(exBFSGraph, 2)); //startnoden är då 2
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
