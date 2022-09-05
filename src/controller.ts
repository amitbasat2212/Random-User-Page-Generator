
const ModelSinglton =new Model();
async function test() {
    console.log(await ModelSinglton.GettingFriendsOfUser());
}

test()