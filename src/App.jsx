import Testimonial from "./components/testimonail"
import data from "./data.js"
function App() {
    const dataElements = data.map( item => {
        return <Testimonial 
            key={item.id}
            item = {item}
        />
    })
   return(
    <>
        {dataElements}
    </>
   )
}

export default App
