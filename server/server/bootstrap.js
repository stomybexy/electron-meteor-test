Meteor.startup(function(){
    if(Accounts.findUserByUsername('test')){
        return;
    }
    Accounts.createUser({
        username: 'test',
        password: 'test',
        profile: {
           codCen: 10
        }
    })
})