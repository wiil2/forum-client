import { useEffect, useState, useContext } from "react";
import { userContext } from "../../contexts/userContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  const [topic, setTopic] = useState([]);
  const navigate = useNavigate();
  const context = useContext(userContext);

  console.log(context);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const response = await axios.get(
          "http://localhost:4000/topic/all-topics"
        );

        setTopic([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTopics();
  }, []);

  return (
    <>
      <h1>Forum</h1>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        Cadastre-se!
      </button>

      <button
        onClick={() => {
          navigate("/create-topic");
        }}
      >
        Criar topico
      </button>

      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <ul>
        {topic.map((currentTopic) => {
          return (
            <li>
              <Link to={`/topic/${currentTopic._id}`}>
                {currentTopic.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
