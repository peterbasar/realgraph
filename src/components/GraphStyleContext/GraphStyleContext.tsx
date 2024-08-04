import { createContext } from 'react'
import { GraphStyleI } from '../types'
import GraphDefaultStyle from '../Graph/GraphDefaultStyle'

const GraphStyleContext = createContext<GraphStyleI>(GraphDefaultStyle)
export default GraphStyleContext
