import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import api from '../services/api';

const STORAGE_KEYS = {
  token: 'token',
  tipoUsuario: 'tipoUsuario',
  idUser: 'idUser',
  nomeUsuario: 'nomeUsuario',
};

const initialAuthState = {
  token: null,
  tipoUsuario: null,
  idUser: null,
  nomeUsuario: null,
  isAuthenticated: false,
};

function getStoredAuthState() {
  if (typeof window === 'undefined') {
    return initialAuthState;
  }

  const token = window.localStorage.getItem(STORAGE_KEYS.token);
  const tipoUsuario = window.localStorage.getItem(STORAGE_KEYS.tipoUsuario);
  const idUser = window.localStorage.getItem(STORAGE_KEYS.idUser);
  const nomeUsuario = window.localStorage.getItem(STORAGE_KEYS.nomeUsuario);

  return {
    token,
    tipoUsuario,
    idUser,
    nomeUsuario,
    isAuthenticated: Boolean(token),
  };
}

function persistAuthState(authData) {
  if (typeof window === 'undefined') {
    return;
  }

  if (authData.token) {
    window.localStorage.setItem(STORAGE_KEYS.token, authData.token);
  } else {
    window.localStorage.removeItem(STORAGE_KEYS.token);
  }

  if (authData.tipoUsuario) {
    window.localStorage.setItem(STORAGE_KEYS.tipoUsuario, authData.tipoUsuario);
  } else {
    window.localStorage.removeItem(STORAGE_KEYS.tipoUsuario);
  }

  if (authData.idUser !== null && authData.idUser !== undefined && authData.idUser !== '') {
    window.localStorage.setItem(STORAGE_KEYS.idUser, String(authData.idUser));
  } else {
    window.localStorage.removeItem(STORAGE_KEYS.idUser);
  }

  if (authData.nomeUsuario) {
    window.localStorage.setItem(STORAGE_KEYS.nomeUsuario, authData.nomeUsuario);
  } else {
    window.localStorage.removeItem(STORAGE_KEYS.nomeUsuario);
  }
}

function clearStoredAuthState() {
  if (typeof window === 'undefined') {
    return;
  }

  Object.values(STORAGE_KEYS).forEach((key) => window.localStorage.removeItem(key));
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(getStoredAuthState);

  const login = useCallback((payload = {}) => {
    const nextAuth = {
      token: payload.token || null,
      tipoUsuario: payload.tipoUsuario || null,
      idUser: payload.idUser ?? null,
      nomeUsuario: payload.nomeUsuario || payload.nome || 'Usuário',
      isAuthenticated: Boolean(payload.token),
    };

    persistAuthState(nextAuth);

    if (nextAuth.token) {
      api.defaults.headers.common.Authorization = `Bearer ${nextAuth.token}`;
    } else {
      delete api.defaults.headers.common.Authorization;
    }

    setAuth(nextAuth);
    return nextAuth;
  }, []);

  const logout = useCallback(() => {
    clearStoredAuthState();
    delete api.defaults.headers.common.Authorization;
    setAuth(initialAuthState);
  }, []);

  const value = useMemo(() => ({ ...auth, login, logout }), [auth, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
