/* The goal of the project is to create a ReactJS based frontend
 application which lets a user view the teachers on a map.
 jVectorMap library should be used for working with map.

*/
import GlobalMap from "./components/GlobalMap";
import { Teacher } from "./interfaces/Teacher";
import { useState } from "react";
import { useEffect } from "react";
import data from "./data/teachers.json";

const App = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  // filter out the teacher with country

  useEffect(() => {
    if (data) {
      setTeachers(data);
    }
  }, [data]);

  return (
    <div>
      <GlobalMap teachers={teachers} />
    </div>
  );
};

export default App;
