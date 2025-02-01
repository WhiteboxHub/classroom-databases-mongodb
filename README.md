# MongoDB - NoSQL Document Database

## 1. Setting Up MongoDB with Docker

### 1.1 Build and Run the Container
```sh
git clone git@github.com:WhiteboxHub/classroom-databases-mongodb.git
cd classroom-databases-mongodb
docker build -t mongodb_image .
docker run -d --name mongodb_container -p 27017:27017 mongodb_image
```

### 1.2 Verify That the Container is Running
```sh
docker ps
```

---

## 2. Connecting to MongoDB

### 2.1 Using MongoDB Shell
Download the MongoDB shell from [MongoDB Shell Download](https://www.mongodb.com/try/download/shell).

```sh
mongosh "mongodb://localhost:27017"
```

### 2.2 Using MongoDB Compass (GUI for MongoDB)
1. Download and install [MongoDB Compass](https://www.mongodb.com/try/download/compass).
2. Connect using:
   ```
   mongodb://localhost:27017
   ```

---

## 3. Database and Collection Management
The following operations can be executed using `init-mongo.js`.

### 3.1 Creating a Database
```js
db = db.getSiblingDB("school");
```

### 3.2 Creating a Collection
```js
db.createCollection("students");
```

### 3.3 Inserting Data
#### Insert a Single Document
```js
db.students.insertOne({ name: "John Doe", age: 22, course: "Computer Science" });
```

#### Insert Multiple Documents
```js
db.students.insertMany([
  { name: "Jane Smith", age: 20, course: "Mathematics" },
  { name: "Alice Johnson", age: 21, course: "Physics" }
]);
```

---

## 4. Querying Data

### 4.1 Finding Documents
#### Find All Documents
```js
db.students.find();
```

#### Find Documents with a Condition
```js
db.students.find({ age: { $gt: 21 } });
```

### 4.2 Sorting and Limiting Results
#### Sort by Age in Ascending Order and Limit to 2 Results
```js
db.students.find().sort({ age: 1 }).limit(2);
```

### 4.3 Counting Documents
```js
db.students.countDocuments();
```

---

## 5. Updating and Deleting Data

### 5.1 Updating a Document
```js
db.students.updateOne({ name: "John Doe" }, { $set: { grade: "A+" } });
```

### 5.2 Deleting a Document
```js
db.students.deleteOne({ name: "Jane Smith" });
```

---

## 6. Indexing and Performance Optimization

### 6.1 Creating an Index
```js
db.students.createIndex({ email: 1 });
```

### 6.2 Viewing Indexes
```js
db.students.getIndexes();
```

---

## 7. Backup and Restore

### 7.1 Backup Database
```sh
mongodump --db school --out /backup
```

### 7.2 Restore Database
```sh
mongorestore --db school /backup/school
```

---

## License
This project is licensed under the MIT License.

## Contributors
- Whitebox Learning
