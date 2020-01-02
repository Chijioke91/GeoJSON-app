const storeForm = document.querySelector('#store-form');

// Send POST to API to add store
const addStore = async e => {
  e.preventDefault();

  if (
    storeForm['store-id'].value === '' ||
    storeForm['store-address'].value === ''
  ) {
    alert('Please fill in fields');
  }

  const sendBody = {
    storeId: storeForm['store-id'].value,
    address: storeForm['store-address'].value
  };

  try {
    const res = await fetch('/api/v1/stores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });

    if (res.status === 400) {
      throw Error('Store already exists!');
    }

    alert('Store added!');
    window.location.href = '/index.html';
  } catch (e) {
    alert(e);
    return;
  }
};

storeForm.addEventListener('submit', addStore);
