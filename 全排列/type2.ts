//使用迭代，但是是低效的迭代



function step(start:Array<number>,system:number) {
    // let cur=start[0]++;
    // if(cur===system){
    //     cur=0;
    //     let temp=step(start.slice(1,start.length-1),system);
    //     return [0,...temp]
    // }else{
    //     start[0]=cur;
    //     return start;
    // }
    for (let i = 0; i < start.length; i++) {
        let item=start[i]+1;
        if(item===system){
            start[i]=0;
        }else{
            start[i]=item;
            break;
        }
    }
    return start;
}


//通过数字创建数组
function createArr(index: number): Array<number> {
    let res = [];
    for (let i = 0; i < index; i++) {
        res.push(i+1);
    }
    return res.reverse();
}

function allZero(arr:Array<number>) {
    let res=true;
    for (let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            res=false;
        }
    }
    return res;
}

function allDiff(arr:Array<number>) {
    let res=true;
    let temp={};
    for (let i = 0; i < arr.length; i++) {
        if(temp[arr[i]]){
            res=false;
            break;
        }else if(arr[i]===0){
            res=false;
            break;
        }else{
            temp[arr[i]]=true;
        }
    }
    return res;
}

function comb(index:number){
    let res=[];
    let arr=createArr(index);
    while (!allZero(arr)){
        // console.log(arr+':'+allDiff(arr));
        if(allDiff(arr)){
            res.push(arr.slice(0,arr.length));
        }
        arr=step(arr,index+1);
    }
    return res;
}


function f(index:number){
    let arr=comb(index);
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }
    console.log(arr.length);

}

console.time('compute');
f(6);
console.timeEnd('compute');