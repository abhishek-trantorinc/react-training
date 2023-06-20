export const Todolist = (props) => {
    return <div>
        {props.list.map((item, index) => {
            return <div style={{
                textDecoration: item.deleted ? 'line-through' : 'none'
            }} onClick={()=>{
                props.abc(item, index)

            }
            } key={index}>{item.text}</div>
        })}
    </div>
}