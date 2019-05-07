import { Endpoints } from "./constants";

export async function getDetails(type){
  const url = Endpoints[type];
  const response = await fetch(url);
  return  await response.json();
}