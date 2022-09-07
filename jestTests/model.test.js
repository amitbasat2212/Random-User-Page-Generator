const Model = require('../build/model')

  
describe('Testing Exercises API',()=>{
  
    //excrice1
    test("testGettingFriendsOfUser function ", ()=>{
        const model = new Model.Model();
        const respone = await model.GettingFriendsOfUser();
        expect(respone.length).toBe(6);           
        
    })

    test("getMainUser function ", ()=>{
        const model = new Model.Model();
        const user = new Model.User();
        const respone = await model.getMainUser();
        expect(respone.length).toBe(1);           
        expect(respone).toBeInstanceOf(user);           
        
    })

    
    test("getQuoteKanya function ", ()=>{
        const model = new Model.Model();
        const respone = await model.getQuoteKanya();
        const quote = new Model.Quote();
        expect(respone.length).toBe(1);  
        expect(respone).toBeInstanceOf(quote);                
        
    })

    test("GetPokemon function ", ()=>{
        const model = new Model.Model();
        const respone = await model.GetPokemon();
        const Pokemon = new Model.Pokemon();
        expect(respone.length).toBe(1); 
        expect(respone).toBeInstanceOf(Pokemon);           
        
    })

    test("getBaconText function ", ()=>{
        const model = new Model.Model();
        const respone = await model.getBaconText();
        const BaconText = new Model.BaconText();
        expect(respone.length).toBe(1);    
        expect(respone).toBeInstanceOf(BaconText);        
        
    })

    
    




});



