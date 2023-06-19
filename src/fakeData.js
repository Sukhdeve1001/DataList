import {faker} from '@faker-js/faker';

export function generateFakeData() {
  const data = [];
  for (let i = 0; i < 10; i++) {
    const item = {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      category: faker.random.word(),
      date: faker.date.past(),
      status: faker.random.arrayElement(['Pending', 'Completed', 'Canceled']),
    };
    data.push(item);
  }
  return data;
}
