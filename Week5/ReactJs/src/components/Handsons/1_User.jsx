function User(props){
    const {userObj} = props;
    return(
        <div className="p-5 border-2 m-4 text-center rounded-3xl">
            <img className="mx-auto rounded-4xl" src={userObj.image} alt="user"/>
            <p>{userObj.name}</p>
            <p>{userObj.email}</p>
            <button className="border-2 p-1 m-2" type="button">Profile</button>
        </div>
    )
}
export default User;