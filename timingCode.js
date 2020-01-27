function add(n){
    let total=0;
    for(let i=1;i<=n;i++){
        total+=i;
    }
    return total;
}

let t3 = performance.now();
add(100000000);
let t4 = performance.now();
console.log(`Time elapsed: ${(t4-t3)/100} seconds.`);
