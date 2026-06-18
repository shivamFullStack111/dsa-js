let increasing =(n,temp=1)=>{
    if(temp > n) return 

    console.log(temp)
    increasing(n,temp+1)
}

increasing(10)