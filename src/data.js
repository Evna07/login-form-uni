const users = [
  {
    email: "admin@admin.com",
    password: "admin",
    username: "admin",
    firstName: "Admin",
    lastName: "User",
  },
];

export const addUser = (user) => {
  users.push(user);
};

export const findUser = (email, password) => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};

export default users;
