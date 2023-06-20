import { createContext, useState } from "react";

export const PostContext = createContext(null);

export default function Products({ children }) {
  const [postDetails, setPostDetails] = useState();
  return (
    <div>
      <PostContext.Provider value={{ postDetails, setPostDetails }}>
        {children}
      </PostContext.Provider>
    </div>
  );
}
