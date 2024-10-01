import Header from "./Header/Header"
import Content from "./Content/Content";

const Course = ({course}) => {
    console.log(course.name);
    return (
        <div>
            <Header name={course.name}/>
            <Content props={course.parts}/>
        </div>
    )
}

export default Course