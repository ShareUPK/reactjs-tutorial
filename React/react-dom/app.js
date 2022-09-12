// Get root element
const root = document.querySelector('#root');

// const postItem = React.createElement(
//     'div',
//     {
//         className: 'post-item'
//     },
//     React.createElement(
//         'h2',
//         {
//             title: 'Học React tại F8'
//         },
//         'Học ReactJS'
//     ),
//     React.createElement(
//         'p',
//         null,
//         'Học ReactJS từ cơ bản đến nâng cao'
//     )
// );

const h1React = React.createElement(
    'h1',
    {
        title: 'Hello',
        className: 'heading',
    },
    'Hello guys!'
);

const ulReact = React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'JavaScript'),
    React.createElement('li', {}, 'ReactJS')
);

// React-DOM -> React UI
ReactDOM.render(h1React, root);
