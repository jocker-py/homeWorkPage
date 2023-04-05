import React from "react";
import {AffairType, filterAffairs} from "../HW2";

let initialState: AffairType[];

beforeEach(() => {
  initialState = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
  ];
});

test("filter by all", () => {
  const newState = filterAffairs(initialState, "all");
  expect(newState.length).toBe(5);
  expect(newState.length).toEqual(initialState.length);
  //first item
  expect(newState[0]._id).toBe(1);
  expect(newState[0].name).toBe("React");
  expect(newState[0].priority).toBe("high");
  //second item
  expect(newState[1]._id).toBe(2);
  expect(newState[1].name).toBe("anime");
  expect(newState[1].priority).toBe("low");
  //third item
  expect(newState[2]._id).toBe(3);
  expect(newState[2].name).toBe("games");
  expect(newState[2].priority).toBe("low");
  //fourth item
  expect(newState[3]._id).toBe(4);
  expect(newState[3].name).toBe("work");
  expect(newState[3].priority).toBe("high");
  //fives item
  expect(newState[4]._id).toBe(5);
  expect(newState[4].name).toBe("html & css");
  expect(newState[4].priority).toBe("middle");
});
test("filter by high", () => {
  const newState = filterAffairs(initialState, "high");
  expect(newState.length).toBe(2);
  expect(newState.every(item => item.priority === "high")).toBe(true);
  //first item
  expect(newState[0]._id).toBe(1);
  expect(newState[0].name).toBe("React");
  expect(newState[0].priority).toBe("high");
  //second item
  expect(newState[1]._id).toBe(4);
  expect(newState[1].name).toBe("work");
  expect(newState[1].priority).toBe("high");
});
test("filter by middle", () => {
  const newState = filterAffairs(initialState, "middle");
  expect(newState.length).toBe(1);
  expect(newState.every(item => item.priority === "middle")).toBe(true);
  //first item
  expect(newState[0]._id).toBe(5);
  expect(newState[0].name).toBe("html & css");
  expect(newState[0].priority).toBe("middle");
});
test("filter by low", () => {
  const newState = filterAffairs(initialState, "low");
  expect(newState.length).toBe(2);
  expect(newState.every(item => item.priority === "low")).toBe(true);
  //first item
  expect(newState[0]._id).toBe(2);
  expect(newState[0].name).toBe("anime");
  expect(newState[0].priority).toBe("low");
  //second item
  expect(newState[1]._id).toBe(3);
  expect(newState[1].name).toBe("games");
  expect(newState[1].priority).toBe("low");
});
