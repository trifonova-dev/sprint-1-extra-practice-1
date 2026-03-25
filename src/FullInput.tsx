import {ChangeEvent, useState} from "react";

type FullInputProps = {
    addMessage: (title:string) => void
}

export const FullInput = ({addMessage}: FullInputProps) => {
    let [title, setTitle] = useState("")
    console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const OnClickButtonHandler = () => {
        addMessage(title)
    }
    return (
        <div>
            <input
                onChange={onChangeInputHandler}

            />
            <button onClick={OnClickButtonHandler}>+
            </button>
        </div>
    );
};
