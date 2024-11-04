const test = () => {
  console.log(this);
};

test();
function hello() {
  console.log(this);
}

hello();
