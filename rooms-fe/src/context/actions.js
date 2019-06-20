import axios from 'axios';

const ROOT = '';
export function getBuildings() {
  return axios.get(`${ROOT}/buildings/`);
}

export function addBuilding({
  name, address, landmark1, landmark2, landmark3,
}) {
  const data = {
    name,
    address,
    landmarks: [landmark1, landmark2, landmark3].filter(x => x),
  };
  return axios.post(`${ROOT}/buildings/`, data);
}

export function updateBuilding({
  name, address, landmark1, landmark2, landmark3, id,
}) {
  const data = {
    name,
    address,
    landmarks: [landmark1, landmark2, landmark3].filter(x => x),
  };
  return axios.put(`${ROOT}/buildings/${id}/`, data);
}
export function deleteBuilding(id) {
  return axios.delete(`${ROOT}/buildings/${id}/`);
}

export function getRooms(buildingId) {
  return axios.get(`${ROOT}/buildings/${buildingId}/rooms/`);
}

export function addRoom({
  flat_number,
  room_type,
  bathrooms_count,
  area,
  rent,
  maintenance_amount,
  electricity_account_number,
  buildingId,
  id,
}) {
  const data = {
    flat_number,
    room_type,
    bathrooms_count,
    area,
    rent,
    maintenance_amount,
    electricity_account_number,
  };
  if (id) {
    return axios.put(`${ROOT}/buildings/${buildingId}/rooms/${id}/`, data);
  }
  return axios.post(`${ROOT}/buildings/${buildingId}/rooms/`, data);
}

export function deleteRoom(bid, id) {
  return axios.delete(`${ROOT}/buildings/${bid}/rooms/${id}/`);
}
