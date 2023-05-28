<h1 align="center">
             ManPloyee
</h1>

![image](https://github.com/ItsRoy69/ManPloyee/assets/78967360/47dfdaac-0607-4917-955a-88f3bb5f6f89)

## Overview of the App

<table>
<tr>
<td>
ManPloyee is a sophisticated distributed application meticulously crafted to streamline employee management within organizations. Its comprehensive functionality encompasses the meticulous tracking and storage of vital employee information, including personal details and their salaries. 
</td>
</tr>
</table>

There are 2 different sections in the app as follows -

1. <b>Admins Section</b> - This section gives access to the admin of the organisation which contains a table to display the details of the employees stored. It also has a button which opens a form to add new employees. There is also an edit & delete option along with details of each employee to update the details of employees or delete them when required.

2. <b>Employees Section</b> - This section contains a the login of particular employees to check their respective personal details.

## Tech Stack Used -

<img src="https://img.shields.io/badge/reactjs%20-%2314354C.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/nodejs%20-%2314354C.svg?&style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/expressjs%20-%2314354C.svg?&style=for-the-badge&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/mysql%20-%2314354C.svg?&style=for-the-badge&logo=mysql&logoColor=white"/> <img src="https://img.shields.io/badge/html5%20-%2314354C.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3%20-%2314354C.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/javascript%20-%2314354C.svg?&style=for-the-badge&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/bootstrap%20-%2314354C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>



## Structure Of The Project

The home page of the application contains -
  1. <b>Landing Page</b> - Here users can get started with using our application
  2. <b>Link to Admin Section</b> - Add, Update, Delete employee details for any workplace
  3. <b>Link to Employee Section</b> - Check the details on respective employees

## UI Of The Web Application

### 1. Home Page
<pre>
<img src="https://github.com/ItsRoy69/ManPloyee/assets/78967360/c7ac81b0-3e1c-4c8d-8e2c-1c4f1403545a" width="1000"> <img src="https://github.com/ItsRoy69/ManPloyee/assets/78967360/6975c9ff-9a9d-4e3b-a56c-a7facf435775" width="1000"> <img src="https://github.com/ItsRoy69/ManPloyee/assets/78967360/7eaf9167-4611-490e-be98-77a5ee2d58ae" width="1000"> 
</pre>


### 2. Admins Page
<pre>
<img src="https://github.com/ItsRoy69/ManPloyee/assets/78967360/ac91ad7a-62d4-417b-b1a4-595b59cc78bd" width="1000"> <img src="https://github.com/ItsRoy69/ManPloyee/assets/78967360/50b6a6a5-c9ca-418c-96ec-6000a58bb06d" width="1000"> <img src="https://github.com/ItsRoy69/ManPloyee/assets/78967360/48c8fb3d-975b-4a49-80ee-c52a2894c8a2" width="1000"> <img src="https://github.com/ItsRoy69/ManPloyee/assets/78967360/8be3fab3-8d53-4db8-93d6-d25ab0a57598" width="1000">
</pre>

### 3. Employees Page
<pre>
<img src="https://github.com/ItsRoy69/ManPloyee/assets/78967360/43293be8-0b79-4526-aca3-9261d1d92e5c" width="1000">
</pre>

## Future Prospects

- Add a functionality of editing respective employee's details by themselves in the employee sectionapplication 
- Add a Meeting Section to update about the upcoming or incomplete meetings in the workplace

## Installation

```bash
# Clone the repository
git clone https://github.com/ItsRoy69/ManPloyee
# Enter into the client
cd client
npm install

# Enter into server
cd server
npm install
```

## Setting up the XAMPP application first
<br />

#### At First, you should have XAMPP application installed in your device to run the mysql server, if it is installed then 
-------------

To start the XAMPP application, follow these steps:

1. Download and install XAMPP from the official Apache Friends website.
2. Launch XAMPP using the "xampp-control.exe" file.
3. Start Apache and MySQL modules in the XAMPP control panel.
4. Verify the installation by accessing "http://localhost" in your web browser.
5. Login and set your mysql server as the screenshot given in [phpAdmin](https://github.com/ItsRoy69/ManPloyee/tree/master/phpAdmin)
6. Remember to stop the servers using the XAMPP control panel when you're done.

#### Note: Ensure that your firewall or antivirus software allows XAMPP to run smoothly.
------------------
<br />

## Now start the  application


```bash
# To start the client application
npm run dev
# To start server application
npm start
```