//递归


function f(index: number) {
    let arr: Array<number> = createArr(index);
    let res=digui(arr);
    // for (let i = 0; i < res.length; i++) {
    //     console.log(res[i]);
    // }
    console.log(res.length)

}


function digui(arr: Array<number>):Array<Array<number>> {
    let res = [];
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            let num=arr[i];
            let subArr=getSubArr(arr,num);
            if(subArr.length===0){
                return [[num]]
            }else{
                let subRes=digui(getSubArr(arr,num));
                for (let j = 0; j < subRes.length; j++) {
                    let temp=[num].concat(subRes[j]);
                    res.push(temp);
                }
            }
        }
    }
    return res;
}

//通过数字创建数组
function createArr(index: number): Array<number> {
    let res = [];
    for (let i = 0; i < index; i++) {
        res.push(i+1);
    }
    return res;
}

//数组去掉选中的那个
function getSubArr(arr:Array<number>,item:number):Array<number>{
    let res=[];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==item){
            res.push(arr[i]);
        }
    }
    return res;
}

console.time('compute');
f(11);
console.timeEnd('compute');