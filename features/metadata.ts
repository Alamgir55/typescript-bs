// import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi there", plane, "color");

// const note = Reflect.getMetadata("note", plane, "color");

// console.log(note);

// // Reflect.defineMetadata("note", "hi there", plane);
// // Reflect.defineMetadata("height", 10, plane);

// // const note = Reflect.getMetadata("note", plane);
// // const height = Reflect.getMetadata("height", plane);

// // console.log(note);
// // console.log(height);

import "reflect-metadata";

@printMetadata
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", path, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");

// console.log(secret);
