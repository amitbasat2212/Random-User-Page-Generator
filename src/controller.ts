
const ModelSinglton =new Model();
const RenderSinglton = new Render();

async function getFirendsOfUser() {
    const friends =await ModelSinglton.GettingFriendsOfUser();
    RenderSinglton.RenderFriendsUser(friends)
}

async function gettheMainUser() {
    const userMain=await ModelSinglton.getMainUser();
    RenderSinglton.RenderMainUser(userMain);
}


async function getKyneaWestQuaote() {
    const qoute=await ModelSinglton.getQuoteKanya();
    RenderSinglton.RenderQoute(qoute);
}

async function getPokimon() {
    const pockimon=await ModelSinglton.GetPokemon();
    RenderSinglton.Renderpokimon(pockimon);
}

async function GetBaconText() {
    const text=await ModelSinglton.getBaconText();
    RenderSinglton.RenderBaconText(text)
}

async function LoadFromDataBaseToScreen(){
    let UserDetails =await ModelSinglton.loadUserBeenSave(RenderSinglton.getUserDetails());
    if(Array.isArray(UserDetails)){
        for(let i=0;i<UserDetails.length;i++){
           if(UserDetails[i].User!=undefined){
                RenderSinglton.RenderMainUser(UserDetails[i].User) 
           } else if(UserDetails[i].Backotext){
            RenderSinglton.RenderBaconText(UserDetails[i].Backotext)      
           }else if(UserDetails[i].Users){
            RenderSinglton.RenderFriendsUser(UserDetails[i].Users)       
           }else if(UserDetails[i].Quote){
            RenderSinglton.RenderQoute(UserDetails[i].Quote)  
            }else if(UserDetails[i].Pokemon){
                RenderSinglton.Renderpokimon(UserDetails[i].Pokemon)   
            }
               
          
          
           
              
        }
    }
  

  }

    

  $('#generete').on('click',()=>{    
    gettheMainUser();
    getKyneaWestQuaote();
    getPokimon();
    GetBaconText();
    getFirendsOfUser();
    
})

$('#save').on('click',()=>{
    ModelSinglton.SetTheLocalStorage(RenderSinglton.getUserDetails());
})

$('#load').on('click',()=>{
   LoadFromDataBaseToScreen(); 
   
})

