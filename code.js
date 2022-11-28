fetch('../data/data.json')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data.laptopDet);
})
.catch(()=>{
    console.log("try again");
});