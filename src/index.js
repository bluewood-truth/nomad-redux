const $add = document.getElementById('add');
const $minus = document.getElementById('minus');
const $counter = document.querySelector('span');

let count = 0;

const updateCount = () => {
  $counter.textContent = count;
}

const handleAdd = () => {
  count += 1;
  updateCount();
};

const handleMinus = () => {
  count -= 1;
  updateCount();
};


$add.addEventListener('click', handleAdd);
$minus.addEventListener('click', handleMinus);
updateCount();