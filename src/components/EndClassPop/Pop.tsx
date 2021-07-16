import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCloseButton } from "../NavBar/closeButtonContextForPopup";
import { useXButton } from "../NavBar/useXButtonForPopup";

export const Pop = () => {
  const { CloseButton, closeButtonState, setCloseButtonState } = useXButton();
  const [errorSelect, setErrorSelect] = useState(false);
  const [showTextBox, setShowTextBox] = useState(false);
  const [radioButtonSelected, setRadioButtonSelected] = useState(0);
  const closeAbortMenus = () => {
    setErrorSelect(false);
  };

  const closeTextArea = (id: number = 0) => {
    setShowTextBox(false);
    setRadioButtonSelected(id);
  };

  const context = useCloseButton();
  const handelEndClassButton = () => {
    setCloseButtonState(closeButtonState ? false : true);
    context?.setClose(context?.close ? false : true);
  };

  // useEffect(() => {
  //   setCloseButtonState(false);
  // }, [closeButtonState]);
  return (
    <div className="z-30 grid place-items-center h-screen bg-black bg-opacity-50 px-1">
      <section className="bg-white rounded-2xl py-5 px-3  md:w-1/3 border shadow-lg z-400">
        <div className="flex justify-between py-2 px-50">
          <div className="text-black md:text-2xl md:font-bold font-medium text-base">
            Select a reason to end class
          </div>
          <CloseButton />
        </div>
        <div className="flex flex-col pl-4">
          <label htmlFor="a">
            <input
              className="form-radio checked:bg-main"
              id="a"
              type="radio"
              value="Class Complected"
              name="class completed"
              onClick={() => {
                closeAbortMenus();
                closeTextArea();
              }}
            />{" "}
            <span>Class Complected</span>
          </label>
          <label htmlFor="b">
            <input
              id="b"
              type="radio"
              value="Class Interrupted/Aborted"
              name="class completed"
              onClick={() => setErrorSelect(true)}
            />{" "}
            <span>Class Interrupted/Aborted</span>
          </label>
          {errorSelect ? (
            <div className="flex flex-col pl-4">
              <label htmlFor="c">
                <input
                  id="c"
                  type="radio"
                  value="Student Didn't showup for class"
                  name="Student Didn't showup for class"
                  onClick={() => closeTextArea(1)}
                  checked={radioButtonSelected === 1}
                />{" "}
                <span>Student Didn't showup for class </span>
              </label>

              <label htmlFor="d">
                <input
                  id="d"
                  type="radio"
                  value="Student Didn't show any interest"
                  name="Student Didn't show any interest"
                  onClick={() => closeTextArea(2)}
                  checked={radioButtonSelected === 2}
                />{" "}
                <span>Student Didn't show any interest </span>
              </label>

              <label htmlFor="e">
                <input
                  id="e"
                  type="radio"
                  value="Student got disconnected"
                  name="Student got disconnected"
                  onClick={() => closeTextArea(3)}
                  checked={radioButtonSelected === 3}
                />{" "}
                <span>Student got disconnected</span>
              </label>

              <label htmlFor="f">
                <input
                  id="f"
                  type="radio"
                  value="I got disconnected"
                  name="I got disconnected"
                  onClick={() => closeTextArea(4)}
                  checked={radioButtonSelected === 4}
                />{" "}
                <span>I got disconnected</span>
              </label>
              <label htmlFor="g">
                <input
                  id="g"
                  type="radio"
                  value="Other Reason"
                  name="Other Reason"
                  onClick={() => {
                    setShowTextBox(true);
                    setRadioButtonSelected(5);
                  }}
                  checked={radioButtonSelected === 5}
                />{" "}
                <span>Other Reason</span>
              </label>
            </div>
          ) : null}
          {showTextBox ? (
            <>
              <label htmlFor="textBox">Type Reason:</label>
              <textarea
                name="otherReason"
                id="textBox"
                cols={30}
                rows={10}
                className="border-2"
              ></textarea>
            </>
          ) : null}
        </div>

        <Link
          className="ml-2 inline-block text-lg font-600 bg-main align-middle text-white font-medium py-2 px-2 rounded m-5"
          to="#"
          onClick={handelEndClassButton}
        >
          End Class
        </Link>

        <Link
          className="ml-2 inline-block text-lg font-60 text-gray-500 font-medium py-2 px-2 rounded m-5"
          to="#"
          onClick={handelEndClassButton}
        >
          Cancel
        </Link>
      </section>
    </div>
  );
};
