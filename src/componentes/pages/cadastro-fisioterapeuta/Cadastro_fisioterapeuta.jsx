import { useState } from "react";
import { Link } from "react-router-dom";
import "./cadastro_fisioterapeuta.css";
import Header from "../../Header";
import Footer from "../../Footer";

export default function Cadastro_fisioterapeuta() {
  const [form, setForm] = useState({
    especialidade: "",
    crefito: "",
    anoFormacao: "",
    experiencia: "",
    modalidades: [],
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function toggleModalidade(id) {
    setForm(function(prev) {
      const jatem = prev.modalidades.includes(id);
      return {
        ...prev,
        modalidades: jatem
          ? prev.modalidades.filter(function(m) { return m !== id; })
          : [...prev.modalidades, id],
      };
    });
  }

  function handleSubmit() {
    console.log(form);
  }

  const modalidades = [
    { id: "presencial", label: "Atendimento presencial" },
    { id: "domiciliar", label: "Atendimento domiciliar" },
    { id: "online", label: "Atendimento online" },
  ];

  return (
    <main>
      <Header/>
      <section className="container">
    <div className="form-container">
      <h2 className="form-title">Dados profissionais</h2>
      <label className="form-label">Especialidade</label>
      <select name="especialidade" value={form.especialidade} onChange={handleChange} className="form-input">
        <option value="">Selecione...</option>
        <option>Ortopedia e traumatologia</option>
        <option>Neurologia</option>
        <option>Cardiorrespiratória</option>
        <option>Geriatria</option>
        <option>Pediatria</option>
        <option>Esportiva</option>
        <option>Dermatofuncional</option>
        <option>Saúde da mulher</option>
        <option>Outra</option>
      </select>

      <label className="form-label">CREFITO</label>
      <input name="crefito" value={form.crefito} onChange={handleChange} placeholder="Ex: 3-123456-F" className="form-input" />

      <label className="form-label">Ano de formação</label>
      <input name="anoFormacao" type="number" value={form.anoFormacao} onChange={handleChange} placeholder="Ex: 2015" className="form-input" />

      <label className="form-label">Experiência profissional</label>
      <select name="experiencia" value={form.experiencia} onChange={handleChange} className="form-input">
        <option value="">Selecione...</option>
        <option>Menos de 1 ano</option>
        <option>1 a 3 anos</option>
        <option>3 a 5 anos</option>
        <option>5 a 10 anos</option>
        <option>Mais de 10 anos</option>
      </select>

      <label className="form-label">Modalidade de atendimento</label>
      {modalidades.map(function({ id, label }) {
        return (
          <label key={id} className="form-checkbox-label">
            <input
              type="checkbox"
              checked={form.modalidades.includes(id)}
              onChange={function() { toggleModalidade(id); }}
            />
            {label}
          </label>
        );
      })}

      <button onClick={handleSubmit} className="form-btn">Finalizar cadastro</button>
    </div>
    <div className="img"></div>
    </section>
    <Footer />
    </main>
  );
}