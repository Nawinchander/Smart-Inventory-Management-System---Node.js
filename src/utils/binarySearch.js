function binarySearch(products,target){

    let left=0;
    let right=products.length-1;

    while(left<=right){

        let mid=Math.floor((left+right)/2);

        if(products[mid].price===target)
            return products[mid];

        if(products[mid].price<target)
            left=mid+1;
        else
            right=mid-1;
    }

    return null;
}

module.exports = binarySearch;