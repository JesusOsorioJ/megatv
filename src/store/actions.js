export const setView = (view) => ({ type: 'SET_VIEW', payload: view });
export const setUser = (res) => ({ type: 'SET_USER', payload: res });

export const activateMiddle = (message) => ({ type: 'ACTIVATE_MIDDLE', payload: message });
export const deactivateMiddle = () => ({ type: 'DEACTIVATE_MIDDLE' });