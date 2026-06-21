// enqueue(order,priority)


const PriorityQueue =
require("../../src/utils/priorityQueue");

describe("Priority Queue",()=>{

    test("should dequeue highest priority first",()=>{

        const pq = new PriorityQueue();

        pq.enqueue("Order1",1);
        pq.enqueue("Order2",10);
        pq.enqueue("Order3",5);

        expect(
            pq.dequeue()
        ).toEqual({
            value:"Order2",
            priority:10
        });

    });

});