import React, { useEffect, useCallback } from 'react';
import { CreateDatabase } from './src/assets/scripts';
import Routes from './src/routes';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('../assets/front-end-test.db');

export default function App() {
  const initializeDB = useCallback(async () => {
    await CreateDatabase();
  });

  useEffect(() => {
    initializeDB();
  }, []);

  return (
    <Routes />
  );
}
