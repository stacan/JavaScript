'use strict';
const settings = {  //обьект настроек
    rowCount: 10,   //размеры поля
    colCount: 10,
    startPositionX: 0,  //координаты точки по х, у
    startPositionY: 0,
    startDirection: 'right', //стартовое направление
    stepsInSecond: 5,  //скорость
    playerCellColor: '#AA3333', //колоры, игрока и пустые
    emptyCellColor: '#eee',
};
//как у нас здесь устроена разметка ? разметка у нас тут никак не 
//устроена. в файле snake.html лежит пустая  таблица 
//<table id="game"></table> в которой мы будем генерировать процессинг,
//то есть при создании игры, при инициализации и будем перерисовывать
//каждый раз эту разметочку, вернее будем манипулировать классами, при
//игре, в зависимости от того куда там наша змейка ползет и будем 
//соответствующие ячейки перерисовывать

//есть у нас таблица, есть у нас строки, в этих строках у нас есть
//колонки, и вот как раз они имеют цвет пустой головки, а там где у нас
//стоит игрок - цвет соответствующий. Можно все это сделать используя
//классы, но в идеале все это делается на классах, но мы пока изучаем
//материал, и нам достаточно будет style.

//Почему классно что это все через классы? У нас был бы класс, и он
//проставлялся бы везде, и далее был бы класс скажем гэка. Либо мы 
//могли вообще td'шкам прописать один style, все td'шки были бы одного
//цвета, а при попадании на ячейку игрока - у нас просто бы появлялся 
//бы класс player, и все, и цвет менялся бы. И не было бы дикой портянки
//из style. Это было бы быстрее, понятнее, симпатичнее, чище.


//у нас есть большой обьект player. Который в себе содержит(стр 35-84):
const player = { 
    x: null,      //координаты по х, у
    y: null,
    direction: null, //направление

    setDirection(direction) { //метод setDirection, который указывает
//направление движения нашей змейки, принимает это направление         
        this.direction = direction; //и устанавливает, то есть корректное
//направление получили, и прописали        
    },

    init(startX, startY, startDirection) {//инициализируем нашу змейку
        this.x = startX;
        this.y = startY;
        this.direction = startDirection;
    },

    makeStep() { //метод который делает шаг
        const nextPoint = this.getNextStepPoint();
//где мы обращаемся к вспомогательному методу и говорим: 
//"дайка нам координаты следующего шага"
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },

    getNextStepPoint() { //метод говорит нам куда мы можем походить
        const point = {
            x: this.x,
            y: this.y,
        };

        switch (this.direction) {//перебираем направление, с начальной
//точкой 38 строка          
            case 'up':
                point.y--;
                break;
            case 'right':
                point.x++;
                break;
            case 'down':
                point.y++;
                break;
            case 'left':
                point.x--;
                break;
        }

        return point;
    }
};

const game = { //большой шикарный обьект game
    player,    //описание игрока
    settings,  //настройки
    containerElement: null, //это главный контейнер
    cellElements: null,     //это ячейки сгенерированные,
//коллекция элементов, к которым можно обращаться и что то    
//с ними делать, в зависимости от необходимых вещей, возникающих
//на нашем игровом поле

    run() {    //что делает метод run
        this.init();  //инициализирует игру

        this.render();  //рендерит игру

        setInterval(() => { //устанавливает интервал
            if (this.canPlayerMakeStep()) { //проверяем может ли игрок сделать шаг
                this.player.makeStep(); //делаем шаг
                this.render(); //рендерим
            }
        }, 1000 / this.settings.stepsInSecond);
    }, //по умолчанию базовый шаг - 1сек, при скорости 5шагов в сек ))
//при запуске игры этот метод запускается каждый раз, с проверкой canPlayerMakeStep
    init() {   
      this.player.init(  //инициализируем игрока
          this.settings.startPositionX,
          this.settings.startPositionY,
          this.settings.startDirection);
      this.containerElement = document.getElementById('game');
//есть еще два метода:
      this.initCells();  //генерируем(прорисовываем) ячейки
      this.initEventHandlers(); //навешиваем событие (управление стрелками
//вверх\вниз, влево\вправо)      
    },

    initCells() {  //прорисовываем ячейки
        this.containerElement.innerHTML = ''; //очищаем содержимое нашего блока
//наша таблица очищается на каждой операции        
        this.cellElements = []; //очищаются все сгенерированные на 
//предыдущем шаге элементы - ячейки       

//генерируются новые, внешний цикл - строки, внутренний - колонки
        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr'); //создаем кучу элементов
            this.containerElement.appendChild(trElem); //добавляем их в контейнер

            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('td');
                trElem.appendChild(cell);

//когда у нас создалась ячейка - мы кладем ее в массив, чтоб она у нас была, 
//чтобы каждый раз не обращаться в DOM-дерево, искать какието ячейки,                
//перебирать их лишний раз. Мы на этом этапе сохраняем все себе, чтобы
//не использовать лишних jQuery-селекторов и остальных дичайших обработок,
//и чтобы мы могли с этим работать, чтобы мы могли быстро получить доступ к
//ячейкам
                this.cellElements.push(cell);
            }
        }
    },
    initEventHandlers() {  //обрабатывает нажатие клавиш (keydown)
        document.addEventListener('keydown', event => this.keyDownHandler(event));
    },
