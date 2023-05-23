# Car-Rental Website, A car rental service

### Tech Stack Used:
`React.js`, `Node.js`, `Express`, `MongoDB`, `React-Redux`, `JWT` 

------------------------------------------------------------------------

### API Endpoints Table

#### User
| No. | API Route                 | Method | EndPoints                                               | Status |
| --- | ------------------------- | ------ | ------------------------------------------------------- | ------ |
|  01 | User Sign Up              | POST   |http://localhost:5000/api/v1/user/signup                 | - []  | 
|  02 | User Sign In              | POST   |http://localhost:5000/api/v1/user/login                  | - []  | 
|  03 | User Sign Out             | GET    |http://localhost:5000/api/v1/user/logout                 | -[x]  | 
|  04 | User Profile View         | Get    |http://localhost:5000/api/v1/user/profile                | - [x]  | 
|  05 | User Profile Update       | PATCH  |http://localhost:5000/api/v1/user/profile/update         | - [x]  | 
|  06 | User Account Delete       | DELETE |http://localhost:5000/api/v1/user/account/delete         | - [x]  | 
|  07 | User Password Change      | PUT    |http://localhost:5000/api/v1/user/password/update        | - [x]  | 
|  08 | User Password Forgot      | POST   |http://localhost:5000/api/v1/user/password/forgot        | - [x]  | 
|  09 | User Password Reset Token | POST   |http://localhost:5000/api/v1/user/password/reset/:token  | - [x]  | 
|  10 | Get All Cars              | GET    |http://localhost:5000/api/v1/car/all                     | - [x]  | 
|  11 | car Single Car            | GET    |http://localhost:5000/api/v1/car/:id                     | - [x]  | 
|  12 | Car Rent New Order        | POST   |http://localhost:5000/api/v1/order/car/new               | - [x]  | 
|  13 | All Cars Booking Details  | GET    |http://localhost:5000/api/v1/order/car/all               | - [x]  | 
|  14 | Single Car Booking Detail | GET    |http://localhost:5000/api/v1/order/car/:id               | - [x]  | 

#### Admin
| No. | API Route                 | Method | EndPoints                                               | Status |
| --- | ------------------------- | ------ | ------------------------------------------------------- | ------ | 
|  01 | Admin, All Users          | GET    |http://localhost:5000/api/v1/user/admin/users            | - [x]  | 
|  02 | Admin, Single User        | GET    |http://localhost:5000/api/v1/user/admin/user/:id         | - [x]  | 
|  03 | Admin, User Role Update   | PUT    |http://localhost:5000/api/v1/user/admin/user/:id         | - [x]  | 
|  04 | Admin, User Account Delete| DELETE |http://localhost:5000/api/v1/user/admin/user/:id         | - [x]  | 
|  05 | Admin, Office Locations   | POST   |http://localhost:5000/api/v1/user/admin/office/register  | - [x]  |  
|  06 | Admin, New Car Details    | POST   |http://localhost:5000/api/v1/car/admin/register          | - [x]  | 
|  07 | Admin, Car Details Update | PATCH  |http://localhost:5000/api/v1/car/admin/detail/update/:id | - [x]  | 
|  08 | Admin, Car Details Delete | DELETE |http://localhost:5000/api/v1/car/admin/detail/delete/:id | - [x]  | 
|  09 | Admin, All Orders         | GET    |http://localhost:5000/api/v1/order/admin/all             | - [x]  | 
|  10 | Admin, Order Update       | PATCH  |http://localhost:5000/api/v1/order/admin/update/:id      | - [x]  | 
|  11 | Admin, Order Delete       | DELETE |http://localhost:5000/api/v1/car/order/admin/delete/:id  | - [x]  | 

-----------------------------------------------------------------------
