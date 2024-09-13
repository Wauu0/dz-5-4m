import React, { useState } from 'react';

function MainPage() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  // Обновление состояния поля ввода
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Добавление имени в список
  const addName = () => {
    if (name.trim()) {
      setNameList([...nameList, name]);
      setName(''); // Очищаем поле после добавления
    }
  };

  // Изменение имени в списке
  const changeName = (index) => {
    if (name.trim()) {
      const updatedList = [...nameList];
      updatedList[index] = name;
      setNameList(updatedList);
      setName(''); // Очищаем поле после изменения
    }
  };

  return (
    <div className="container">
      <div className="input-group">
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Введите имя"
        />
        <button onClick={addName} disabled={!name.trim()}>
          Добавить
        </button>
      </div>

      {nameList.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <ul>
          {nameList.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button
                onClick={() => changeName(index)}
                disabled={!name.trim()}
              >
                Поменять
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MainPage;