//обрабатывает нажатие клавиш
    keyDownHandler(event) { //знакомый нам event
        switch (event.code) {  //у event'a есть code - мы знаем что мы работаем с
//клавиатурой и этот code мы можем получить. Эти коды клавиш универсальны, неважно
//в какой раскладке вы будете находиться, коды этих клавиш всегда будут совпадать
//Ц=W, В=D, Ф=A, Ы=S, тем самым мы гарантируем корректность обработки нашего VSD
            case 'KeyW':
            case 'ArrowUp'://и эта клавиша, их можно посмотреть в MDN'e
                this.player.setDirection('up');
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.player.setDirection('right');
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.player.setDirection('down');
                break;
            case 'KeyA':
            case 'ArrowLeft':
                this.player.setDirection('left');
                break;
        }
  },

    render() {
        this.cellElements.forEach(cell => cell.style.backgroundColor = this.settings.emptyCellColor);  //перебираем ячейки, и у нас уже есть сделанный
//массив с элементами cellElements, мы проходим по всем ячейкам и выставляем
//цвет пустых ячеек

        const playerCell = document  //вычисляем ячейку игрока
            .querySelector(`tr:nth-child(${this.player.y + 1})`) //координаты, строки
            .querySelector(`td:nth-child(${this.player.x + 1})`); //колонки
        playerCell.style.backgroundColor = this.settings.playerCellColor; //применяем
//вычисленный стиль, и помогает querySelector - мощь мощная 
//мы ищем строку исходя из положения по у   
    },

    canPlayerMakeStep() {
        const nextPoint = this.player.getNextStepPoint();
//получаем следующие координаты, и проделываем поверку:
        return nextPoint.x >= 0 &&
            nextPoint.x < this.settings.colCount &&
            nextPoint.y >= 0 &&
            nextPoint.y < this.settings.rowCount;
    }
};

window.addEventListener('load', () => game.run());

//повторите, пжл initEventHandlers

//смотрите: у нас все максимально должно быть деструктурировано,
//чтобы каждая функция выполняла одно какоето действие, если вы видите
//что у вас функция выполняет еще чтото помимо того что вы хотели изначально
//то стоит вам ее разбить. Так и здесь: мы инициализируем обработчики событий,
//то есть говорим что сюда document.addEventListener('keydown' надо на 'keydown'
//какойто обработчик

//Мы могли прямо сюда document.addEventListener('keydown', event => this.keyDownHandler(event));
//всю обработку наколбасить, всю нижележащую 
/*
keyDownHandler(event) { 
switch (event.code) {  
            case 'KeyW':
            case 'ArrowUp':
                this.player.setDirection('up');
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.player.setDirection('right');
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.player.setDirection('down');
                break;
            case 'KeyA':
            case 'ArrowLeft':
                this.player.setDirection('left');
                break;
*/
//логику запихнуть, но это было бы неправильно, как раз изза подхода композиции
//и чистоты функции, мы говорим: ок, init нам инициализирует, повесит обработчик
//событий на document, на keydown, и делегирует эти keydown'ы обрабатывать 
//следующему методу  this.keyDownHandler(event), который мы описали ниже

//Прокидываем наш event => this.keyDownHandler(event) вот сюда
//keyDownHandler(event) - эта запись мах корректна, мах рабочая, мах понятная.
//Если из этой записи event, то некоторые браузеры не увидят.

//ДЗ: как сделать чтобы змейка проходила сквозь стены.

//все придет с опытом, не в первый, ни во второй год, но в течении пяти лет 
//практики вы научитесь мах хорошо декомпозировать логику, строить правильные
//алгоритмы реализации конкретных задач и разносить все это дело.

//Каждый раз оглядываясь на свой код вы будете понимать насколько вы были глупы ))))
//в хорошем смысле этого слова. Это касается даже того, что написал два-три месяца
//назад, не говоря тем более о том что написал год назад, более менее код читабельным
//делал. Что я городил когда не использовал шаблонизацию )).


//================= Домашнее задание ===================

//Создать функцию, генерирующую шахматную доску. Можно использовать любые HTML-теги.
//Доска должна быть верно разлинована на черные и белые ячейки. Строки должны 
//нумероваться числами от 1 до 8 , столбцы - латинскими A, B, C, D, E, F, G, H.
// от Артема: можно реализовать через таблицу, можн через div'ы.




























