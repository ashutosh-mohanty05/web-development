
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
        {
          "name": "java",
          "price": 20000,
          "instructor": "ashu"
        },
        {
          "name": "python",
          "price": 15000,
          "instructor": "john_doe"
        },
        {
          "name": "javascript",
          "price": 18000,
          "instructor": "coding_guru"
        },
        {
          "name": "c++",
          "price": 22000,
          "instructor": "pro_dev"
        },
        {
          "name": "web_development",
          "price": 25000,
          "instructor": "webmaster"
        },
        {
          "name": "data_science",
          "price": 28000,
          "instructor": "data_expert"
        },
        {
          "name": "android_app_dev",
          "price": 21000,
          "instructor": "app_dev_master"
        },
        {
          "name": "machine_learning",
          "price": 30000,
          "instructor": "ml_expert"
        },
        {
          "name": "network_security",
          "price": 24000,
          "instructor": "security_pro"
        },
        {
          "name": "frontend_frameworks",
          "price": 27000,
          "instructor": "frontend_ninja"
        }
      ]
)
    



// Print a message to the output window.
console.log(`Done inserting data`);

