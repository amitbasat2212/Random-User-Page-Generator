"use strict";
class Render {
    RenderMainUser(user) {
        this.RenderTheSourceAndTamplate('#userMain-template', user, '.header');
    }
    RenderFriendsUser(users) {
        this.RenderTheSourceAndTamplate('#friends-template', users, '.SectionOfUserFriends');
    }
    Renderpokimon(pockimon) {
        this.RenderTheSourceAndTamplate('#pockimon-template', pockimon, '.partMainPockimon');
    }
    RenderQoute(quote) {
        this.RenderTheSourceAndTamplate('#Quote-template', quote, '.partMainQuote');
    }
    RenderBaconText(baconText) {
        this.RenderTheSourceAndTamplate('#backon-template', baconText, '.partMainbackonText');
    }
    RenderTheSourceAndTamplate(idofTamplate, objectKind, theInsert) {
        $(theInsert).empty();
        const source = $(idofTamplate).html();
        const template = Handlebars.compile(source);
        const newHTML = template({ object: objectKind });
        $(theInsert).append(newHTML);
    }
}
//# sourceMappingURL=render.js.map