import { createStore } from 'redux';
import { rootReduser } from './rootReduser'

export const store = createStore(rootReduser)