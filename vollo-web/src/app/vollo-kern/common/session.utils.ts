export function stateFromSession<T extends Object>(key: string, initialState: T) {
  const sessionStateStr = window.sessionStorage.getItem('nl.vollo.state.' + key);
  if (sessionStateStr) {
    const sessionState = JSON.parse(sessionStateStr);
    return Object.assign({}, initialState, sessionState);
  } else {
    return initialState;
  }
}
