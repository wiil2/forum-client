import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function TopicPage() {
  const [topic, setTopic] = useState({ title: "", body: "", categoria: "" });
  const params = useParams();

  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await axios.get(
          `http://localhost:4000/topic/${params.topicId}`
        );

        setTopic({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }

    fetchTopic();
  }, []);

  return (
    <>
      <h1>{topic.title}</h1>
      <p>{topic.body}</p>
      <small>{topic.categoria}</small>
    </>
  );
}
