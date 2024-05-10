// Mapeamento de códigos de condição para ícones
const conditionIcons = {
  1: '☼',
  '1n': '🌙',
  2: '⛅',
  '2r': '☁️',
  '2n': '🌙',
  '2rn': '☁️🌙',
  3: '☁️',
  '3n': '☁️🌙',
  4: '🌧',
  '4r': '🌧☁️',
  '4n': '🌧🌙',
  '4rn': '☁️🌧🌙',
  '4t': '⛈️',
  '4tn': '⛈️🌙',
  5: '🌧',
  '5n': '🌧🌙',
  6: '⚡',
  '6n': '⚡🌙',
  7: '❄️',
  '7n': '❄️🌙',
  8: '☃️',
  9: '🌫️',
};

// Função para obter o ícone correspondente ao código de condição
const getConditionIcon = (conditionCode) => {
  return conditionIcons[conditionCode] || '';
};

export { getConditionIcon };
