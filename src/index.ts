import Button from './Button';

interface PackageExport {
  description: string;
  Button: typeof Button;
}

function Package(): PackageExport {
  return {
    description: 'Hello from @hmk20000/firstpackage!',
    Button: Button,
  };
}

export default Package;
