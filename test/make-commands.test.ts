import fs from 'fs';
import childProcess from 'child_process';

beforeAll(() => {
  try {
    fs.mkdirSync('./app', { recursive: true });
    process.chdir('./app');
  } catch (e) {
    let errnoException = e as NodeJS.ErrnoException;
    if (errnoException.code !== 'EEXIST') {
      console.error(e);
      throw e;
    }
  }
});

it('make:component Button creates components/Button/index.tsx', () => {
  childProcess.execSync('techo make:component Button');
  expect(fs.existsSync('./src/components/Button/index.tsx')).toBe(true);

  expect(
    fs
      .readFileSync('./src/components/Button/index.tsx')
      .toString()
      .includes('export default Button')
  ).toBe(true);
});

it('make:component Button2Component creates components/Button2/index.tsx', () => {
  childProcess.execSync('techo make:component Button2Component').toString();
  expect(fs.existsSync('./src/components/Button2/index.tsx')).toBe(true);

  expect(
    fs
      .readFileSync('./src/components/Button2/index.tsx')
      .toString()
      .includes('export default Button2')
  ).toBe(true);
});

it('make:component Button3 -a ./src/components/Button2/index.tsx adds Button3 to components/Button2/index.tsx', () => {
  childProcess
    .execSync(
      'techo make:component Button3 -a ./src/components/Button2/index.tsx'
    )
    .toString();
  expect(fs.existsSync('./src/components/Button2/index.tsx')).toBe(true);

  expect(
    fs
      .readFileSync('./src/components/Button2/index.tsx')
      .toString()
      .includes('export const Button3')
  ).toBe(true);
});

it('make:page HomePage creates pages/HomePage/index.tsx', () => {
  childProcess.execSync('techo make:page HomePage').toString();
  expect(fs.existsSync('./src/pages/HomePage/index.tsx')).toBe(true);

  expect(
    fs
      .readFileSync('./src/pages/HomePage/index.tsx')
      .toString()
      .includes('export default HomePage')
  ).toBe(true);
});

it('make:page About creates pages/AboutPage/index.tsx', () => {
  childProcess.execSync('techo make:page About').toString();
  expect(fs.existsSync('./src/pages/AboutPage/index.tsx')).toBe(true);

  expect(
    fs
      .readFileSync('./src/pages/AboutPage/index.tsx')
      .toString()
      .includes('export default AboutPage')
  ).toBe(true);
});

it('make:service auth creates servies/auth/index.ts', () => {
  childProcess.execSync('techo make:service auth').toString();
  expect(fs.existsSync('./src/services/auth/index.ts')).toBe(true);
});

it('make:service apiService creates servies/api/index.ts', () => {
  childProcess.execSync('techo make:service api').toString();
  expect(fs.existsSync('./src/services/api/index.ts')).toBe(true);
});

it('make:composable auth creates composables/auth/index.tsx', () => {
  childProcess.execSync('techo make:composable auth').toString();
  expect(fs.existsSync('./src/composables/auth/index.tsx')).toBe(true);
});

it('make:composable modalsComposable creates composables/modals/index.tsx', () => {
  childProcess.execSync('techo make:composable modalsComposable').toString();
  expect(fs.existsSync('./src/composables/modals/index.tsx')).toBe(true);
});

it('make:icon SignOut creates icons/SignOutIcon/index.tsx', () => {
  childProcess.execSync('techo make:icon SignOut').toString();
  expect(fs.existsSync('./src/icons/SignOutIcon/index.tsx')).toBe(true);

  expect(
    fs
      .readFileSync('./src/icons/SignOutIcon/index.tsx')
      .toString()
      .includes('export default SignOutIcon')
  ).toBe(true);
});

it('make:icon MenuIcon creates icons/MenuIcon/index.tsx', () => {
  childProcess.execSync('techo make:icon MenuIcon').toString();
  expect(fs.existsSync('./src/icons/MenuIcon/index.tsx')).toBe(true);

  expect(
    fs
      .readFileSync('./src/icons/MenuIcon/index.tsx')
      .toString()
      .includes('export default MenuIcon')
  ).toBe(true);
});

it('make:icon Favorite -a ./src/icons/MenuIcon/index.tsx adds FavoriteIcon to icons/MenuIcon/index.tsx', () => {
  childProcess
    .execSync('techo make:icon FavoriteIcon -a ./src/icons/MenuIcon/index.tsx')
    .toString();
  expect(fs.existsSync('./src/icons/MenuIcon/index.tsx')).toBe(true);

  expect(
    fs
      .readFileSync('./src/icons/MenuIcon/index.tsx')
      .toString()
      .includes('const FavoriteIcon')
  ).toBe(true);
});

it('make:layout Main creates layouts/MainLayout/index.tsx', () => {
  childProcess.execSync('techo make:layout Main').toString();
  expect(fs.existsSync('./src/layouts/MainLayout/index.tsx')).toBe(true);

  expect(
    fs
      .readFileSync('./src/layouts/MainLayout/index.tsx')
      .toString()
      .includes('export default MainLayout')
  ).toBe(true);
});

it('make:layout AdminLayout creates layouts/AdminLayout/index.tsx', () => {
  childProcess.execSync('techo make:layout AdminLayout').toString();
  expect(fs.existsSync('./src/layouts/AdminLayout/index.tsx')).toBe(true);

  expect(
    fs
      .readFileSync('./src/layouts/AdminLayout/index.tsx')
      .toString()
      .includes('export default AdminLayout')
  ).toBe(true);
});

afterAll(() => {
  try {
    process.chdir('../');
    fs.rmSync('./app', { recursive: true, force: true });
  } catch (e) {
    console.error(
      'fs.rmSync is not supported for your node version. Please manually delete app folder generated by test.'
    );
  }
});
