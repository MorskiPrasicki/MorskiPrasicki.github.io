document.getElementById('schedule-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const scheduleItem = document.createElement('li');
    scheduleItem.textContent = `${date} ob ${time}: ${title}`;

    document.getElementById('schedule-list').appendChild(scheduleItem);

    document.getElementById('schedule-form').reset();
});
