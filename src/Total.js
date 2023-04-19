const Total = (props) => {
    
    return(
      <>
        
       <p>Total {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises} </p>
      </>
    )
}
export default Total