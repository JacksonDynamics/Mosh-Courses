// circle.radius = 1;
// circle.area = a read only

const circle = {
  radius: 1,
  // A read only property is a getter
  get area() {
    return Math.PI * this.radius * this.radius;
  } 
};

console.log(circle.area);
