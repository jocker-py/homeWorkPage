import React, {FC, ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UsersType} from "./HW3";

type GreetingContainerPropsType = {
  users: UsersType
  addUserCallback: (name: string) => void
}

type PureAddUserType = (
  name: string,
  setName: (name: string) => void,
  setError: (error: string) => void,
  addUserCallback: (name: string) => void) => void
export const pureAddUser: PureAddUserType = (
  name, setError, setName, addUserCallback,
) => {
  if (!name.trim().length) {
    setError("Ошибка! Введите имя!");
  } else {
    addUserCallback(name);
    setName("");
  }
};

type PureOnBlurType = (
  name: string,
  setError: (error: string) => void,
) => void;
export const pureOnBlur: PureOnBlurType = (name, setError) => {
  if (!name.trim()) setError("Ошибка! Введите имя!");
};

type PureOnEnterType = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void,
) => void
export const pureOnEnter: PureOnEnterType = (e, addUser) => {
  e.key === "Enter" && addUser();
};

const GreetingContainer: FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    error && setError("");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };
  const onBlur = () => {
    pureOnBlur(name, setError);
  };
  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!name.trim()) {
      setError("Ошибка! Введите имя!");
    } else {
      pureOnEnter(e, addUser);
    }
  };
  const totalUsers = users.length;
  const lastUserName = totalUsers ? users[totalUsers - 1].name : "";
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
