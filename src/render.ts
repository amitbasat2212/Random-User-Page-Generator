


class Render{
    
    UserDetails:any []=[];
    RenderMainUser(user:User |Object){   
            
       this.RenderTheSourceAndTamplate('#userMain-template',user,'.header')
       this.UserDetails.push(user)
    }

    RenderFriendsUser(users:User[] |Object){
        this.RenderTheSourceAndTamplate('#friends-template',users,'.SectionOfUserFriends')
        this.UserDetails.push(users)
    }

    Renderpokimon(pockimon:Pokemon |Object){
        this.RenderTheSourceAndTamplate('#pockimon-template',pockimon,'.partMainPockimon') 
        this.UserDetails.push(pockimon)
    }

    RenderQoute(quote:Quote |Object){
       this.RenderTheSourceAndTamplate('#Quote-template',quote,'.partMainQuote')  
       this.UserDetails.push(quote) 
    }

    RenderBaconText(baconText:BaconText |Object){
        this.RenderTheSourceAndTamplate('#backon-template',baconText,'.partMainbackonText')   
        this.UserDetails.push(baconText)
    }

    RenderTheSourceAndTamplate(idofTamplate:String,objectKind:any,theInsert:String){      
       $(theInsert).empty();           
        const source = $(idofTamplate).html();
        const template = Handlebars.compile(source)
        const newHTML = template({object:objectKind})
        $(theInsert).append(newHTML);       
        
    }

    getUserDetails(){       
        return this.UserDetails;
    }

     

    
    
    
}