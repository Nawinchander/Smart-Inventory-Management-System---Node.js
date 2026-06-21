// src/utils/mergeIntervals.js
module.exports = function(intervals) {

    intervals.sort((a,b)=>a[0]-b[0]);

    let result = [intervals[0]];

    for(let i=1;i<intervals.length;i++){

        let prev = result[result.length-1];

        if(intervals[i][0] <= prev[1]){

            prev[1] =
            Math.max(prev[1],intervals[i][1]);

        }else{

            result.push(intervals[i]);

        }

    }

    return result;
}


const mergeIntervals =
require("../../src/utils/mergeIntervals");

describe("Merge Intervals",()=>{

    test("should merge overlapping intervals",()=>{

        const intervals = [
            [1,3],
            [2,6],
            [8,10]
        ];

        expect(
            mergeIntervals(intervals)
        ).toEqual([
            [1,6],
            [8,10]
        ]);

    });

});