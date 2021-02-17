import CartItem from "./CartItem";

//reducer takes an ACTION from DISPATCH,
//looks at the TYPE of properties
//and determines what kind of STATE should
//be return. What returns reducer will store in store.

//Reducer takes old version of State and Action
//(describes how the reducer should take the old version of State)
//and create a new version of State.
//
const reducer = (state, action) => {
  //================================
  //1
  //3.1 func 'clearCart' context.js
  //remove all items from the Cart
  if (action.type === "CLEAR_CART") {
    //return new state
    return {
      //state => loading, cart, amount, total
      //spread out old state value
      ...state,
      //only value that is changed => is 'cart'
      //change the cart value to an empty array
      cart: [],
    };
  }
  //================================
  //2
  //3.2 func "remove" context.js
  //remove one Item
  if (action.type === "REMOVE") {
    //return new state
    return {
      //state => loading, cart, amount, total
      //spread out old state value
      ...state,
      //only value that is changed => is 'cart'
      cart:
        //state before update// has cart array
        state.cart
          //filter grabs the items whose id do not matches
          .filter(
            //!!!filter returns all items except with id===payload.id
            //paylod has an id of the item to remove
            //cartItem => every item in the cart array
            //if cartItem's id does not match an id of payload
            //that item would be return
            (cartItem) => cartItem.id !== action.payload
          ),
    };
  }
  //=================================
  // 3
  //3.3 func "increase" context.js
  //increse one Item
  if (action.type === "INCREASE") {
    //let tempCart = [] is array
    //returns new state for 'cart'
    let tempCart =
      //state before update// has cart array
      state.cart
        //iterate over cart array
        .map((cartItem) => {
          //look for item id that is equal to
          //payload.id & change it's amount value
          if (cartItem.id === action.payload) {
            return {
              //cartItem => id,img, title, price, amount
              //spread out old state value
              ...cartItem,
              //only value is changed is increase amount
              amount: cartItem.amount + 1,
            };
          }
          //just return all cart items with no matched id
          return CartItem;
        });
    //spread old state & change only cart:
    //cart array has value of a new array 'tempCart'
    return { ...state, cart: tempCart };
  }
  //===================================
  //3.3 func "decrease" context.js
  //decrese one Item
  if (action.type === "DECREASE") {
    //let tempCar = [] is array
    //returns new state for 'cart'
    let tempCart =
      //state before update// has cart array
      state.cart //
        //iterate over cart array
        .map((cartItem) => {
          //look for item id that is equal to
          //payload.id & change it's amount value
          if (cartItem.id === action.payload) {
            return {
              //cartItem => id,img, title, price, amount
              //spread out old state value
              ...cartItem,
              //only value is changed is decrease amount
              amount: cartItem.amount - 1,
            };
          }
          //just return all cart items with no matched id
          return cartItem;
        })
        //totally remove cart item, if amount decreased below 1
        //filter is looking for all items that have amount above 0
        .filter((cartItem) => cartItem.amount !== 0);
    return {
      //spread old state & change only cart:
      ...state,
      //cart array has value of a new array 'tempCart'
      cart: tempCart,
    };
  }
  //==========================================
  //3.3 toggle amount of cart
  //instead of 'increase'/'decrease' funcs
  if (action.type === "TOGGLE_AMOUNT") {
    //let tempCart = [] is array
    //returns new state for 'cart'
    let tempCart =
      //state before update// has cart array
      state.cart //
        //iterate over cart array
        .map((cartItem) => {
          //look for item id that is equal to
          //payload.id & change it's amount value
          if (cartItem.id === action.payload.id) {
            //check 'type' if increasing
            if (action.payload.type === "inc") {
              return {
                //cartItem => id,img, title, price, amount
                //spread out old state value
                ...cartItem,
                //only value is changed is increase amount
                amount: cartItem.amount + 1,
              };
            }
            //check 'type' if decreasing
            if (action.payload.type === "dec") {
              return {
                //cartItem => id,img, title, price, amount
                //spread out old state value
                ...cartItem,
                //only value is changed is decrease amount
                amount: cartItem.amount - 1,
              };
            }
          }
          //just return all cart items with no matched id
          return cartItem;
        })
        //totally remove cart item, if amount decreased below 1
        //filter is looking for all items that have amount above 0
        .filter((cartItem) => cartItem.amount !== 0);
    //return new state:
    return {
      //spread old state & change only cart:
      ...state,
      //cart array has value of a new array 'tempCart'
      cart: tempCart,
    };
  }
  //=================================
  //4.1. Total price calculation
  if (action.type === "GET_TOTALS") {
    //1-------------------
    // let { total, amount } =
    //   //callback func
    //   state.cart.reduce(
    //     () => {},
    //     //return
    //     { total: 0, amount: 0 }
    //   );--------
    //1.1 returns the object of total&amount
    //& destructures it
    let { total, amount } =
      //state cart array
      state.cart //
        //Метод reduce служит для того, чтобы получить
        //финальное  значение  совершив итерацию  по массиву.
        .reduce(
          //reduce принимает в себя два параметра -
          //1)callback, который принимает в себя также
          //два параметра: всего object'cartTotal' и
          //итерируемый элемент массива 'cartItem';
          (cartTotal, cartItem) => {
            //pull out price&amount from item (data.js)
            const { price, amount } = cartItem;
            //how many pieces of an item (amount)
            //are in the cart and multiply by price
            //of that item:
            const itemTotal = price * amount;
            //add itemTotal (price*amount) of one item
            cartTotal.total += itemTotal;
            //increase amount in shopping bag Navbar.js
            cartTotal.amount += amount;
            //
            return cartTotal;
          },
          //2)второй параметр это некоторое начальное
          //значение (например, 0), которое будет
          //присвоено переменной cartTotal
          //1.2
          {
            total: 0,
            amount: 0,
          }
        ); //---------1.
    //2 digits after comma
    total = parseFloat(total.toFixed(2));
    //1.3
    //spread out old state,
    //overwrite/update 'total' & 'amount' from 'total'
    //let { total, amount}
    return { ...state, total, amount };
  }
  //==============================
  //3.4. context.js Loading
  if (action.type === "LOADING") {
    return {
      //all state
      ...state,
      //but set loading to true
      loading: true,
    };
  }
  //==================================
  //4.2. fetch context.js
  if (action.type === "DISPLAY_ITEMS") {
    return {
      //all state
      ...state,
      //but set 'cart' to the fetched data
      cart: action.payload,
      //& set loading back to false
      loading: false,
    };
  }
  //==================================
  //if action.type does not match
  throw new Error("no matching action type");
};

export default reducer;
