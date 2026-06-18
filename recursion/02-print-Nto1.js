let decreasing =(n)=>{
    if(n==0) return 

    console.log(n)
    decreasing(n-1)
}

decreasing(10)