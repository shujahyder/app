import React,{createContext,useState} from 'react'


export const AuthContext = createContext()
function AuthProvider({children}) {
    
    const [user, setUser] = useState(null);

    const login = (user, token) => {
        setUser(user);
        localStorage.setItem("authToken", JSON.stringify(token));
    }

    const signup = (user, token) => {
        setUser(user);
        localStorage.setItem("authToken", JSON.stringify(token));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("authToken")
    }

  return (
      <AuthContext.Provider value={{ user,login,logout }}>
          {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider