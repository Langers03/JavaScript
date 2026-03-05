let samples = [4.2, 5.1, 3.8, 4.7, 5.3];

function theMean(samples) {
    var sum = 0;
    for (var i = 0; i < samples.length; i++) {
        sum += samples[i];
    }
    return sum / samples.length;
}

var mean = theMean(samples);
var roundedMean = Math.round(mean * 100) / 100;
var message = "mean: " + roundedMean;
console.log(message);