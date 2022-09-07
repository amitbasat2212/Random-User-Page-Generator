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
const ModelSinglton = new Model();
const RenderSinglton = new Render();
function getFirendsOfUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const friends = yield ModelSinglton.GettingFriendsOfUser();
        RenderSinglton.RenderFriendsUser(friends);
    });
}
function gettheMainUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const userMain = yield ModelSinglton.getMainUser();
        RenderSinglton.RenderMainUser(userMain);
    });
}
function getKyneaWestQuaote() {
    return __awaiter(this, void 0, void 0, function* () {
        const qoute = yield ModelSinglton.getQuoteKanya();
        RenderSinglton.RenderQoute(qoute);
    });
}
function getPokimon() {
    return __awaiter(this, void 0, void 0, function* () {
        const pockimon = yield ModelSinglton.GetPokemon();
        RenderSinglton.Renderpokimon(pockimon);
    });
}
function GetBaconText() {
    return __awaiter(this, void 0, void 0, function* () {
        const text = yield ModelSinglton.getBaconText();
        RenderSinglton.RenderBaconText(text);
    });
}
function LoadFromDataBaseToScreen() {
    return __awaiter(this, void 0, void 0, function* () {
        let UserDetails = yield ModelSinglton.loadUserBeenSave(RenderSinglton.getUserDetails());
        if (Array.isArray(UserDetails)) {
            for (let i = 0; i < UserDetails.length; i++) {
                if (UserDetails[i].User != undefined) {
                    RenderSinglton.RenderMainUser(UserDetails[i].User);
                }
                else if (UserDetails[i].Backotext) {
                    RenderSinglton.RenderBaconText(UserDetails[i].Backotext);
                }
                else if (UserDetails[i].Users) {
                    RenderSinglton.RenderFriendsUser(UserDetails[i].Users);
                }
                else if (UserDetails[i].Quote) {
                    RenderSinglton.RenderQoute(UserDetails[i].Quote);
                }
                else if (UserDetails[i].Pokemon) {
                    RenderSinglton.Renderpokimon(UserDetails[i].Pokemon);
                }
            }
        }
    });
}
$('#generete').on('click', () => {
    gettheMainUser();
    getKyneaWestQuaote();
    getPokimon();
    GetBaconText();
    getFirendsOfUser();
});
$('#save').on('click', () => {
    ModelSinglton.SetTheLocalStorage(RenderSinglton.getUserDetails());
});
$('#load').on('click', () => {
    LoadFromDataBaseToScreen();
});
//# sourceMappingURL=controller.js.map