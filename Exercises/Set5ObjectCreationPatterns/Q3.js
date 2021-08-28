/*

Problem
- circular queue is a collection of objects "conntected in a circle"
- When buffer has spaces

  - add: add the object to the position that immediately follows the most
  recently added object
    - if the buffer is empty then add it to the first position
    - what if those positions are blocked?

  - remove: removing an object always removes the object that has been
  - in the queue the longest

Further clarification
- let's say we can only go in one direction when adding
- position 1 ---> 2 ---> 3 ---> back to 1
  -this is not allowed: 1 ---> 3
    (even though these positions are strictly allowed)
  - so if I have item in position 1 and 2 is blocked then check these:
    - is 1 at begining or end? if yes place in the other end
    if that spot is empty
    - otherwise place it in a position that is free and index >
      last inserted objedct index


-When buffer is not empty
  - add: remove the oldest item in the queue and put new item in that position
  - remove: same behaviour when buffer has spaces

Can assume that none of the values stored in the queue are null
However, null may be used to designate empty spots in the buffer

enqueue command adds object to the queue
dequeue command removes and return the oldest object in queue
  it should return null if the queue is empty


Examples/Test Cases

let obj1 = {
  prop1: "hi",
};

let arr1 = [1, 2, 3, obj1];

console.log(arr1.includes(obj1)); //logs true

- Example 1
null, null, null
1, null, null
1, 2, null
null, 2, null
null, 2, 3
4, 2, 3
4, null, 3
4, 5, 3
4, 5, 6
7, 5, 6
7, null, 6
null, null, null

- Example 2
null, null, null, null
1, null, null, null
1, 2, null, null
null, 2, null, null
null, 2, 3, null
null, 2, 3, 4
null, null, 3, 4
5, null, 3, 4
5, 6, 3, 4
5, 6, 7, 4

Data Structure
- we push new elments to two arrays
  - one array for position
  - one array for time duration of each item in queue


Algorithm


Code
*/

class CircularQueue {
  constructor(queueSize) {
    this.queueByPosition = [];
    this.queueByTime = [];
    for (let idx = 0; idx < queueSize; idx++) {
      this.queueByPosition.push(null);
    }
  }

  enqueue(item) {
    let posToAdd = this.getPositionToAdd();
    this.queueByPosition[posToAdd] = item;
    this.queueByTime.push(item);
  }

  dequeue() {
    let idxOfItemToRemove = this.getPosOfItemToRemove();
    //Case 1: nothing to remove;
    //don't use falsy value check as posToRemove could be 0
    if (idxOfItemToRemove === null) return null;
    this.queueByPosition[idxOfItemToRemove] = null;
    return this.queueByTime.shift();
  }

  isQueueFull() {
    return this.queueByPosition.every(item => !(item === null));

  }

  isQueueEmpty() {
    return this.queueByPosition.every(item => item === null);
  }

  getPositionToAdd() {
    //Case 1: the queue is empty
    if (this.isQueueEmpty()) return 0;

    //Case 2: the queue is full
    if (this.isQueueFull()) {
      let itemToReplace = this.queueByTime[0];
      this.queueByTime.shift();
      return this.queueByPosition.indexOf(itemToReplace);
    }

    //Case 3: queue is not full and not empty
    let lastItemInserted = this.queueByTime[this.queueByTime.length - 1];
    return this.getNextPositionAfterItem(lastItemInserted);

  }

  getNextPositionAfterItem(item) {
    let idxOfLastInsertedItem = this.queueByPosition.indexOf(item);
    //return the next highest index which has no item
    let nextPos = Object.keys(this.queueByPosition).find(index => {
      return (Number(index) > idxOfLastInsertedItem) &&
             (this.queueByPosition[Number(index)] === null);
    });

    //if higher index position is not empty then start at
    //begining of queueByPosition
    //and return the first position that is free
    //Check
    let firstFreeIdxFrmStart = Object.keys(this.queueByPosition).find(index => {
      return this.queueByPosition[Number(index)] === null;
    });
    return Number(nextPos) || Number(firstFreeIdxFrmStart);
  }

  getPosOfItemToRemove() {
    //Case 1: queue is empty
    if (this.isQueueEmpty()) return null;

    //Case 2: queue is not empty
    return this.queueByPosition.indexOf(this.queueByTime[0]);
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);