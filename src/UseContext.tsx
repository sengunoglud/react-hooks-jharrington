import { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

function ConsumerComponent() {
    const user: UserState = useContext(UserContext);
    return (
        <div>
            <div>
                First: {user.first}
            </div>
            <div>
                Last: {user.last}
            </div>
        </div>
    );
}
function UserContextComponent() {
    const [user, userSet] = useState<UserState>({
        first: "Jane",
        last: "Smith"
    });

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
            <button
                onClick={() => userSet({
                    first: "Josie",
                    last: "Wales"
                    })}>Change context</button>
        </UserContext.Provider>
    )
}

export default UserContextComponent;
