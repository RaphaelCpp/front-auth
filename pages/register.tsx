import axios from "axios";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import Layout from "../layout/Layout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:8000/api/auth/register", {
        name,
        email,
        password,
        password_confirmation,
      });
      console.log(resp.data);
      await router.push("/login");
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  return (
    <Layout>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password Confirmation"
          required
          onChange={(e) => setPassword_confirmation(e.target.value)}
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </Layout>
  );
};

export default Register;
