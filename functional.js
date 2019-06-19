//takes in states, returns an array of URLs in the form https://example.com/<urlified form>
//  eg 

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

function statesToUrls(elements) {
    return elements.map(element => "http://example.com/" + urlify(element));
}

function includesDakota(elements) {
    elements.forEach(function (element) {
        if (element.includes("Dakota")) {
            return element;
        } 
    })
}

function includesDakotaFilterIncludes(elements) {
    return elements.filter(element => element.includes("Dakota"));
}

function twoWordState(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2)
}

//Using reduce, write a function that returns the product of all the elements in an array. 

function product(elements) {
    return elements.reduce((product, n) => {return product *= n});
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(product(arr));