
class Render{
    
    RenderMainUser(user:User |Object){   
        
       this.RenderTheSourceAndTamplate('#userMain-template',user,'.header')
    }

    RenderFriendsUser(users:User[] |Object){
        this.RenderTheSourceAndTamplate('#friends-template',users,'.SectionOfUserFriends')
    }

    Renderpokimon(pockimon:Pokemon |Object){
        this.RenderTheSourceAndTamplate('#pockimon-template',pockimon,'.partMainPockimon')   
    }

    RenderQoute(quote:Quote |Object){
       this.RenderTheSourceAndTamplate('#Quote-template',quote,'.partMainQuote')   
    }

    RenderBaconText(baconText:BaconText |Object){
        this.RenderTheSourceAndTamplate('#backon-template',baconText,'.partMainbackonText')   
    }

    RenderTheSourceAndTamplate(idofTamplate:String,objectKind:any,theInsert:String){
       $(theInsert).empty();
        const source = $(idofTamplate).html();
        const template = Handlebars.compile(source)
        const newHTML = template({object:objectKind})
        $(theInsert).append(newHTML);
    }
    
    
}