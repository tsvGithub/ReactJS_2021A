// III pagination (1-2-3...-99)
//IV => useFetch.js

//'paginate' returns array of arrays
//that were all split up into 10 'followers'
//for each page.

//function 'paginate' takes in the argument
//'data'==='followers' from fetch
const paginate = (followers) => {
  //   console.log(followers);

  //1. items('followers') for each page
  const itemsPerPage = 9;
  //-------------
  //2. how many pages?
  //math.ceiling rounds up
  const numberOfPages = Math.ceil(
    //  100 / 9
    followers.length / itemsPerPage
  );
  //----------------
  //3. create new array from arrays:
  //'Array.from' creates an array from an
  //iterable object
  const newFollowers = Array.from(
    //pass in brand new empty object
    //with the 'length' property &
    //'numberOfPages' value => the new array
    //has length of 12 (=100/9 & rounded up)
    { length: numberOfPages },
    //-------------------
    //Every time setting up this array of arrays
    //in each array pull certain amount of items
    //from the list 'followers' (the argument in
    //'paginate' function).

    //Iterate over 'newFollowers' and in each
    //iteartion, depending on the index,
    //set up first 9 followers, next 9, next 9,
    // etc. and the all way to 12 will pass in
    //remaining all the followers.

    //It can be done by passing in the
    //second argument (callback function)
    //just like with a map:
    //access the 'item' first, ('_' is 'item')
    // but it is 'undefined' and not needed;
    //and then get the 'index';
    //iterate over '{ length: numberOfPages }' array
    //that is '12 items' (per page)
    //=> and what will be
    //returned place into that 'item'
    (_, index) => {
      //first time 'index'=0, next 1, next 2...
      //multiply 'index' by items per page (9)
      const start = index * itemsPerPage;
      //console.log(start); //0,9,27,36,45,54,...99

      //followers=>whole list
      //.slice() pulls out items from the original
      //'followers' array and setting up the new
      //array.
      //'start'=> is starting point where to start
      //grabbing the items. 'start' every time is changing:
      //start with 0, then 9, etc...
      //'start + itemsPerPage' => is end position,
      //which is not included!
      //(0 + 9=9, but 9 is not inclueded =>
      //array from 0 to 8 => that are 9 items!);
      //(9+9=18, but 18 is not inclueded =>
      //array from 9 to 17=> that are 9 items!);
      //(18+9)...
      return followers.slice(start, start + itemsPerPage);
    }
  );
  //   console.log(newFollowers); //[12]
  //'paginate' returns array of arrays
  //that were all split up into 10 'followers'
  //for each page.
  return newFollowers;
};

export default paginate;
