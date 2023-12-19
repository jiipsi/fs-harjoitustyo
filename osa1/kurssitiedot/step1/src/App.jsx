

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part1}
        {props.exercises1}
        {props.part2}
        {props.exercises2}
        {props.part3}
        {props.exercises3}  
      </p>
    </div>
  )
}


const Total = (props) => {
  console.log(props)
  return (
    <div>
      
      Number of exercises {props.total}
      
    </div>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1+exercises2+exercises3



  
  
    return (
    <div>
      <Header course={course} />
      <Content part1={part1} />
      <Content part1={exercises1} />
      <Content part2={part2} />
      <Content part2={exercises2} />
      <Content part3={part3} />
      <Content part3={exercises3} />
      <Total total={total} />
         
    </div>
    )    


}

export default App