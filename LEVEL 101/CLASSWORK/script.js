// 1
let academy = {
    name: "beqa",
    courses: "web development",
    socialLink: "idk",
    reviews: [
        {
            name: "misha",
            status: "parent",
            review: "this academy is very good",
        },

        {
            name: "grisha",
            status: "student",
            review: "i have learned much thing from this academy i am now fullstack developer",
        },

        {
            name: "nika",
            status: "CEO",
            review: "come and learn in the best academy in the world",
        },
    ]
};

// 3
console.log(Object.entries(academy));

// 4
console.log(Object.keys(academy));

// 6
Object.freeze(academy);

// 7
console.log(Object.isFrozen(academy));
