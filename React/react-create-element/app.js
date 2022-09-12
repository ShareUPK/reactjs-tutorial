//TODO: DOM
//! VD1
// const h1DOM = document.createElement('h1');

// h1DOM.title = 'Hello';
// h1DOM.className = 'heading';
// h1DOM.innerHTML = 'Hello guys!';

// container.appendChild(h1DOM);

//! VD2
// const ulDOM = document.createElement('ul');
// ulDOM.id = 'ul-id';

// Object.assign(ulDOM.style, {
//     color: 'red'
// });

// const liDOM1 = document.createElement('li');
// liDOM1.innerText = 'JavaScript';
// liDOM1.id = 'li-1'
// const liDOM2 = document.createElement('li');
// liDOM2.innerText = 'ReactJS';

// ulDOM.appendChild(liDOM1);
// ulDOM.appendChild(liDOM2);
// container.appendChild(ulDOM);

//! VD3
// const divDOM = document.createElement('div');
// const h2DOM = document.createElement('h2');
// const pDOM = document.createElement('p');

// divDOM.className = 'post-item';
// h2DOM.title = 'Học React tại F8';
// h2DOM.innerText = 'Học ReactJS';
// pDOM.innerText = 'Học ReactJS từ cơ bản đến nâng cao';

// divDOM.appendChild(h2DOM);
// divDOM.appendChild(pDOM);

// container.appendChild(divDOM);

//TODO: React
//! VD1
// const h1React = React.createElement('h1', {
//     title: 'Hello',
//     className: 'heading',
// }, 'Hello guys!');

// console.dir(h1DOM);
// console.log(h1React);

//! VD2
// const ulReact = React.createElement(
//     'ul',
//     {
//         id: 'ul-id',
//     },
//     React.createElement('li', { id: 'li-1' }, 'JavaScript'),
//     React.createElement('li', null, 'ReactJS')
// );

// console.log(ulReact);

//! VD3

const divReact = React.createElement(
    'div',
    {
        className: 'post-item',
    },
    React.createElement(
        'h2',
        {
            title: 'Học React tại F8',
        },
        'Học ReactJS'
    ),
    React.createElement('p', null, 'Học ReactJS từ cơ bản đến nâng cao')
);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(divReact);
