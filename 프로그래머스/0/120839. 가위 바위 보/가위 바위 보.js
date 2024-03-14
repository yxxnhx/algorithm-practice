const solution = (rsp) => rsp.split('').map((r) => r === "2" ? "0" : (r === "5" ? "2" : "5")).join('');
