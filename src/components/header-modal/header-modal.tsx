import {FC} from "react";
import Modal from "react-modal";

interface IHeaderModalProps {
    modalOpened: boolean
    setModalOpened: (e: boolean) => void
    firstInput: string
    setFirstInput: (e: string) => void
    secondInput: string
    setSecondInput: (e: string) => void
}

export const HeaderModal: FC<IHeaderModalProps> = (
    {
        modalOpened,
        setModalOpened,
        firstInput,
        secondInput,
        setSecondInput,
        setFirstInput
    }) => {
    return(
        <Modal
            isOpen={modalOpened}
            onRequestClose={() => setModalOpened(false)}
            style={
                {
                    content: {
                        top: '10%',
                        left: '50%',
                        bottom: 'auto',
                        right: 'auto',
                        width: '400px',
                        height: 'fit-content',
                        transform: 'translate(-50%, 0)',
                        background: "#141927",
                        display: "flex",
                        flexDirection: "column",
                    }
                }
            }
        >
            <div  className="flex text-white items-center">
                <div className="text-lg flex-1">
                    Tell us something about you
                </div>

                <button className="text-lg rounded-full p-2 h-10 w-10" onClick={() => setModalOpened(false)}>
                    &#10005;
                </button>
            </div>
            <div className="flex flex-col">
                <input
                    className="rounded-full border border-black py-1 px-4 outline-0 mb-4"
                    type="text"
                    value={firstInput}
                    onChange={e => setFirstInput(e.target.value)}
                />
                <input
                    className="rounded-full border border-black py-1 px-4 outline-0 mb-4"
                    type="text"
                    value={secondInput}
                    onChange={e => setSecondInput(e.target.value)}
                />
                <button
                    onClick={() => {
                        setModalOpened(false)
                        alert("Thanks for spent time")
                    }}
                    className="rounded-full px-4 py-1 bg-blue-bright border border-black hover:opacity-70"
                >
                    Press me!
                </button>
            </div>
        </Modal>
    )
}