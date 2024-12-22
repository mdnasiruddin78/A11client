import { createContext } from "react";

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {

    const authInfo = {
        name: 'nasir uddin'
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;