var counter = 0;
const waterBottles = 60000000/24/60/60 //60 million water bottles get thrown a day in the U.S.
const tonsOfTrash = 292400000/(365.25*24*60*60)

function updateClock() {
    var now = new Date();
    counter = counter + 0.1;

    var waterString = Math.round(counter * waterBottles) + " water bottles have been thrown away in the United States alone."
    document.getElementById('waterBottle').textContent = waterString
    var trashString = Math.round(counter * tonsOfTrash) + " tons of trash have been thrown away in the United States alone."
    document.getElementById('trash').textContent = trashString
}
updateClock();
setInterval(updateClock, 100);

function youtubeTracker(){

}
