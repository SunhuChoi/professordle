"use client";
import React, { useState } from "react";
import { TextInput } from "./textinput";
import { Menu } from "./menu";
import professor_data from "./professor_data.json";

const randomIndex = Math.floor(Math.random() * 899);

export const Grid: React.FC = () => {
  const objectArray: Record<string, any>[] = [];
  const objectArrayTwo: Record<string, any>[] = [];

  const traverseData = () => {
    for (const object of professor_data) {
      objectArray.push(object);
    }
  };

  traverseData();

  const hashMap: Record<
    string,
    {
      name: string;
      departments: Array<string>;
      rating: string;
      difficulty: string;
      courses: Array<string>;
    }
  > = {};

  professor_data.forEach((item) => {
    hashMap[item.name] = item;
  });

  const [randomString, setRandomString] = useState("");

  const [inputValue1, setInputValue1] = useState("");
  const [inputValueV1, setInputValueV1] = useState("");
  const [inputValueV2, setInputValueV2] = useState("");
  const [inputValueV3, setInputValueV3] = useState("");
  const [inputValueV4, setInputValueV4] = useState("");

  const [inputValue2, setInputValue2] = useState("");
  const [inputValue21, setInputValue21] = useState("");
  const [inputValue22, setInputValue22] = useState("");
  const [inputValue23, setInputValue23] = useState("");
  const [inputValue24, setInputValue24] = useState("");

  const [inputValue3, setInputValue3] = useState("");
  const [inputValue31, setInputValue31] = useState("");
  const [inputValue32, setInputValue32] = useState("");
  const [inputValue33, setInputValue33] = useState("");
  const [inputValue34, setInputValue34] = useState("");

  const [inputValue4, setInputValue4] = useState("");
  const [inputValue41, setInputValue41] = useState("");
  const [inputValue42, setInputValue42] = useState("");
  const [inputValue43, setInputValue43] = useState("");
  const [inputValue44, setInputValue44] = useState("");

  const [inputValue5, setInputValue5] = useState("");
  const [inputValue51, setInputValue51] = useState("");
  const [inputValue52, setInputValue52] = useState("");
  const [inputValue53, setInputValue53] = useState("");
  const [inputValue54, setInputValue54] = useState("");

  const [inputValue6, setInputValue6] = useState("");
  const [inputValue61, setInputValue61] = useState("");
  const [inputValue62, setInputValue62] = useState("");
  const [inputValue63, setInputValue63] = useState("");
  const [inputValue64, setInputValue64] = useState("");

  const [tileValue1, setTileValue1] = useState("");
  const [tileValue11, setTileValue11] = useState("");
  const [tileValue12, setTileValue12] = useState("");
  const [tileValue13, setTileValue13] = useState("");
  const [tileValue14, setTileValue14] = useState("");

  const [tileValue2, setTileValue2] = useState("");
  const [tileValue21, setTileValue21] = useState("");
  const [tileValue22, setTileValue22] = useState("");
  const [tileValue23, setTileValue23] = useState("");
  const [tileValue24, setTileValue24] = useState("");

  const [tileValue3, setTileValue3] = useState("");
  const [tileValue31, setTileValue31] = useState("");
  const [tileValue32, setTileValue32] = useState("");
  const [tileValue33, setTileValue33] = useState("");
  const [tileValue34, setTileValue34] = useState("");

  const [tileValue4, setTileValue4] = useState("");
  const [tileValue41, setTileValue41] = useState("");
  const [tileValue42, setTileValue42] = useState("");
  const [tileValue43, setTileValue43] = useState("");
  const [tileValue44, setTileValue44] = useState("");

  const [tileValue5, setTileValue5] = useState("");
  const [tileValue51, setTileValue51] = useState("");
  const [tileValue52, setTileValue52] = useState("");
  const [tileValue53, setTileValue53] = useState("");
  const [tileValue54, setTileValue54] = useState("");

  const [tileValue6, setTileValue6] = useState("");
  const [tileValue61, setTileValue61] = useState("");
  const [tileValue62, setTileValue62] = useState("");
  const [tileValue63, setTileValue63] = useState("");
  const [tileValue64, setTileValue64] = useState("");

  const [counter, setCounter] = useState(1);

  const specificObject = objectArray[randomIndex];
  const departments = specificObject.departments;
  const ratings = specificObject.ratings;
  const difficulty = specificObject.difficulty;
  const courses = specificObject.courses;

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleRandomString = () => {
    setRandomString(specificObject.name);
  };

  const handleMenuChange = (newValueTwo: string) => {
    console.log(newValueTwo);
  };
  const handleInputChange = (newValue: string) => {
    handleIncrement();

    const ratingSpec = specificObject.rating;

    if (counter === 1) {
      setInputValue1(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue1("wordletiletrue");
      } else {
        setTileValue1("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue11("wordletiletrue");
      } else {
        setTileValue11("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue12("wordletiletrue");
      } else {
        setTileValue12("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue13("wordletiletrue");
      } else {
        setTileValue13("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue14("wordletiletrue");
      } else {
        setTileValue14("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValueV1(concatenatedString);
      setInputValueV2(hashMap[newValue.toUpperCase()].rating);
      setInputValueV3(hashMap[newValue.toUpperCase()].difficulty);
      setInputValueV4(concatenatedStringTwo);
    } else if (counter === 2) {
      setInputValue2(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue2("wordletiletrue");
      } else {
        setTileValue2("wordletilefalse");
      }
      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue21("wordletiletrue");
      } else {
        setTileValue21("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue22("wordletiletrue");
      } else {
        setTileValue22("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue23("wordletiletrue");
      } else {
        setTileValue23("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue24("wordletiletrue");
      } else {
        setTileValue24("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValue21(concatenatedString);
      setInputValue22(hashMap[newValue.toUpperCase()].rating);
      setInputValue23(hashMap[newValue.toUpperCase()].difficulty);
      setInputValue24(concatenatedStringTwo);
    } else if (counter === 3) {
      setInputValue3(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue3("wordletiletrue");
      } else {
        setTileValue3("wordletilefalse");
      }
      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue31("wordletiletrue");
      } else {
        setTileValue31("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue32("wordletiletrue");
      } else {
        setTileValue32("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue33("wordletiletrue");
      } else {
        setTileValue33("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue34("wordletiletrue");
      } else {
        setTileValue34("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValue31(concatenatedString);
      setInputValue32(hashMap[newValue.toUpperCase()].rating);
      setInputValue33(hashMap[newValue.toUpperCase()].difficulty);
      setInputValue34(concatenatedStringTwo);
    } else if (counter === 4) {
      setInputValue4(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue4("wordletiletrue");
      } else {
        setTileValue4("wordletilefalse");
      }
      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue41("wordletiletrue");
      } else {
        setTileValue41("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue42("wordletiletrue");
      } else {
        setTileValue42("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue43("wordletiletrue");
      } else {
        setTileValue43("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue44("wordletiletrue");
      } else {
        setTileValue44("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValue41(concatenatedString);
      setInputValue42(hashMap[newValue.toUpperCase()].rating);
      setInputValue43(hashMap[newValue.toUpperCase()].difficulty);
      setInputValue44(concatenatedStringTwo);
    } else if (counter === 5) {
      setInputValue5(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue5("wordletiletrue");
      } else {
        setTileValue5("wordletilefalse");
      }
      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue51("wordletiletrue");
      } else {
        setTileValue51("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue52("wordletiletrue");
      } else {
        setTileValue52("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue53("wordletiletrue");
      } else {
        setTileValue53("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue54("wordletiletrue");
      } else {
        setTileValue54("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValue51(concatenatedString);
      setInputValue52(hashMap[newValue.toUpperCase()].rating);
      setInputValue53(hashMap[newValue.toUpperCase()].difficulty);
      setInputValue54(concatenatedStringTwo);
    } else if (counter === 6) {
      setInputValue6(newValue);
      if (newValue.toLowerCase() === randomString.toLowerCase()) {
        console.log("Entered this");
        setTileValue6("wordletiletrue");
      } else {
        setTileValue6("wordletilefalse");
      }
      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].departments) ===
        JSON.stringify(specificObject.departments)
      ) {
        setTileValue61("wordletiletrue");
      } else {
        setTileValue61("wordletilefalse");
      }

      if (hashMap[newValue.toUpperCase()].rating === specificObject.rating) {
        setTileValue62("wordletiletrue");
      } else {
        setTileValue62("wordletilefalse");
      }

      if (
        hashMap[newValue.toUpperCase()].difficulty === specificObject.difficulty
      ) {
        setTileValue63("wordletiletrue");
      } else {
        setTileValue63("wordletilefalse");
      }

      if (
        JSON.stringify(hashMap[newValue.toUpperCase()].courses) ===
        JSON.stringify(specificObject.courses)
      ) {
        setTileValue64("wordletiletrue");
      } else {
        setTileValue64("wordletilefalse");
      }

      const concatenatedString =
        hashMap[newValue.toUpperCase()].departments.join(", ");
      const concatenatedStringTwo =
        hashMap[newValue.toUpperCase()].courses.join(", ");

      setInputValue61(concatenatedString);
      setInputValue62(hashMap[newValue.toUpperCase()].rating);
      setInputValue63(hashMap[newValue.toUpperCase()].difficulty);
      setInputValue64(concatenatedStringTwo);
    }
  };

  return (
    <div>
      <Menu onInputChange={handleMenuChange} />
      <button onClick={handleRandomString}>Reveal Answer {randomString}</button>
      <div>
        <TextInput onInputChange={handleInputChange}></TextInput>
      </div>
      <div className="guess-grid">
        <div className={tileValue1}>
          {counter >= 1 && <div>{inputValue1.toUpperCase()}</div>}
        </div>
        <div className={tileValue11}>
          {counter >= 1 && <div>{inputValueV1}</div>}
        </div>
        <div className={tileValue12}>
          {counter >= 1 && <div>{inputValueV2}</div>}
        </div>
        <div className={tileValue13}>
          {counter >= 1 && <div>{inputValueV3}</div>}
        </div>
        <div className={tileValue14}>
          {counter >= 1 && <div>{inputValueV4}</div>}
        </div>
        <div className={tileValue2}>
          {counter >= 2 && <div>{inputValue2.toUpperCase()}</div>}
        </div>
        <div className={tileValue21}>
          {counter >= 2 && <div>{inputValue21}</div>}
        </div>
        <div className={tileValue22}>
          {counter >= 2 && <div>{inputValue22}</div>}
        </div>
        <div className={tileValue23}>
          {counter >= 2 && <div>{inputValue23}</div>}
        </div>
        <div className={tileValue24}>
          {counter >= 2 && <div>{inputValue24}</div>}
        </div>
        <div className={tileValue3}>
          {counter >= 3 && <div>{inputValue3.toUpperCase()}</div>}
        </div>
        <div className={tileValue31}>
          {counter >= 3 && <div>{inputValue31}</div>}
        </div>
        <div className={tileValue32}>
          {counter >= 3 && <div>{inputValue32}</div>}
        </div>
        <div className={tileValue33}>
          {counter >= 3 && <div>{inputValue33}</div>}
        </div>
        <div className={tileValue34}>
          {counter >= 3 && <div>{inputValue34}</div>}
        </div>
        <div className={tileValue4}>
          {counter >= 4 && <div>{inputValue4.toUpperCase()}</div>}
        </div>
        <div className={tileValue41}>
          {counter >= 4 && <div>{inputValue41}</div>}
        </div>
        <div className={tileValue42}>
          {counter >= 4 && <div>{inputValue42}</div>}
        </div>
        <div className={tileValue43}>
          {counter >= 4 && <div>{inputValue43}</div>}
        </div>
        <div className={tileValue44}>
          {counter >= 4 && <div>{inputValue44}</div>}
        </div>
        <div className={tileValue5}>
          {counter >= 5 && <div>{inputValue5.toUpperCase()}</div>}
        </div>
        <div className={tileValue51}>
          {counter >= 5 && <div>{inputValue51}</div>}
        </div>
        <div className={tileValue52}>
          {counter >= 5 && <div>{inputValue52}</div>}
        </div>
        <div className={tileValue53}>
          {counter >= 5 && <div>{inputValue53}</div>}
        </div>
        <div className={tileValue54}>
          {counter >= 5 && <div>{inputValue54}</div>}
        </div>
        <div className={tileValue6}>
          {counter >= 6 && <div>{inputValue6.toUpperCase()}</div>}
        </div>
        <div className={tileValue61}>
          {counter >= 6 && <div>{inputValue61}</div>}
        </div>
        <div className={tileValue62}>
          {counter >= 6 && <div>{inputValue62}</div>}
        </div>
        <div className={tileValue63}>
          {counter >= 6 && <div>{inputValue63}</div>}
        </div>
        <div className={tileValue64}>
          {counter >= 6 && <div>{inputValue64}</div>}
        </div>
      </div>
    </div>
  );
};
