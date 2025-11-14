<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Teqpace ToDo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    @vite('resources/js/app.js')
</head>
<body class="bg-purple-100 min-h-screen flex flex-col items-center justify-center">


    <div class="bg-white rounded-lg shadow-lg w-full max-w-md">

        <div class="flex items-center justify-between bg-purple-500 text-white px-4 py-3 rounded-t-lg">
            <button class="text-2xl font-bold">☰</button>
            <h1 class="font-bold text-lg">Teqpace ToDo</h1>
            <span></span>
        </div>


        <ul id="todo-list" class="p-6 space-y-2"></ul>
    </div>


    <form id="todo-form" class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 mt-4 hidden">
        <h2 class="text-lg font-semibold mb-4 text-purple-700">Add a new task</h2>
        <input id="todo-title" type="text" placeholder="Task title" class="border w-full mb-3 p-2 rounded focus:ring focus:ring-purple-200" required />
        <input id="todo-datetime" type="datetime-local" class="border w-full mb-3 p-2 rounded focus:ring focus:ring-purple-200" required />
        <button type="submit" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full transition">Save Task</button>
    </form>


    <button id="new-task-btn" class="mt-6 bg-purple-500 text-white px-5 py-2 rounded-full shadow hover:bg-purple-600 transition">
        + New Task
    </button>


</body>
</html>
