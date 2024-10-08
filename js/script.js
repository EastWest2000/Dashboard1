// Получаем все строки таблицы
const tableRows = document.querySelectorAll('.card__table tbody .table__row');

// Получаем все заголовки таблицы (из тега <th>)
const tableHeaders = document.querySelectorAll('.card__table thead .table__header');

// Проходим по каждой строке таблицы
tableRows.forEach(row => {
  // Получаем все ячейки данных в строке (из тега <td>)
  const cells = row.querySelectorAll('.table__cell');

  // Пробегаем по каждой ячейке и добавляем атрибут data-label на основе соответствующего заголовка
  cells.forEach((cell, index) => {
    // Получаем текст из соответствующего заголовка таблицы
    const headerText = tableHeaders[index].textContent;
    // Добавляем атрибут data-label с текстом заголовка
    cell.setAttribute('data-label', headerText);
  });
});
