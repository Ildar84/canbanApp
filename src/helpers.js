export const loadState = ()=>{
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state)=>{
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err){

    }
}

export const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }