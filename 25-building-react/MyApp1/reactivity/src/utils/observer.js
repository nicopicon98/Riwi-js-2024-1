export function observe(obj) {
    if (!obj || typeof obj !== 'object') {
      return obj;
    }
  
    Object.keys(obj).forEach(key => {
      let value = obj[key];
      Object.defineProperty(obj, key, {
        get() {
          return value;
        },
        set(newValue) {
          value = newValue;
          // Aquí iría la lógica de actualización del DOM
        }
      });
      if (typeof value === 'object') {
        observe(value);
      }
    });
  
    return obj;
  }
  