export const reducer = (state,action) =>{
    switch(action.type){
        case "Loading":
            return {... state, loading: true}
        case "Http_Request":
            return {...state, loading: false, cart: action.item}
        case "Increase":
            const newCart = state.cart.map((cartItem)=>{
                if (cartItem.id === action.identity){
                    return {... cartItem, amount: cartItem.amount + 1}
                }
                return cartItem
            })
            return {... state, cart : newCart}
        case "Decrease":
            const newCart1 = state.cart.map((cartItem)=>{
                if (cartItem.id === action.identity){
                    return {...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            }).filter((cartItem)=>cartItem.amount !== 0)
            return {...state, cart : newCart1}
        case "Remove":
            const newCart2 = state.cart.filter((cartItem)=>cartItem.id !== action.identity)
            return {...state, cart : newCart2}
        case "Get_Total":
            let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
                cartTotal.amount += cartItem.amount
                let itemAmount = cartItem.price * cartItem.amount
                cartTotal.total += itemAmount
                return cartTotal                 
            },{
                total: 0,
                amount : 0
            })
            total = parseFloat(total.toFixed(2))
            return {...state, total, amount}
        case "RemoveAll":
            return {...state, cart: []}
    }
}