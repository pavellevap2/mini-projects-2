const R = require("ramda");

const data = [
  { groupId: "roles", label: "All", value: "all" },
  { groupId: "roles", label: "Employees", value: "employees" },
  {
    groupId: "groups",
    label: "UTMN Developers",
    value: "5b20a1ac3d26d358f9fbd59e"
  }
];

const useWithGroupBy = R.pipe(
  R.groupBy(R.prop("groupId")),
  R.map(R.map(R.prop("value")))
)(data);

const useWithReduceBy = R.reduceBy((acc, z) => acc.concat(z.value), [])(
  R.prop("groupId")
)(data);
