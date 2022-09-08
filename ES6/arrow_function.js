// ~

const course = {
    name: "ReactJS",
    getName: () => {
        return this.name; // this ~ context
    },
};

console.log(course.getName());

// ~

const Course = function (name, price) {
    this.name = name;
    this.price = price;
};

const jsCourse = new Course('Javascript', '10000');
console.log(jsCourse);
