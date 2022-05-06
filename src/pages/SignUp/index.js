import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:4000/user/signup", form);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
