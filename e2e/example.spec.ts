import { test, expect } from '@playwright/test';


test('sum 1 with 4', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'sum' }).click();
  await page.getByRole('button', { name: '4' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('#result')).toHaveText('5');
});


// // Cliquer sur un nouveau chiffre devrait remplacer le chiffre précédent dans le resultat
// // Attendu : 2
// // Obtenu : 5
// test('sum 1 with 4 and replace with 2', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: 'sum' }).click();
//   await page.getByRole('button', { name: '4' }).click();
//   await page.getByRole('button', { name: '=' }).click();
//   await page.getByRole('button', { name: '2' }).click();
//   await page.getByRole('button', { name: '=' }).click();
//   await expect(page.locator('#result')).toHaveText('2');
// });

// // Cliquer sur 0 + 1 devrait afficher 1
// // Attendu : 1
// // Obtenu : rien
// test('sum 0 with 1', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.getByRole('button', { name: '0' }).click();
//   await page.getByRole('button', { name: 'sum' }).click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '=' }).click();
//   await expect(page.locator('#result')).toHaveText('1');
// });

// // Cliquer sur 11 + 22 devrait afficher 33
// // Attendu : 33
// // 3 → ne gère pas les chiffres en double
// test('sum 11 with 22', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: '1' }).click();
//   await page.getByRole('button', { name: 'sum' }).click();
//   await page.getByRole('button', { name: '2' }).click();
//   await page.getByRole('button', { name: '2' }).click();
//   await page.getByRole('button', { name: '=' }).click();
//   await expect(page.locator('#result')).toHaveText('33');
// });