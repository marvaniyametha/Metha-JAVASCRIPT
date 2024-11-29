// password change

// step:1 oldPassword, newPassword,confirmChange
//    step 2:-
// 1.oldPass == mewPass --> pass already used
// 2.newPass ==confirmPass --> sucessfully changed 
let oldpass,newpass,confpass;
oldpass=prompt("enter your old pass");
newpass=prompt("enter your new pass");
confpass=prompt("enter your confirm pass");

if(oldpass ==newpass){
    console.log('password is already used');

}else{
    if(newpass !== confpass){
        console.log('new password &confirm pass is not matched ');
    }
  else{
    console.log('your pass is sucessfully changed');
  }
}