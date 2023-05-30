import Testimonial from "./components/testimonail"
import data from "./data.js"
import "./App.css"
function App() {
    const dataElements = data.map( item => {
        return <Testimonial 
            key={item.id}
            item = {item}
        />
    })
   return(
    <div className="comments">
        {dataElements}
    </div>
   )
}

export default App
