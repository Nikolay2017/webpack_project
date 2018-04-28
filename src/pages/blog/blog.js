import createMenu from '../../components/menu/menu';
var menu = createMenu(['Главная','Блог','Выход'], 'menu');
document.body.appendChild(menu);

console.log('in blog.js')