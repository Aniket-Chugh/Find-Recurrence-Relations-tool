// script.js
function logBase(a, b) {
    return Math.log(a) / Math.log(b);
}

function caseOne(a, b) {
    const logValue = logBase(a, b);
    return `O(n^${logValue})`;
}

function caseTwo(a, b, p, k) {
    if (p < -1) {
        return `O(n^${k})`;
    } else if (p == -1) {
        return `O(n^${k} log log n)`;
    } else if (p > -1) {
        return `O(n^${k} log^${p + 1} n)`;
    } else {
        return "Something went wrong!";
    }
}

function caseThree(a, b, p, k) {
    if (p >= 0) {
        return `O(n^${k} log^${p} n)`;
    } else if (p < 0) {
        return `O(n^${k})`;
    }
}

function master(a, b, p, k) {
    const logValue = logBase(a, b);
    if (logValue > k) {
        return caseOne(a, b);
    } else if (logValue == k) {
        return caseTwo(a, b, p, k);
    } else if (logValue < k) {
        return caseThree(a, b, p, k);
    }
}

function main() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const p = parseFloat(document.getElementById('p').value);
    const k = parseFloat(document.getElementById('k').value);

    const result = master(a, b, p, k);

    document.getElementById('final').innerText = result;
}
