import { TOGGLE_ADD, TOGGLE_EDIT } from "../actionTypes/editPlace";

export const toggleEdit = () => {
  return {
    type: TOGGLE_EDIT,
  };
};
export const toggleAdd = () => {
  return {
    type: TOGGLE_ADD,
  };
};
