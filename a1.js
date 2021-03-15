let n = prompt("Enter n:");
while (n % 2 != 0)
{
    alert("Nhập dữ liệu không phù hợp");
    n = parseInt(prompt("Enter n:"));
}

let firstnum = parseInt(prompt("Enter first number:"));


findOppositeNumber(n, firstnum);
// cách 1
function findOppositeNumber(n, b)
{
    if(b < n/2)
    {
        let res = n/2 + b;
        console.log(res);
        alert(`Kết quả là ${res}`);
    }
    else
    {
        res = b - n/2;
        console.log(res);
        alert(`Kết quả là ${res}`);
    }
}