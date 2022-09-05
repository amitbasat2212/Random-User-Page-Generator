class Model{    
    async GettingFriendsOfUser():Promise<User[]>{     
        try{
            const getFriends = await $.get("https://randomuser.me/api/?results=6")
            const UserFriends:User[]=[];
            getFriends.results.forEach(element => {
                UserFriends.push(new User(element.name.first,element.name.last))
            });
            console.log(getFriends  )
            return (UserFriends)       
        } catch(err){
            console.log(err);
        }  
        return [];

    }

    async getMainUser():Promise<User>{    
        const user=new User("","","",""); 
        try{
            const getFriends = await $.get("https://randomuser.me/api/?results=1")
            const user =getFriends.results[0];
            const MainUser = new User(user.name.first,user.name.last,user.location.city,user.location.state)      
            return MainUser;
        } catch(err){
            console.log(err);
        }  

        return user
      

    }

}

class User{
    FirstName:String
    LastName:String
    city :String
    state:String
    constructor(FirstName:String, LastName:String,city :String="",state:String="")
    {
        this.LastName=LastName;
        this.FirstName=FirstName;
        this.city=city;
        this.state=state;
    }


}


