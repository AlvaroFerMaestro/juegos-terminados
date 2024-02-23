import { botonesInicio } from './src/components/botonesInicio/botonesInicio'
import { Header } from './src/components/header/header'
import { createTrivial} from './src/components/trivial/trivial'
import './style.css'

const divApp = document.querySelector('#app')

Header(divApp)
botonesInicio(divApp)
