import { useState } from "react";

function UseStateComponent() {
    const [arr, setArr] = useState<number[]>([]);
    const handleAddToArray = () => {
        setArr([...arr, arr.length + 1]);
    };
    const [name, setName] = useState<string | null>(null);

    return (
        <div>
            <div>
                <button onClick={handleAddToArray}>Add to array</button>
                {JSON.stringify(arr)}
            </div>
            <div>
                <button onClick={() => setName("jack")}>Set name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    );
}

export default UseStateComponent;