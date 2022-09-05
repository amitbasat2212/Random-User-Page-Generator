"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Model {
    GettingFriendsOfUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getFriends = yield $.get("https://randomuser.me/api/?results=6");
                const UserFriends = [];
                getFriends.results.forEach(element => {
                    UserFriends.push(new User(element.name.first, element.name.last));
                });
                console.log(getFriends);
                return (UserFriends);
            }
            catch (err) {
                console.log(err);
            }
            return [];
        });
    }
    getMainUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User("", "", "", "");
            try {
                const getFriends = yield $.get("https://randomuser.me/api/?results=1");
                const user = getFriends.results[0];
                const MainUser = new User(user.name.first, user.name.last, user.location.city, user.location.state);
                return MainUser;
            }
            catch (err) {
                console.log(err);
            }
            return user;
        });
    }
}
class User {
    constructor(FirstName, LastName, city = "", state = "") {
        this.LastName = LastName;
        this.FirstName = FirstName;
        this.city = city;
        this.state = state;
    }
}
//# sourceMappingURL=model.js.map