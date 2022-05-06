import { useState, useContext } from "react";
import { userContext } from "../../contexts/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const context = useContext(userContext);
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSumit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        form
      );

      if (response.data._id) {
        context.setCurrentUser({ userId: response.data._id });
        navigate("/");
      } else {
        window.alert("Erro no login!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSumit}>
      <label htmlFor="formName">Nome:</label>
      <input
        type="text"
        id="formName"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="formEmail">E-mail:</label>
      <input
        type="email"
        id="formEmail"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
