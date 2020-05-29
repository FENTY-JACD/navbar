import http from 'k6/http';
import { sleep } from 'k6';
import faker from "cdnjs.com/libraries/Faker";

export let options = {
  vus: 100,
  duration: '30s',
};
export default function() {
  const name = faker.commerce.productName();
  http.get(`http://localhost:4201/search?search='${name}'`);
  sleep(.75);
}