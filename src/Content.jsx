import React,{useContext,useState,useEffect,useReducer} from 'react'
import cart from './data'
import { reducer } from './reducer'
import axios from "axios"


const url = 'https://course-api.com/react-useReducer-cart-project'
const context = React.createContext()

let initialstate = {
    loading: false,
    cart : [],
    amount: 0,
    total: 0
}

export const Appcontext = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialstate)
    
    const increaseHandler = (id) =>{
        dispatch({type: "Increase",identity: id})
    }
    const decreaseHandler = (id) =>{
        dispatch({type: "Decrease",identity: id})
    }
    const removeHandler = (id) =>{
        dispatch({type: "Remove",identity: id})
    }
    const removeAllHandler = () =>{
        dispatch({type:"RemoveAll"})
    }
    const fetchData = ()=>{
        dispatch({type:"Loading"})
        axios.get(url)
        .then((resolve)=>{
            //console.log(resolve.data)
            dispatch({type:"Http_Request", item: resolve.data})
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    useEffect(()=>{
        //console.log("useEffect")
        dispatch({type:"Get_Total"})
       },[state["cart"]]) 

    return (<context.Provider
            value ={{...state,increaseHandler,decreaseHandler,removeHandler,removeAllHandler}}
            >
            {children}
        </context.Provider>)
}

export function useGlobalContext(){
    return useContext(context)
}