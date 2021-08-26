import { GetterTree } from 'vuex'
import PicklistState from './PicklistState';
import RootState from '@/store/RootState'

const getters: GetterTree <PicklistState, RootState> = {
  getPickingList (state) {
    return state.list;
  },
  getCurrent (state) {
    return state.current;
  }
}
export default getters;
