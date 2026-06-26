import React, { useEffect } from 'react';

const UserWayWidget = () => {
  useEffect(() => {
    // Cria o elemento de script
    const script = document.createElement('script');
    script.src = "https://cdn.userway.org/widget.js";
    script.async = true;
    
    // Insira seu Account ID do UserWay aqui
    script.setAttribute('data-account', 'iDDjijJSLN');
    
    // Adiciona o script ao final do corpo da página
    document.body.appendChild(script);

    // Limpeza: remove o script se o componente for desmontado
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // O widget renderiza automaticamente via script
};

export default UserWayWidget;