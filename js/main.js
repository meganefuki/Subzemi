'use strict';

{
    const addbtn = document.getElementById('addbtn');
    const Tasklist = document.getElementById('Tasklist');
    const writeTask = document.getElementById('writeTask');

    const addTask = task => {
        // 新しくリストを作り、listItemとする
        const listItem = document.createElement('input');
        // 新しくボタンを作り、removeButtonとする
        const removeButton = document.createElement('button');

        // removeButtonを削除として表示する
        removeButton.innerText = '削除';

        // Tasklistに入力した名前をTask一覧に追加する。
        removeButton.addEventListener('click', () => removeTask(removeButton));
        listItem.innerText = task;

        // listItemにremoveButton(タスク削除ボタン)を追加する
        listItem.append(removeButton);
        Tasklist.appendChild(listItem);
    };


    const removeTask = removeButton => {
        const selectTask = removeButton.closest('li');
        Tasklist.removeChild(selectTask);
    };

    // addbtnがクリックされた時の処理
    addbtn.addEventListener('click', event => {
        const task = writeTask.value;
        addTask(task);
        writeTask.value = '';
    });
}