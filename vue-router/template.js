// 1. Define route components.
// These can be imported from other files
const Home = { template: getTemplate('Home') }
const About = { template: getTemplate('About') }
const Profile = { template: getTemplate('Profile') }
const Contact = { template: getTemplate('Contact') }
const page404 = { template: getTemplate('Page 404','danger') }
const UserFind = { template: getTemplate('User {{ $route.params.id }}') }
const User = { template: getTemplate('Empty User') }
const Search = { template: getTemplate('Search {{ $route.params.id_user }}')}


function getTemplate($value,$color='primary'){
    return  `<span class="badge bg-${$color}">${$value}</span>`;
}