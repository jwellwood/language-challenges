// Typing for a tree structure. Recursive types

interface Branch {
  name: string;
  children?: Branch[];
}

const tree: Branch = {
  name: 'root',
  children: [
    { name: '1', children: [{ name: '2' }, { name: '3' }] },
    { name: '4' },
  ],
};

const challenge3 = () => {
  console.log({
    CHALLENGE: '************** CHALLENGE 3 *********************',
    tree,
  });
};

export = challenge3;
