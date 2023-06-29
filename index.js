
const array = [
    {year: 1994},
    {year: 1999},
    {year: 2004},
    {year: 2009},
]

    array.sort((a,b) => b.year - a.year);

 console.log(array);   




// ვერ გაგვაკეთე !!!!!!!!

// const name = ["kato", "kita", "gigi", "gagi", "irakli",]

// const container = document.getElementById('cont')





 let data = [
    {
        name: "Kita",
        age: 22,
    },
    {
        name: "Kato",
        age: 19,
    },
    {
        name: "Gigi",
        age: 24,
    }
    
 ]

console.log(data)




let laptop = [
    {
        name: "Imac",
        price: 2500,
    },
    {
        Name: "Macbook",
        price: 2000,
    },
    {
        name: "Ipad",
        price: 1500,
    }
]

    let max = [];
    laptop.forEach(item => {
        if(item.price > max) 
            max = item.price
    })   
    
    console.log(max)
