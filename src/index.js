
// You should implement your task here.



module.exports = function towelSort (matrix) {

    return (matrix === undefined || matrix == ""
        || matrix === []) ? [] : matrix
    .map((el, i)=> 
    (i%2 === 1) ? el.reverse() : el)
    .join()
    .split(",")
    .map(val => val * 1);

}





