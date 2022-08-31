import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";

type Task = {
  docId: string;
  title: string;
  timeStamp: string;
};

function TaskManagement() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  // 表示
  const dispData = () => {
    const tasksCollectionRef = collection(db, "root");
    console.log(tasksCollectionRef);
    getDocs(tasksCollectionRef).then((querySnapshot) => {
      const userList: Task[] = [];
      console.log(querySnapshot);
      querySnapshot.docs.map((doc) => {
        console.log(doc);
        const task: Task = {
          docId: doc.id,
          title: doc.data().title,
          timeStamp: doc.data({ serverTimestamps: "estimate" }).timeStamp,
        };
        userList.push(task);
        return 0;
      });
      setTaskList(userList);
    });
  };

  // 初期処理
  useEffect(() => {
    dispData();
  }, []);

  return (
    <>
      {taskList.map((user) => (
        <h1>{user.title}</h1>
      ))}
    </>
  );
}

export default TaskManagement;
