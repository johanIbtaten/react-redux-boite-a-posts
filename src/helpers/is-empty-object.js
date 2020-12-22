// Permet de vérifier si un objet est vide
const isEmptyObject = (data: Object): boolean => {
  return Object.keys(data).length === 0;
};

export default isEmptyObject;