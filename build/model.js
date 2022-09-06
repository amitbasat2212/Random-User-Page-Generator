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
    constructor() {
        this.LocalStorageTemp = [];
    }
    GettingFriendsOfUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getFriends = yield $.get("https://randomuser.me/api/?results=6");
                const UserFriends = [];
                getFriends.results.forEach((element) => {
                    UserFriends.push(new User(element.name.first, element.name.last));
                });
                this.LocalStorageTemp.push({ userFriends: UserFriends });
                return (UserFriends);
            }
            catch (err) {
                return { err: err };
            }
        });
    }
    getMainUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getFriends = yield $.get("https://randomuser.me/api/?results=1");
                const user = getFriends.results[0];
                const MainUser = new User(user.name.first, user.name.last, user.location.city, user.location.state, user.picture.medium);
                this.LocalStorageTemp.push({ MainUser: MainUser });
                return MainUser;
            }
            catch (err) {
                return { err: err };
            }
        });
    }
    getQuoteKanya() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getQuote = yield $.get("https://api.kanye.rest");
                const quote = new Quote(getQuote.quote);
                this.LocalStorageTemp.push({ quote: quote });
                return quote;
            }
            catch (err) {
                return { err: err };
            }
        });
    }
    GetPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const GetPokimon = yield $.get(`https://pokeapi.co/api/v2/ability/?limit=60&offset=${Math.random() * (30 - 10 + 1) + 10}}`);
                const urlArray = JSON.stringify(GetPokimon.results[0].url).split("/");
                const PetIndex = urlArray[urlArray.length - 2];
                const RenderTitleName = GetPokimon.results[0].name[0].toUpperCase() + GetPokimon.results[0].name.slice(1);
                const pokemon = new Pokemon(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PetIndex}.png`, RenderTitleName);
                this.LocalStorageTemp.push({ pokemon: pokemon });
                return pokemon;
            }
            catch (err) {
                return { err: err };
            }
        });
    }
    getBaconText() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const GetText = yield $.get("https://baconipsum.com/api/?type=meat-and-filler");
                const TextLorem = new BaconText(GetText.join(" "));
                this.LocalStorageTemp.push({ TextLorem: TextLorem });
                return TextLorem;
            }
            catch (err) {
                return { err: err };
            }
        });
    }
    SetTheLocalStorage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                localStorage.UserDetils = JSON.stringify(this.LocalStorageTemp);
            }
            catch (err) {
                return { err: err };
            }
        });
    }
}
class User {
    constructor(FirstName, LastName, city = "", state = "", img = "") {
        this.LastName = LastName;
        this.FirstName = FirstName;
        this.city = city;
        this.state = state;
        this.img = img;
    }
}
class Quote {
    constructor(quote) {
        this.quote = quote;
    }
}
class Pokemon {
    constructor(image = "", name = "") {
        this.image = image;
        this.name = name;
    }
}
class BaconText {
    constructor(text) {
        this.text = text;
    }
}
//# sourceMappingURL=model.js.map