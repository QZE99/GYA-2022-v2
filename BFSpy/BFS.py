#Graphs: Breadth-first search för Python
#funktion kommer att förklara och innehåller hela koden för BFS
from timeit import default_timer as timer
start = timer()
def bfs(graph, root):
    #Koden nedanför lagras statnoden för BFS
    nodesLen = {}

    #Koden nedanför definierar alla distanser från startnoden
    for i in range(len(graph)):
        nodesLen[i] = "inf"

    #Koden nedanför sätter startnoden som 0 lägger startposition i en queue 
    #Och queue i denna hållet är då vår queue data structure     
    nodesLen[root] = 0
    queue = [root]
    current = None #Titta var man är i noden 

    #Koden nedanför är då var queue data structure för att vet vilken nod man har besökt 
    #Och markerar att man har besökt detta noden 
    while len(queue) != 0:
        current = queue.pop(0) #Tar bort den givna startposition från queue för att den är redan besökt
        curConnected = graph[current] #Kopplar alla noder till den aktuella noden exempel är då startar vid node 2 och kopplar till 1, 4 och 5 noden
        neightborIdx = [] #kollar vilka noder är kopplat till den aktuella noden
        #Kopplar den första noden till den aktuella noden
        if 1 in curConnected:
            idx = curConnected.index(1)
        else:
            idx = -1

        #Koden nedanför visar om det inte finns en index av ett
        while idx != -1:
            neightborIdx.append(idx) #Sätter index till vår neighborIdx lista
            idx = curConnected.index(1, idx + 1) if 1 in curConnected[idx + 1:] else -1 #lettar efter nästa noden från den föra noden

        #Koden nedanför kommer att visa vår distancen för alla noden
        for j in range(len(neightborIdx)):

            #Tittar om granne index från granne index är lika med Infinity
            #Så har vi inte deffinerat distancen för noden
            if  nodesLen[neightborIdx[j]] == "inf":
                nodesLen[neightborIdx[j]] = nodesLen[current] + 1 #Sätter värden av nodens length array för den aktuella noden
                queue.append(neightborIdx[j]) #Sätter den in i queue för att titta alla noder från den noden
    return nodesLen #returnar nodens length array

#Koden nere är en incidence matrix som visas vilken index en array är kopplad med
#Exempel: Index 0 vissar att den är kopplad med noden 2,3,4 och 5
#Note: i0 -> i5 är index för exBFSGraph
exBFSGraph = [
   [0, 0, 1, 1, 1, 1],
   [0, 0, 0, 0, 0, 0],
   [0, 1, 0, 0, 1, 1],
   [1, 0, 1, 1, 0, 0],
   [1, 0, 1, 0, 0, 0],
   [0, 1, 0, 1, 1, 1]
]
print(bfs(exBFSGraph, 2)) #startnoden är då 2
end = timer()
print(end - start)