import redux from "redux";
//redux===возвращение

//*******REDUX BASICS***********
//*****************************/

//dispatch(1)=>reducer(2)
// ACTION, ACTION CREATOR, PAYLOAD, REDUCER,
// STORE, STORE LISTENER, DISPATCH
//=============================
//1.ACTION is object with type property,
//whos value is describing change
//you want to make to state
const action = {
  type: "ADD_ONE",
};
//1.1. ACTION & PAYLOAD
// An ACTION object can have other fields with
//additional information about what happened.
//By convention, we put that information in a
//field called PAYLOAD.
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk",
};
//-----------------------------
//2. ACTION CREATOR
//is a func which returns an ACTION OBJECT
//(with type property) to describe how the REDUCER
//should take the old version of state and create
// a new version of state
function increment() {
  return {
    type: "INCREMENT",
  };
}
//2.1. PAYLOAD
//The ACTION CREATOR can be called either without
//arguments or with a PAYLOAD to be attached to the
//action.
function increment(amount) {
  return {
    type: "INCREMENT",
    //PAYLOAD makes ACTION more dynamic
    //paylod==data===etc
    payload: amount,
  };
}

//------------------------------
//3. REDUCER (reducere ‘bring back’)
//is a func that returns new verion of state;
//REDUCER takes from DISPATCH an old version of
//state & an ACTION, which is object with
//a type property. ACTION describes how REDUCER
//should create a new version of state.
//REDUCER looks at the TYPE of properties
//and determines what kind of STATE should be
//return. What returns reducer will store in
//STORE.
function reducer(oldState = { count: 0 }, action) {
  //return new state based on the incoming
  //action.type
  // A new STATE will store in Redux STORE
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }
  //=========OR==============
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
  //3.1. PAYLOAD
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload,
      };
  }
}

//------------------------------
//4. STORE
//store methods => .dispatch(action) <- sends an action to reducer
// .subscrbe(listener)
// .getState()  <- current state
// .replaceReducer(nextReducer)

//create STORE
//createStore takes one parameter => reducer function
const store = redux.createStore(reducer);
// console.log(store);
// {dispatch: dispatch(action), subscribe: subscribe(listener),
// getState: getState(), replaceReducer: replaceReducer(nextReducer)}

//----------------------
//5. STORE LISTENER
//store.subscribe for change
store.subscribe(() => {
  //any kind of operation to perform after a
  //STORE changed
  store.getState();
  //get current state
});

//---------------------
//6. DISPATCH
//sends ACTION to the REDUCER.
//Reducer takes ACTION, looks at the TYPE of
//properties and determine what kind of state should be return
//store.dispatch(action);
store.dispatch(increment());

//6.1. with PAYLOAD: 5===amount===payload
store.dispatch(increment(5));
