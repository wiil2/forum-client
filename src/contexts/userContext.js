import { createContext, useState } from "react";

const userContext = createContext({ userId: "" });

function ContextComponent(props) {
  const [currentUser, setCurrentUser] = useState({ userId: null });

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </userContext.Provider>
  );
}

export { userContext, ContextComponent };
