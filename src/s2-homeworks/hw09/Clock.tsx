import React, {useState} from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import {restoreState} from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";
import formatDate from "./formatDate/formatDate";

function Clock() {
  const getDateNow = () => new Date(restoreState("hw9-date", Date.now()));
  const [timerId, setTimerId] = useState<NodeJS.Timer | null>(null);
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(getDateNow());
  const [show, setShow] = useState<boolean>(false);

  const start = () => {
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    setDate(getDateNow());
    const delay = 1000;
    const id = setInterval(() => setDate(getDateNow()), delay);
    setTimerId(id);
  };

  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    timerId && clearInterval(timerId);
    setTimerId(null);
  };

  const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
    setShow(true);
  };
  const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
    setShow(false);
  };

  const stringTime = formatDate.getDoubleDotDate(date) || <br/>; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = formatDate.getDotDate(date) || <br/>; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = formatDate.getLongDay(date) || <br/>; // пишут студенты
  const stringMonth = formatDate.getLongMonth(date) || <br/>; // пишут студенты

  return (
    <div className={s.clock}>
      <div
        id={"hw9-watch"}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={"hw9-day"}>{stringDay}</span>,{" "}
        <span id={"hw9-time"}>
                    <strong>{stringTime}</strong>
                </span>
      </div>

      <div id={"hw9-more"}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={"hw9-month"}>{stringMonth}</span>,{" "}
              <span id={"hw9-date"}>{stringDate}</span>
            </>
          ) : (
            <>
              <br/>
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={"hw9-button-start"}
          disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={"hw9-button-stop"}
          disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
