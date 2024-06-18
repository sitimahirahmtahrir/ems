document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    if (eventName && eventDate) {
        addEvent(eventName, eventDate);
        document.getElementById('event-form').reset();
    }
});

function addEvent(name, date) {
    const eventList = document.getElementById('event-list');
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `${name} - ${date}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        eventList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    eventList.appendChild(listItem);
}
