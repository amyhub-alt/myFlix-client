export const NavMenu = ()=> {
  const logOut = () => {
      localStorage.clear();
      location.href ="/login"
  }
  return (
<button style={{margin: "10px auto"}} onClick={logOut}>Log Out</button>
  )
}

  




