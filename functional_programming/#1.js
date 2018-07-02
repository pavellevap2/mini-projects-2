const R = require("ramda")

// Given
const data = [
  { groupId: "roles", label: "All", value: "all" },
  { groupId: "roles", label: "Employees", value: "employees" },
  {
    groupId: "groups",
    label: "UTMN Developers",
    value: "5b20a1ac3d26d358f9fbd59e"
  }
]

// Need to get data like:
// { roles: ["all", "employees"], groups: ["5b20a1ac3d26d358f9fbd59e"] }

// Version I
console.log(
 R.groupBy ??? // -- hint which function to use
)

// Version II
console.log(
 R.reduceBy ??? // -- hint which function to use
)