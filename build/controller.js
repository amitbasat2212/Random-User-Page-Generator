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
function LoadToDataBase() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
$('#generete').on('click', () => {
    gettheMainUser();
    getKyneaWestQuaote();
    getPokimon();
    GetBaconText();
    getFirendsOfUser();
});
//# sourceMappingURL=controller.js.map