const expect = require("expect");

const { Users } = require("./users");

describe("Users", () => {
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "Mike",
        room: "Room One"
      },
      {
        id: "2",
        name: "Jen",
        room: "Room Two"
      },
      {
        id: "3",
        name: "Jill",
        room: "Room One"
      }
    ];
  });

  it("should add a new user", () => {
    var users = new Users();
    var user = {
      id: "123",
      name: "Jack",
      room: "Random Room"
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it("should remove a user", () => {
    var userId = "1";
    var user = users.removeUser(userId)

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it("should not remove user", () => {
    var userId = "99";
    var user = users.removeUser(userId)

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it("should find a user", () => {
    var userId = "1";
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it("should not find user", () => {
    var userId = "99";
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it("should return names for 'Room One", () => {
    var usersList = users.getUserList("Room One");

    expect(usersList).toEqual(["Mike", "Jill"]);
  });

  it("should return names for 'Room Two", () => {
    var usersList = users.getUserList("Room Two");

    expect(usersList).toEqual(["Jen"]);
  });
});
