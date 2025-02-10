import { useState } from "react";
import { motion } from "framer-motion";
import "./Styles/CadastroLogin.css"; // Importando o CSS separado

export default function CadastroLogin() {
  const [step, setStep] = useState(1);
  const [isLogin, setIsLogin] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h2 className="cadastro-title">{isLogin ? "Login" : "Cadastro"}</h2>

        {isLogin ? (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input type="email" placeholder="E-mail" className="input-field" />
            <input type="password" placeholder="Senha" className="input-field" />
            <button className="btn-primary">Entrar</button>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {step === 1 && (
              <>
                <input type="email" placeholder="E-mail" className="input-field" />
                <input type="password" placeholder="Senha" className="input-field" />
              </>
            )}
            {step === 2 && (
              <>
                <input type="text" placeholder="Nome Completo" className="input-field" />
                <input type="date" className="input-field" />
                <input type="text" placeholder="Estado Civil" className="input-field" />
              </>
            )}
            {step === 3 && (
              <>
                <input type="text" placeholder="CPF/CNPJ" className="input-field" />
                <input type="text" placeholder="CEP" className="input-field" />
              </>
            )}
            <div className="button-group">
              {step > 1 && <button onClick={prevStep} className="btn-secondary">Voltar</button>}
              {step < 3 ? (
                <button onClick={nextStep} className="btn-primary">Próximo</button>
              ) : (
                <button className="btn-success">Finalizar Cadastro</button>
              )}
            </div>
          </motion.div>
        )}

        <div className="text-center mt-4">
          <button onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? "Criar uma conta" : "Já tem conta? Faça login"}
          </button>
        </div>
      </div>
    </div>
  );
}
