import { v4 as uuid } from "uuid";

const weeks = [
  {
    id: uuid(),
    number: "1st",
    isDone: false
  },
  {
    id: uuid(),
    number: "2nd",
    isDone: false
  },
  {
    id: uuid(),
    number: "3rd",
    isDone: false
  },
  {
    id: uuid(),
    number: "4th",
    isDone: false
  }
];

const subjects = [
  {
    id: uuid(),
    title: "Portuguese",
    isDone: false,
    isShown: true,
    weeks
  },
  {
    id: uuid(),
    title: "Math",
    isDone: false,
    isShown: true,
    weeks
  },
  {
    id: uuid(),
    title: "Physics",
    isDone: false,
    isShown: true,
    weeks
  },
  {
    id: uuid(),
    title: "Geography",
    isDone: false,
    isShown: true,
    weeks
  },
  {
    id: uuid(),
    title: "Chemistry",
    isDone: false,
    isShown: true,
    weeks
  },
  {
    id: uuid(),
    title: "History",
    isDone: false,
    isShown: true,
    weeks
  },
  {
    id: uuid(),
    title: "Sociology",
    isDone: false,
    isShown: true,
    weeks
  },
  {
    id: uuid(),
    title: "Arts",
    isDone: false,
    isShown: true,
    weeks
  },
  {
    id: uuid(),
    title: "English",
    isDone: false,
    isShown: true,
    weeks
  }
];

export default subjects;
