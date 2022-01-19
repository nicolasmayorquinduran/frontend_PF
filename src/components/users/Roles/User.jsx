import { Routes, Route} from 'react-router-dom'
import Product from '../products/products'

function Guest (){
    return (
        <div>
            <Routes>
                <Route exact path='/products' element={Product}/>
            </Routes>
        </div>
    )
}