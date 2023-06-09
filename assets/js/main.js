let currentUser = JSON.parse(sessionStorage.getItem("tempuser"));
if(!currentUser){
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
}
let UserList = JSON.parse(localStorage.getItem("userList"));

let userHomeList = [];

for(let i = 0; i<UserList.length;i++){
    if(currentUser.userph != UserList[i].userph){
        userHomeList.push(UserList[i]);
    }
}

function loadUser(){
    console.log(userHomeList);
    for(let i=0;i<userHomeList.length;i++ ){
    const profileCard = document.createElement("div");
    profileCard.classList.add("profile-card");

    // create nested img element
    const profileImg = document.createElement("img");
    profileImg.src = "../assets/images/profile/4.jpg";
    profileImg.alt = userHomeList[i].username;
    profileImg.height = "50px";

    // append img element to parent element
    profileCard.appendChild(profileImg);

    // create nested div element
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    // create nested p element
    const nameP = document.createElement("p");
    nameP.textContent = userHomeList[i].username;

    // append p element to div element
    contentDiv.appendChild(nameP);

    // create nested span element
    const descSpan = document.createElement("span");
    descSpan.textContent = "Kurukka indha kowshik vandha";

    // append span element to div element
    contentDiv.appendChild(descSpan);

    // append div element to parent element
    profileCard.appendChild(contentDiv);

    // append parent element to the document body
    document.querySelector(".m-body").appendChild(profileCard);
    }
}
