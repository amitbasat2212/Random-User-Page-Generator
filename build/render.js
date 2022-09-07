"use strict";
class Render {
    constructor() {
        this.UserDetails = [];
    }
    RenderMainUser(user) {
        this.RenderTheSourceAndTamplate('#userMain-template', user, '.header');
        this.UserDetails.push(user);
    }
    RenderFriendsUser(users) {
        this.RenderTheSourceAndTamplate('#friends-template', users, '.SectionOfUserFriends');
        this.UserDetails.push(users);
    }
    Renderpokimon(pockimon) {
        this.RenderTheSourceAndTamplate('#pockimon-template', pockimon, '.partMainPockimon');
        this.UserDetails.push(pockimon);
    }
    RenderQoute(quote) {
        this.RenderTheSourceAndTamplate('#Quote-template', quote, '.partMainQuote');
        this.UserDetails.push(quote);
    }
    RenderBaconText(baconText) {
        this.RenderTheSourceAndTamplate('#backon-template', baconText, '.partMainbackonText');
        this.UserDetails.push(baconText);
    }
    RenderTheSourceAndTamplate(idofTamplate, objectKind, theInsert) {
        $(theInsert).empty();
        const source = $(idofTamplate).html();
        const template = Handlebars.compile(source);
        const newHTML = template({ object: objectKind });
        $(theInsert).append(newHTML);
    }
    getUserDetails() {
        return this.UserDetails;
    }
}
//# sourceMappingURL=render.js.map