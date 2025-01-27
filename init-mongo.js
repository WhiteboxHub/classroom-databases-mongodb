

// Connect to the "school" database (this will create it if it doesn't exist)
db = db.getSiblingDB("school");

// Create the "students" collection if it doesn't exist
if (!db.getCollectionNames().includes("students")) {
  db.createCollection("students");
  print("Created 'students' collection.");
} else {
  print("'students' collection already exists.");
}

// Define the students data array
const students = [
  {
    _id: 1, // Custom ObjectId for primary key example
    name: "John Doe",
    age: 22,
    email: "john.doe@example.com",
    course: "Computer Science",
    grade: "A",
    enrollmentDate: new Date("2023-09-15"),
    isActive: true,
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "USA"
    },
    skills: ["JavaScript", "Python", "MongoDB"],
    socialProfiles: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
      { platform: "GitHub", url: "https://github.com/johndoe" }
    ],
    attendance: [90, 85, 88, 95],
    createdAt: new Date("2025-01-24T10:30:00Z"),
    metadata: {
      lastAccessed: new Date(),
      comments: ["Good student", "Needs improvement in Python"]
    }
  },
  {
    _id: 2,
    name: "Jane Smith",
    age: 20,
    email: "jane.smith@example.com",
    course: "Mathematics",
    grade: "B",
    enrollmentDate: new Date("2022-08-22"),
    isActive: true,
    address: {
      street: "456 Elm St",
      city: "Palo Alto",
      state: "CA",
      zipCode: "94301",
      country: "USA"
    },
    skills: ["Statistics", "R", "Data Analysis"],
    socialProfiles: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/janesmith" },
      { platform: "Twitter", url: "https://twitter.com/janesmith" }
    ],
    attendance: [88, 92, 85, 89],
    createdAt: new Date("2025-01-23T12:45:00Z"),
    metadata: {
      lastAccessed: new Date(),
      comments: ["Excellent in statistics"]
    }
  },
  {
    _id: 3,
    name: "Alice Johnson",
    age: 21,
    email: "alice.johnson@example.com",
    course: "Physics",
    grade: "A",
    enrollmentDate: new Date("2023-01-12"),
    isActive: false, // Demonstrates a boolean field
    address: {
      street: "789 Oak St",
      city: "San Jose",
      state: "CA",
      zipCode: "95112",
      country: "USA"
    },
    skills: ["Quantum Mechanics", "C++", "Data Modeling"],
    socialProfiles: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/alicejohnson" },
      { platform: "Instagram", url: "https://instagram.com/alicejohnson" }
    ],
    attendance: [95, 90, 94, 97],
    createdAt: new Date("2025-01-22T14:15:00Z"),
    metadata: {
      lastAccessed: new Date(),
      comments: ["Needs to complete pending assignments"]
    },
    projects: [
      { title: "Physics Simulation", score: 95 },
      { title: "Data Modeling Research", score: 89 }
    ]
  }
];

// Insert the students data if the collection is empty
if (db.students.countDocuments() === 0) {
  db.students.insertMany(students);
  print("Inserted student data into 'students' collection.");
} else {
  print("Student data already exists in 'students' collection.");
}
