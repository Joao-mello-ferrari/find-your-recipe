import { Input } from "../Input";
import { useState } from "react";

interface RegisterProps {
  onRegister: (name: string) => void;
}

export const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name || !email) {
      alert("Please fill in both name and email.");
      return;
    }
    localStorage.setItem("user_name", name);
    localStorage.setItem("user_email", email);
    onRegister(name);
    alert("Registration successful!");
  }

  return (
    <>
      <h1>Tell us a little about yourself 😄</h1>
      <Input
        value={name}
        onChange={(value) => setName(value)}
        onEnter={handleSubmit}
        placeholder="Enter your name"
      />
      <Input
        value={email}
        onChange={(value) => setEmail(value)}
        onEnter={handleSubmit}
        placeholder="Enter your email"
      />
    </>
  );
};
