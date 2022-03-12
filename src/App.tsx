/* The goal of the project is to create a ReactJS based frontend
 application which lets a user view the teachers on a map.
 jVectorMap library should be used for working with map.

*/
import { Teacher } from "Interfaces/Teacher";
import { useState } from "react";
import { useEffect } from "react";
import data from "./data/teachers.json";

const App = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  useEffect(() => {
    if (data) {
      setTeachers(data);
    }
  }, [data]);

  return <div>App</div>;
};

export default App;
