import { FETCH_WEATHER } from '../actions/index';

//change state=null for mine, i think
export default function(state = [], action) {
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            //and change this from concat to
            //return [ action.payload.data ]; I think
            return state.concat([action.payload.data]);
    }
    return state;
}

