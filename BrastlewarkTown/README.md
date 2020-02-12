# Brastlewark Town

The heroes, from a fantasy role-playing game, don't know the local population of the last town they've visited.
Since they have a lot of work defending the town, I have created an application so they can meet the inhabitants.

This project has been developed for the AXA Frontend code assessment.

## Screenshoot

![alt text](./app1.png "App" )

## Functional Description

When our heroes enter the app, they will have a list of all the inhabitants spread over several pages. 
At first, each photo and name of the inhabitants are shown on a **card**. If the user wishes to see more information, he/she will have to select the card and it will **rotate** to show the complete information of the inhabitant.

![alt text](./app2.png "App2")

The user has the option to **search** for an inhabitant by name or **filter** by age, weight, hair color, professions or friends. Also, There are other options to show inhabitants with a **click**, the most popular inhabitants according to the name of friends they have, the oldest according the age or the most hard-working according to the number of professions.

![alt text](./app3.png "App3")

## Technologies

The front-end is created using ReactJS. Styled with SCSS.
Also, some Reactjs libraries are used, as:
    "react-fontawesome": Icons.

    "react-loading-overlay": Loader icons.

    "react-spinners": A collection of loading spinners.

    "reactjs-popup": Popup component for the modal.

    "sweetalert2-react": User notifications.

### Components and Pages

- Components:
    - App
    - components
        - Commons
            - Loader
            - Pagination
        - PopulationList
            - PopulationCard
        - SearchFilter
            - ModalFilter

## Author

[Silvia Barranco](https://github.com/sbarranco)


