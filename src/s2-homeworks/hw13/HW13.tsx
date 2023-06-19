import React, {useState} from "react";
import s2 from "../../s1-main/App.module.css";
import s from "./HW13.module.css";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import axios from "axios";
import success200 from "./images/200.svg";
import error400 from "./images/400.svg";
import error500 from "./images/500.svg";
import errorUnknown from "./images/error.svg";

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */
const CODE_200 = "Код 200!";
const CODE_400 = "Ошибка 400!";
const CODE_500 = "Ошибка 500!";
const CODE_UNKNOWN = "Error!";

const TEXT_200 = "...всё ок)";
const TEXT_500 = "эмитация ошибки на сервере";
const TEXT_400 = "Ты не отправил success в body вообще!";
const TEXT_UNKNOWN = "Network Error";

const INFO_200 = "код 200 - обычно означает что скорее всего всё ок)";
const INFO_400 = "ошибка 400 - обычно означает что скорее всего фронт отправил что-то не то на бэк!";
const INFO_500 = "ошибка 500 - обычно означает что что-то сломалось на сервере, например база данных)";
const INFO_UNKNOWN = "AxiosError";

const LOADING = "...loading";

const HW13 = () => {
  const [code, setCode] = useState("");
  const [text, setText] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  const disabled = info === LOADING;
  const send = (x?: boolean | null) => () => {
    const url =
      x === null
        ? "https://xxxxxx.ccc" // имитация запроса на не корректный адрес
        : "https://samurai.it-incubator.io/api/3.0/homework/test";

    setCode("");
    setImage("");
    setText("");
    setInfo(LOADING);

    axios
      .post(url, {success: x})
      .then((res) => {
        if (res.status === 200) {
          setCode(CODE_200);
          setImage(success200);
          // дописать
          setText(TEXT_200);
          setInfo(INFO_200);
        } else {
          throw new Error();
        }
      })
      .catch((e) => {
        // дописать
        const {status} = e.response;
        if (status === 500) {
          setCode(CODE_500);
          setText(TEXT_500);
          setInfo(INFO_500);
          setImage(error500);
        } else if (status === 400) {
          setCode(CODE_400);
          setText(TEXT_400);
          setInfo(INFO_400);
          setImage(error400);
        } else {
          setCode(CODE_UNKNOWN);
          setText(TEXT_UNKNOWN);
          setInfo(INFO_UNKNOWN);
          setImage(errorUnknown);
        }
      });
  };

  return (
    <div id={"hw13"}>
      <div className={s2.hwTitle}>Homework #13</div>
      <hr/>
      <div className={s2.hw}>
        <div className={s.buttonsContainer}>
          <SuperButton
            id={"hw13-send-true"}
            onClick={send(true)}
            xType={"secondary"}
            // дописать
            disabled={disabled}
          >
            Send true
          </SuperButton>
          <SuperButton
            id={"hw13-send-false"}
            onClick={send(false)}
            xType={"secondary"}
            // дописать
            disabled={disabled}
          >
            Send false
          </SuperButton>
          <SuperButton
            id={"hw13-send-undefined"}
            onClick={send(undefined)}
            xType={"secondary"}
            // дописать
            disabled={disabled}
          >
            Send undefined
          </SuperButton>
          <SuperButton
            id={"hw13-send-null"}
            onClick={send(null)} // имитация запроса на не корректный адрес
            xType={"secondary"}
            // дописать
            disabled={disabled}
          >
            Send null
          </SuperButton>
        </div>

        <div className={s.responseContainer}>
          <div className={s.imageContainer}>
            {image && <img src={image} className={s.image} alt="status"/>}
          </div>

          <div className={s.textContainer}>
            <div id={"hw13-code"} className={s.code}>
              {code}
            </div>
            <div id={"hw13-text"} className={s.text}>
              {text}
            </div>
            <div id={"hw13-info"} className={s.info}>
              {info}
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default HW13;