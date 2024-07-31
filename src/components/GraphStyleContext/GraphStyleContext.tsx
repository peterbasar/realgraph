import { createContext } from 'react'
import { GraphStyleI } from '../Graph/types'
import GraphDefaultStyle from '../Graph/GraphDefaultStyle'

const GraphStyleContext = createContext<GraphStyleI>(GraphDefaultStyle)
export default GraphStyleContext
