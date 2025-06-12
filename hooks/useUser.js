import { useEffect, useState} from "react";
import { onAuthStateChangedOwn } from "firebase/client";
import { useRouter } from "next/router";
export const USER_STATES = {
    NOT_LOGGED_IN: null,
    CHECKING_STATUS: undefined,
}

export default function useUser(){
    const [user, setUser] = useState(USER_STATES.CHECKING_STATUS);
    const router = useRouter();
      useEffect(() => {
        onAuthStateChangedOwn(setUser)
    
      }, []);

      useEffect(() => {
        if (user === USER_STATES.NOT_LOGGED_IN) {
          router.push("/");
        } 
      }, [user]);

    return user;
}