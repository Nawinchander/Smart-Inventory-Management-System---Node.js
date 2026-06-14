class PriorityQueue{

    constructor(){
        this.heap=[];
    }

    enqueue(value,priority){

        this.heap.push({value,priority});

        this.heap.sort(
            (a,b)=>b.priority-a.priority
        );
    }

    dequeue(){
        return this.heap.shift();
    }

}

module.exports=PriorityQueue;


pq.enqueue(order1,3);

pq.enqueue(order2,10);

pq.dequeue();

/// order2


