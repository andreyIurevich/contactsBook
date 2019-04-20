# contactsBook
Contacts Book the web app allows you to load and edit contacts.

## Using technologies:
1. React/Redux
2. Package manager - yarn
3. Webpack 4 for building project

## Start
The first step: installing all the dependencies of project
```
yarn install
```
Then you can run app by printing
```
yarn dev 
```
in command line. 
The projetc will running at localhost: 9000

## Description interface
The first page of app contains two main blocks:

1.Contacts List

2.Description Contacts

Contacts List contains the following parts:

1. Search Box - input for search contacts by name;

2. Sorting button - sort in alphabetical order;

3. List of contacts;

4. Page Switcher - list of page numbers;

Description Contacts contains three switchable panels:

1. Personal Info - displays the main personal information such as name, username, email, location e.t. 

You can edit and save them;

2. Posts - list of contact's posts;

3. Account History;

## Architecture

-- app (main folder of project)

-- Containers (this folder contains App, ContactList and ContactDescription components)

----- App (the main component of project)

----- ContactList (this component displays contacts list)

----- ContactDescription (this component contains information about contact)

-- src (sources of project)

-- index.js (the entry point of app)
