// III
//'paginate' returns array of arrays
//that were all split up into 10 'followers'
//for each page.

//pass in the 'data'==='followers' from fetch
const paginate = (followers) => {
  //items('followers') for each page
  const itemsPerPage = 10;
  //-------------
  //how many pages need?
  //math.ceiling rounds up
  const numberOfPages = Math.ceil(
    //  100 / 10
    followers.length / itemsPerPage
  );
  //----------------
  //create new array

  const newFollowers = Array.from(
    //
    { length: numberOfPages },
    //'_' is 'item' but it is not needed
    //index =>
    (_, index) => {
      //
      const start = index * itemsPerPage;
      //
      return followers.slice(start, start + itemsPerPage);
    }
  );
  //
  return newFollowers;
};

export default paginate;
