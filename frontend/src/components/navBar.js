

export default function NavBar(){

  // have to add path for  every button
    const navBarTopButtons = [["My cloud","somepath"],["Shared Files","path"],["Favorites","path"],["Upload Files","upload-logo.png"]]
    const navBarTopButtonElements = navBarTopButtons.map((data)=> {
      
      return (
        <div>
          <img className="navbar-btn-logo" src={data[1]} alt="logo"></img>
          <button className='navbar-btn'>{data[0]}</button>
        </div>
      )
    })
    return (
        <div className='navbar'>
        <img className="user-img" src='/xavier.jpg' alt='user-img' />

        {navBarTopButtonElements}
        <button className='navbar-btn navbar-setting-btn'>Settings</button>
        <button className='navbar-btn '>Log out</button>
      </div>

    )
}