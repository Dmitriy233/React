const Task1Desk = () => {
    return (
        <div>
            <h3>Задача №1. Робота з Toggler HOC  - відповідає за функціоналом тоглера (переключення стану  true/false)</h3>
            <div>

                1. Створити компонент **User** тa **Album**, **withToggler** <br />
                - **User** рендерить дані юзера <br />
                - **Album**  - рендерить дані альбома <br />
                - **withToggler –** HOC, який забезпечує функціонал тоглера<br />
            </div>

            <h4>1. **User:**</h4>
            - дані для поста можна скопіювати тут - [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1) <br />
            - рендерить данні *username, email*, a також *детальну інформацію* про юзера: address (city, street, suit), phone, company (name)
            та *кнопку “See details” / “hide details”* <br />

            - при початковому рендері детальна інформація прихована, назва кнопки “See details”. <br />
            - при кліці на кнопку в стані “See details” – показуємо детальну інформацію і змінюємо назву кнопки на “Hide details” <br />
            - при кліці на кнопку в стані “ Hide details ” – приховуємо детальну інформацію і змінюємо назву кнопки на “ See details” <br />

            <h4>1. **Album  :**</h4>
            - ****дані для альбому можна отримати тут - [https://jsonplaceholder.typicode.com/albums/1/photos](https://jsonplaceholder.typicode.com/albums/1/photos) (перший елемент масиву) <br />
            - показує – назву альбома і його картинку <br />
            - Кнопка міняє свій статус (подобається / НЕ подобається) при кліці. <br />

            Іконки для кнопки можна отримати тут -  [https://www.flaticon.com/free-icons/heart](https://www.flaticon.com/free-icons/heart) <br />

            1. Логіку для toggled винести в HOC – **withToggler**. <br />

            Постачає WrappedComponent пропсами: <br />

            ***toggled***  (стан тоглера true/false) і ***changeToggled*** (функція для зміни стану тоглера)
        </div>
    )
}
const Task2Desk = () => {
    return (
        <div>
            <h3> **Задача №2** Робота з **Fetching Data HOC,** який відповідає за функціонал для асинхронного запиту.</h3>

            <h4>2.1. Створити наступні компоненти: **UsersList, User, AlbumsList, Album, withFetchingData**</h4>

            - **UsersList** – список усіх юзерів (тобто список із **User**). <br />
            - **User** – описує 1 юзера (*username, email*, *address, phone, company*) <br />
            - **AlbumsList** – список усіх коментарів (Comment) <br />
            - **Album** – описує 1 альбом (*title*) <br />
            - **withFetchingData** – HOC з функціоналом роботи з асинхронним кодом (запит на сервер, отримання даних, стан загрузки, наявність помилки) <br />

            <h4>2.2. Списки **(UsersList** **та AlbumsList**)</h4>

            - логіку по роботі із асинхронним кодом отримують із HOC – *withFetchingData (див.п2.3)*, який снабжає їх відповідними пропсами: <br />

            ***data*** (результат загрузки – масив певних даних),  ***isLoading*** (стан загрузки), ***error*** (текст помилки) <br />

            - показують компонент Loader, якщо йде загрузка відповідних списків <br />
            - показують компонент Error, якщо наявна помилка при запиті <br />
            - рендерять відповідні списки – результат запиту <br />

            <h4>*Примітки:*</h4>

            - в якості компонентів Loader і Error можна відобразити div з відповідним текстом <br />
            - компоненти **User** та **Album можна взяти iз попереднього завдання** <br />

            <h4>2.3.  **HOC -  withFetchingData**</h4>

            - робить асинхронний запит <br />
            - забезпечує WrappedComponent наступними даними: <br />

            ***data*** (результат загрузки даних),  ***isLoading*** (стан загрузки), ***error*** (текст помилки) <br />

            - сcилка для запиту отримується із пропса ***url*** компонента, створеного за допомогою нашого HOC <br />

            <h4>2.4. **Ендпоінти** для запитів:</h4>

            - юзерів -  https://jsonplaceholder.typicode.com/users?_limit=10 <br />
            - альбоми - [https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10](https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10) <br />
        </div>
    )
}
const Task3Desk = () => {
    return (
        <div>
            <h3>**Задание #3 - работа с render-props**</h3>

            1. Создать компоненты Task3 , DataMaker , Posts , Post <br />
            2. Компонент Task3 <br />
            a. Хранит в себе переменную с url - [https://jsonplaceholder.typicode.com/todos?_limit=10](https://jsonplaceholder.typicode.com/todos?_limit=10) <br />
            b. Внутри себя рендерит div , в котором вложен компонент DataMaker
            c. В DataMaker передается два пропс - url (со значением переменной url) ,и проп renderDataUrl -который в себе использует паттерн render props , а именно принимает data и прокидывай их в компонент Posts в виде пропа <br />
            3. Компонент DataMaker - это функциональный компонент ,который принимает в себя параметры url , и renderDataUrl <br />
            a. Внутри себя компонент имеет состояние posts (в нем буду хранится посты) <br />
            b. Внутри себя выполняется запрос на сервер - используя prop url (который пришел ранее) <br />
            c. Данные полученые с сервера кладутся в state постов <br />
            e. Функциональный компонент возвращает div в котором происходит вызов функции renderDataUrl с передачей постов из state <br />
            4. Компоненты Posts && Post только отображают данные полученые в пропах <br />
            a. Posts получает проп с постами и рисует список, внутри списка рендерятся компоненты Post <br />
            b. В компонент Post передавать все значение одним пропом <br />
            c. Компонент Post -принимает пропы и рисует разметку вида <br />
            <img src='https://sore-terrier-fd2.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffe7b2d4d-c346-4f3d-ac4e-4d34034d5d00%2FUntitled.png?id=f5e76e6f-70b8-4111-996e-3789a106db16&table=block&spaceId=df60d295-8c45-4cae-8dff-019fa369fa18&width=1410&userId=&cache=v2' />
        </div>
    )
}
const Task4Desk = () => {
    return (
        <div>
            <h3>**Задание #4:** Создание компонента Tooltip (всплывающая подсказка) для карт продуктов с использованием паттерна render-props</h3>

            <h4> 1. ***Создание обязательных компонентов:***</h4>
            - ProductCardList - список всех карточек <br />
            - ProductCard – карточка о продукте <br />
            - Tooltip - всплывающая подсказка <br />
            <h4> 1. ***ProductCard :***</h4>
            - изначально показывает *картинку продукта, название и описание*. <br />
            - при наведении на *картинку* продукта (далее - Компонент) – показывает Tooltip с дополнительной информацией <br />
            1. ***Всплывающая подсказка должна отображаться при наведении пользователя на Компонент***
            (событие MouseEnter) и скрыться, когда пользователь уходит с него (событие MouseLeave).
            При перемещении мышки в пределах Компонента, за ней движется и подсказка (событие MouseMove)

            <h4> 4. ***Tooltip***</h4>
            <h5>4.1. содержит всю логику по отображению подсказки: </h5>

            - отслеживает показывать подсказку или нет ( isTooltipShown ) , х/y позиции для отображения подсказки ( tooltipX / tooltipY ) <br />
            - функцию-тоглер (показать/спрятать подсказку) <br />
            - функцию для изменения х/y позиций подсказки при движении мышки <br />

            <h5> 4.2  рендерит: </h5>

            - Компонент (при помощи render-props) <br />
            - и саму подсказку (отпозиционированный div + контент подсказки, внутри этого div) <br />

            <h5>4.3. принимает 2 пропа: </h5>

            а) render, который должен быть функцией. Т.е здесь будем реализовывать Render Props. <br />

            b) content – содержимое подсказки (название продукта, цену и рейтинг.) <br />

            <h5>4.4.  Колбек-функция  для пропа render будет:</h5>

            - принимать аргументом функцию-тоглер для подсказки + функцию для изменения х/y позиций подсказки, <br />
            - и возвращать Компонент <br />

            <h4>5. ***Линка для получения данных с продуктами*** </h4> - [https://my.api.mockaroo.com/coffee.json?key=778301b0]
            (https://my.api.mockaroo.com/coffee.json?key=778301b0) <br />

            <h4>6. ***Стилизация произвольная*** </h4>
        </div>
    )
}
const Task5Desk = () => {
    return (
        <div>
            <h3>**Завдання 5.**</h3>

            Реалізуйте функціонал із завдань 1-2 за допомогою кастомних хуків замість HOC-ів
        </div>
    )
}
export const tasksDescriptions = [
    {
        id: 1,
        taskId: 1,
        title: "Toggle HOC",
        content: <Task1Desk/>
    },
    {
        id: 2,
        taskId: 2,
        title: "Fetching Data HOC",
        content: <Task2Desk/>
    },
    {
        id: 3,
        taskId: 3,
        title: "Render Props",
        content: <Task3Desk/>
    },
    {
        id: 4,
        taskId: 4,
        title: "Tooltip",
        content: <Task4Desk/>
    },
    {
        id: 5,
        taskId: 5,
        title: "Custom hooks",
        content: <Task5Desk/>
    },
];

