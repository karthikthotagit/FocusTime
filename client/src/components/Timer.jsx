import { startSession } from '../services/api';

export default function Timer() {
  const start = () => startSession(1, 25);
  return <button onClick={start}>Start Focus Session</button>;
}
