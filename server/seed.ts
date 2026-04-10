import { db } from './db';
import { categories, products } from './schema';
import crypto from 'crypto';

const uuid = () => crypto.randomUUID();

async function seed() {
  console.log('Clearing database...');
  await db.delete(products);
  await db.delete(categories);

  console.log('Seeding categories...');
  const catData = [
    { id: uuid(), name: 'Frutas y Verduras', icon: 'restaurant', slug: 'frutas-y-verduras' },
    { id: uuid(), name: 'Carnicería', icon: 'flatware', slug: 'carniceria' },
    { id: uuid(), name: 'Panadería', icon: 'bakery_dining', slug: 'panaderia' },
    { id: uuid(), name: 'Vinos y Licores', icon: 'liquor', slug: 'vinos-y-licores' },
    { id: uuid(), name: 'Pescadería', icon: 'set_meal', slug: 'pescaderia' },
    { id: uuid(), name: 'Limpieza', icon: 'cleaning_services', slug: 'limpieza' },
  ];
  await db.insert(categories).values(catData);

  console.log('Seeding products...');
  const prodData = [
    {
      id: uuid(),
      categoryId: catData[0].id,
      title: "Aguacate Hass Premium Kg.",
      price: "66.75",
      oldPrice: "89.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsvdbtZpNYZ3v3JmH3lsuLj7lkFobegRwZP-qgIVeN1_d7wccQrP7Gci90cix106xWprA7klgVBhNWk7GvzTdhGzWXbEfD4Dft-C9eC4zjyWZX9y9JSgf-RLDcO5DCi7Y3DtLAuLW8sWzVWPyG6Z4grER2iMgMre12zPODF0zhorVhajg-Y_Zr3v2RtK2CbxEn_Dd_xrTfoPpo1megHF0fyemnZcZSHL3SXXqdNVZ07egm65vMyuEhaiqLrPDi9eVdJeRf0Wg48Y0Q",
      tag: "-25%",
      isFeatured: true
    },
    {
      id: uuid(),
      categoryId: catData[1].id,
      title: "Rib Eye Sonora High Choice 400g",
      price: "345.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe5AJffbt0MPvWDGvoh97wfzBtrt24LkY5sOi5OpHzO8ScMq8Pgt-6Qs7iapm_7SSwJ6AIb2aiCSyEY2tvXnPvLU9LtXnpvolYmODbfpmF66UlWP8IL5fZ9Vh0f-5wbPLKsBfZ-XjBQnYgJhJko1pMRQ87n-twMPtt-WFTWAKO5Ha7h_jYksxe-CWZNSINPqJenyIUh5cSQd-3advzigMJdBevYJr4R7xpnZgBTrD55YUvS5RuToMVA4Dy1HRizDYZQNqQK2fjotH4",
      tag: "Exclusivo",
      isFeatured: true
    },
    {
      id: uuid(),
      categoryId: catData[3].id,
      title: "Vino Tinto Valle de Guadalupe 750ml",
      price: "580.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAozJ2EL3b9c3B0LqjxhL81JhFlS1gXepxvgDavOluWOMC61XfnIxMunXLaGEOqu3ofUnAFk_VgJQZg4M3n8O05zh-3WSMxAGPeY9aFdtFuLG5bTW1gb7rmjPbjA3WnINRNBKTVTtTFvwqWLz9ZbdcRoBwblAXckWbYb9D5cP19pv_CW8zq9j46tP9FYhoeBATy8Ndr8YhL6hU-IzzzXwrZ85dqvhR9rO6p6amRRinRu2ePrcd52JqcdW2kbda7P5J3mFbRVVUy1PC5",
      tag: "Orgánico",
      isFeatured: true
    },
    {
      id: uuid(),
      categoryId: catData[2].id,
      title: "Hogaza de Masa Madre Artesanal",
      price: "95.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh6nMwJCfbdMDlhhA1LuMTBoDSKjL1L4qixDd0YjaUxEbqThVMN48sNaNOkCL1HldsICR4Of6QCMfl32XQNazqLnBtAgxzNBioarua6Sec1a878rIscRmZRCHorKeMvLMmnT7BZB8mh_enmbhSYinQrVLG0Wiy-KYQ9e4UOFrOc0rz58bTWsPzJ4yGCcwBnXqKmYQP4ZcEQ5T2IP7q4yc9l_RTx_rBVFj2Sk6vvZk7iHbnMIa9nTQjxW6YKNtA4-S2VaQAu5vtWdgH",
      tag: "2x1",
      isFeatured: true
    }
  ];
  await db.insert(products).values(prodData);
  console.log('Seeding complete!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
