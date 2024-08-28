function App(){
    const [counters,setCounters] = React.useState([])
    const update = (id,n)=>{
        let index = counters.findIndex(el => el.id === id)
        const newCounter = [...counters]
        if (newCounter[index].number + n < 0){
            alert('Number can not be negative!!!!!')
        }else{
            newCounter[index].number +=n
        }
        setCounters(newCounter)
    }


    const addCounter = () => {
        setCounters([...counters,{id:Math.floor(Math.random()*1000000),number:0}])
        
    }


    const remove = (id) =>{
        setCounters(item => item.filter(el => el.id != id))
    }    
    console.log(counters);
    return(
        <div className="sum">
            <h2 className='sumNum'>Sum = {counters.reduce((prv,now) =>{
                prv +=now.number
                return prv
            },0)}</h2>
            <button className="add" onClick = {() =>{addCounter()}}>Add Counter</button>
            <button className="add" onClick = {() =>{}}>+1</button>
            {counters.map(el =>(
                <Counter key={el.id} item={el} update ={update} remove = {remove}/>
            ))}
        </div>
    )
}

function Counter(props){
    const{item,update,remove} = props
    return(
        <div className="counter">
            <button onClick = {() => update(item.id,-1)}>-</button>
            <button onClick = {() => update(item.id,1)}>+</button>
            <h2>{item.number}</h2>
            <button onClick= {() => update(item.id,-item.number)}>C</button>
            <button onClick= {() => remove(item.id)}>X</button>
            
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)