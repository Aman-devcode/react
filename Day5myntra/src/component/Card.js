function Card(props){
    return(
        <div className="card"style={{border:"2px solid black",padding:"2px"}}>
        <img src="https://images.unsplash.com/photo-1765939928623-9d4752a5f462?q=80&w=687&auto=format&fit=crop" height="220px" width="220px"/>
        <div style={{textAlign:"center"}}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h3>Shop Now</h3>
        </div>
        </div>

    )
}
export default Card;