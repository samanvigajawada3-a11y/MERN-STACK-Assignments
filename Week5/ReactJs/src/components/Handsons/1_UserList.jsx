import User from "./1_User"
function UserList() {
    // State
    const users = [
        {
            name : "name1",
            email : "name1@example.com",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYrAUYm4DirrxbzYZCqYgh_Fw9c2HTf97cQ&s"
        },
        {
            name : "name2",
            email : "name2@example.com",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYrAUYm4DirrxbzYZCqYgh_Fw9c2HTf97cQ&s"
        },
        {
            name : "name3",
            email : "name3@example.com",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYrAUYm4DirrxbzYZCqYgh_Fw9c2HTf97cQ&s"
        },
        {
            name : "name4",
            email : "name4@example.com",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYrAUYm4DirrxbzYZCqYgh_Fw9c2HTf97cQ&s"
        },
        {
            name : "name5",
            email : "name5@example.com",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYrAUYm4DirrxbzYZCqYgh_Fw9c2HTf97cQ&s"
        },
        {
            name : "name6",
            email : "name6@example.com",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYrAUYm4DirrxbzYZCqYgh_Fw9c2HTf97cQ&s"
        },        
        {
            name : "name7",
            email : "name7@example.com",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYrAUYm4DirrxbzYZCqYgh_Fw9c2HTf97cQ&s"
        },        
        {
            name : "name8",
            email : "name8@example.com",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYrAUYm4DirrxbzYZCqYgh_Fw9c2HTf97cQ&s"
        },        
    ]
    // return React element
    return(
        <div className="grid grid-cols-4 grid-rows-2 bg-amber-100">{
                users.map((user)=>(
                    <User key = {user.index} userObj = {user}/>
            ))}
        </div>
    )   
}
export default UserList;