
const Add = (num) => {
    return {
        type: "ADD",
        num1:num,
    }
}
const Cut = (num) => {
    console.log(num)
    return {
        type: "CUT",
        num,
    }
}
const Car = (data) => {
    return {
        type: "SEND_DATA",
        data1:data,
    }
}
const Toggle=(id) =>{
    return {
        type:'CHECK',
        id,
    }
}
const Total =(shops) =>{
    return {
        type:"ALL",
        shops,
    }
    
}
export {
    Add,
    Cut,
    Car,
    Toggle,
    Total,
}