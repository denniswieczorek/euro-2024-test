const B1 = 39 
const C1 = 40
const E1 = 43
const F1 = 41

export const mapping = [
  {
    predicted: ['A', 'B', 'C', 'D'],
    map: { [B1]: 'A', [C1]: 'D', [E1]: 'B',  [F1]: 'C' }
  },
  {
    predicted: ['A', 'B', 'C', 'E'],
    map: { [B1]: 'A', [C1]: 'E', [E1]: 'B',  [F1]: 'C' }
  },
  {
    predicted: ['A', 'B', 'C', 'F'],
    map: { [B1]: 'A', [C1]: 'F', [E1]: 'B',  [F1]: 'C' }
  },
  {
    predicted: ['A', 'B', 'D', 'E'],
    map: { [B1]: 'D', [C1]: 'E', [E1]: 'A',  [F1]: 'B' }
  },
  {
    predicted: ['A', 'B', 'D', 'F'],
    map: { [B1]: 'D', [C1]: 'F', [E1]: 'A',  [F1]: 'B' }
  },
  {
    predicted: ['A', 'B', 'E', 'F'],
    map: { [B1]: 'E', [C1]: 'F', [E1]: 'B',  [F1]: 'A' }
  },
  {
    predicted: ['A', 'C', 'D', 'E'],
    map: { [B1]: 'E', [C1]: 'D', [E1]: 'C',  [F1]: 'A' }
  },
 
  {
    predicted: ['A', 'C', 'D', 'F'],
    map: { [B1]: 'F', [C1]: 'D', [E1]: 'C',  [F1]: 'A' }
  },
  {
    predicted: ['A', 'C', 'E', 'F'],
    map: { [B1]: 'E', [C1]: 'F', [E1]: 'C',  [F1]: 'A' }
  },
  {
    predicted: ['A', 'D', 'E', 'F'],
    map: { [B1]: 'E', [C1]: 'F', [E1]: 'D',  [F1]: 'A' }
  },
  {
    predicted: ['B', 'C', 'D', 'E'],
    map: { [B1]: 'E', [C1]: 'D', [E1]: 'B',  [F1]: 'C' }
  },
  {
    predicted: ['B', 'C', 'D', 'F'],
    map: { [B1]: 'F', [C1]: 'D', [E1]: 'C',  [F1]: 'B' }
  },
  {
    predicted: ['B', 'C', 'E', 'F'],
    map: { [B1]: 'F', [C1]: 'E', [E1]: 'C',  [F1]: 'B' }
  },
  {
    predicted: ['B', 'D', 'E', 'F'],
    map: { [B1]: 'F', [C1]: 'E', [E1]: 'D',  [F1]: 'B' }
  },
  {
    predicted: ['C', 'D', 'E', 'F'],
    map: { [B1]: 'F', [C1]: 'E', [E1]: 'D',  [F1]: 'C' }
  },
 
 
]