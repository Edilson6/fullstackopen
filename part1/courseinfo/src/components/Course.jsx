const Header = ({head}) => <h1>{head}</h1>

const Content = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0 )

  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
      <p><b>Total of {total} exercises</b></p>
    </div>
  )
  
}

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Course = ({course}) => (
  <div>
    <Header  head= {course.name}/> 
    <Content  parts={course.parts}/>
  </div>  
)

export default Course