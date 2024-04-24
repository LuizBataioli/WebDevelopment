const Audio = document.getElementById("audio");
const InputRange = document.getElementById("input-range");
InputRange.addEventListener("input", () => { Audio.volume = InputRange.value; });
