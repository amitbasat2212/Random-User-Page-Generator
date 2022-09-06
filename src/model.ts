
type LocalStorageObjects= User | User[] | Pokemon |Quote|BaconText |Object;
class Model{   
    
    LocalStorageTemp:LocalStorageObjects[]=[];
    
    async GettingFriendsOfUser():Promise<User[] | Object>{     
        try{
            const getFriends = await $.get("https://randomuser.me/api/?results=6")
            const UserFriends:User[]=[];
            getFriends.results.forEach((element:any) => {
                UserFriends.push(new User(element.name.first,element.name.last))
            });
            this.LocalStorageTemp.push({userFriends:UserFriends})
            return (UserFriends)       
        } catch(err){
            return {err:err}
        }  
        

    }

    async getMainUser():Promise<User | Object>{    
        try{
            const getFriends = await $.get("https://randomuser.me/api/?results=1")
            const user =getFriends.results[0];
            const MainUser:User = new User(user.name.first,user.name.last,user.location.city,user.location.state,user.picture.medium)      
            this.LocalStorageTemp.push({MainUser:MainUser})
            return MainUser;
        } catch(err){
            return {err:err}
        }  

       
      

    }

    async getQuoteKanya():Promise<Quote | Object>{    
        
        try{
            const getQuote = await $.get("https://api.kanye.rest")
            const quote:Quote=new Quote(getQuote.quote);
            this.LocalStorageTemp.push({quote:quote})
            return quote;
        } catch(err){
            return {err:err};
        }  

              
    }
    async GetPokemon():Promise<Pokemon | Object>{        
        try{
            const GetPokimon = await $.get(`https://pokeapi.co/api/v2/ability/?limit=60&offset=${Math.random() * (30 - 10 + 1) + 10}}`)
            const urlArray=JSON.stringify(GetPokimon.results[0].url).split("/");
            const PetIndex = urlArray[urlArray.length-2]
            const RenderTitleName = GetPokimon.results[0].name[0].toUpperCase() + GetPokimon.results[0].name.slice(1);
            const pokemon:Pokemon=new Pokemon(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PetIndex}.png`,RenderTitleName);
            this.LocalStorageTemp.push({pokemon:pokemon})
            return pokemon;
        } catch(err){
            return {err:err};
        }  
           
    }
    async getBaconText():Promise<BaconText | Object>{        
        try{
            const GetText= await $.get("https://baconipsum.com/api/?type=meat-and-filler")
            const TextLorem:BaconText=new BaconText(GetText.join(" "));
            this.LocalStorageTemp.push({TextLorem:TextLorem})
            return TextLorem;
        } catch(err){
            return {err:err};
        }  
           
    }

    async SetTheLocalStorage(){
        try{ 
           localStorage.UserDetils=JSON.stringify(this.LocalStorageTemp);          
      
        } catch(err){
            return {err:err};
        }  
           
    }
   

}

class User{
    FirstName:String
    LastName:String
    city :String
    state:String
    img:String
    constructor(FirstName:String, LastName:String,city :String="",state:String="",img:String="")
    {
        this.LastName=LastName;
        this.FirstName=FirstName;
        this.city=city;
        this.state=state;
        this.img=img;
    }

}

class Quote{
    quote:String   
    constructor(quote:String)
    {       
        this.quote=quote;
    }
} 


class Pokemon{
    image:String
    name:String
    constructor(image:String="",name:String="")
    {       
        this.image=image;
        this.name=name;
    }
} 

 class BaconText{
    text:String
    constructor(text:String)
    {       
        this.text=text;
        
    }
    
 }   


