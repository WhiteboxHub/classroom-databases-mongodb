## README.md
### MongoDB Class Example: Students Database
This example demonstrates key MongoDB concepts by creating and populating a students collection in the school database.

__________________________________________________________________________________
# Topics Covered

### 1.Database Creation:

The school database is created automatically when switched using getSiblingDB("school").
### Collections:

The students collection is explicitly created using createCollection().
### Documents:

Each student is represented as a document with various fields (e.g., name, age, skills).
### Custom _id:

Each document has a custom _id (primary key), which demonstrates how to use custom identifiers.
### Embedded Documents:

Fields like address and socialProfiles demonstrate how to use embedded/nested documents.
### Arrays:

Fields like skills, attendance, and projects show how to store lists of data.
### Date Fields:

Fields like enrollmentDate and createdAt store ISO 8601 date formats for time-based operations.
### Conditional Insertions:

Data is inserted into the collection only if it is empty (countDocuments() check).
### Metadata Fields:

Fields like metadata demonstrate how to store additional information like lastAccessed and comments.

### Boolean Fields:

The isActive field showcases how to represent boolean data in MongoDB.

### Complex Objects:

Projects (projects) demonstrate arrays of objects with nested details.
__________________________________________________________________________________

# Prerequisites

Docker: Installed and configured on your machine.
Docker Image: mongo:latest.
__________________________________________________________________________________

# Setup

### Clone the Repository:


git clone <repository-url>
cd mongodb-class-example


### Build Docker Image:


```bash
docker build -t mongo-class-example .
```

### Run MongoDB Container:

```bash
docker run -d --name mongodb-container -p 27017:27017 mongo-class-example
```

### Verify Database and Data:

Access the container:

```bash
docker exec -it mongodb-container mongosh
```

Switch to the database:


```bash
use school;
show collections;
db.students.find().pretty();
```

Usw ``` show dbs```  to see the data

You should see the students collection populated with the sample data.

Commands for Teaching

Insert New Data:

```bash
db.students.insertOne({
  name: "New Student",
  age: 25,
  course: "Art",
  grade: "B",
  isActive: true
});
```

Update Existing Data:


```bash
db.students.updateOne({ name: "John Doe" }, { $set: { grade: "A+" } });
```

Query Data:

Find all active students:



```bash
db.students.find({ isActive: true }).pretty();
Find students with a grade of "A":
```


```bash
db.students.find({ grade: "A" }).pretty();
```

Delete Data:


```bash
db.students.deleteOne({ name: "John Doe" });
```
Aggregation Example:

Calculate average attendance:


```bash
db.students.aggregate([
  { $unwind: "$attendance" },
  { $group: { _id: "$name", avgAttendance: { $avg: "$attendance" } } }
]);
```

