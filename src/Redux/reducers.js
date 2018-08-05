import {combineReducers} from 'redux'
const initialState = {
    cart_list: [],
}

const setNum = (state = initialState.cart_list ,action) => {
    switch(action.type){
    case "SEND_DATA":
        return action.data1
        break;
    case 'ADD':
        const datas = [...state]
        datas.map((item,index)=>{
            if(item.id == action.num1){
                return ++item.count
            }
        })
        return datas
        break;
    case 'CUT':
        const dataa = [...state]
        dataa.map((item,index)=>{
            if(item.id == action.num){
                return --item.count
            }
        })
        return dataa
        break;
    case "CHECK":
        const flagarr = [...state]
        return  flagarr.map((item)=>{
            return  (item.id === action.id) ? {...item,flag:!item.flag} : item;
        })
        break;
    default :
        return state;
    }
}
//计算总价格
const Total = (all={sumprice:0,num:0},action) =>{
    switch(action.type){
    case 'ALL':
        all.sumprice = 0;
        all.num = 0;
        action.shops.map(item =>{
            if(item.flag){
                all.sumprice +=item.count*item.price
                all.num +=item.count
            } 
        }) 
        return all
    default :
        return all
    }
}
//自执行
const todoAPP = combineReducers({
    list:setNum,
    total:Total,
})
export  default todoAPP;