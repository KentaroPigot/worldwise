import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState: AuthContextState = {
  user: null,
  isAuthenticated: false,
};

type AuthContextAction = {
  type: string;
  payload?: User;
};

function reducer(
  state: AuthContextState,
  action: AuthContextAction
): AuthContextState {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload as User, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

type Props = { children: React.ReactNode };

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: { ...FAKE_USER } });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
