import Part from "./Part/Part"

const Content = ({props}) => {
    return (
      <div>
        {props.map(prop =>
          <Part name={prop.name} exercises={prop.exercises}/>
        )}
      </div>
    )
}

export default Content