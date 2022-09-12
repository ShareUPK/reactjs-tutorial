const root = document.getElementById('root');
const h1  = document.createElement('h1');

h1.innerHTML = 'Hello guys!';
h1.id = 'heading';
h1.className = 'test test2';

Object.assign(h1.style, {
    color: 'red',
    backgroundColor: '#ddd'
})

root.appendChild(h1);



