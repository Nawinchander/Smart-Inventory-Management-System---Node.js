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