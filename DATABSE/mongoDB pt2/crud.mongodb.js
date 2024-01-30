//CRUD operation
use("CrudDB")

// //CREATE
db.createCollection("courses")

// db.courses.insertOne({
//     name: "ashu's web dev free course",
//     price:0,
//     assignment:12,
//     projects: 45
// })

// db.courses.insertMany(
    
//         [
//           {
//             "name": "Introduction to Web Development",
//             "price": 0,
//             "assignments": 12,
//             "projects": 45
//           },
//           {
//             "name": "HTML Essentials",
//             "price": 0,
//             "assignments": 12,
//             "projects": 45
//           },
//           {
//             "name": "CSS Styling Techniques",
//             "price": 0,
//             "assignments": 12,
//             "projects": 45
//           },
//           {
//             "name": "JavaScript Fundamentals",
//             "price": 0,
//             "assignments": 12,
//             "projects": 45
//           },
//           {
//             "name": "Responsive Web Design with Bootstrap",
//             "price": 0,
//             "assignments": 12,
//             "projects": 45
//           },
//           {
//             "name": "Introduction to Backend Development with Node.js",
//             "price": 0,
//             "assignments": 12,
//             "projects": 45
//           },
//           {
//             "name": "Working with APIs",
//             "price": 0,
//             "assignments": 12,
//             "projects": 45
//           },
//           {
//             "name": "Version Control with Git",
//             "price": 0,
//             "assignments": 12,
//             "projects": 45
//           },
//           {
//             "name": "Web Security Best Practices",
//             "price": 0,
//             "assignments": 12,
//             "projects": 45
//           },
//           {
//             "name": "Deployment and Full-Stack Project",
//             "price": 0,
//             "assignments": 12,
//             "projects": 45
//           }
//         ]
      
      
// )


//READ
// let a=db.courses.find({price:0})
// console.log(a);
// console.log(a.count());
// // console.log(a.toArray());


// let b=db.courses.findOne({price:0})
// console.log(b);


//UPDATE

db.courses.updateOne({price:0}, {$set:{price:100}})

db.courses.updateMany({price:0}, {$set:{price:1000}})


//DELETE

db.courses.deleteOne({price:100})
db.courses.deleteMany({price:1000})