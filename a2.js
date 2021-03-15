let s1 = prompt("Nhập chuỗi s1:");
let s2 = prompt("Nhập chuỗi s2:");
let scom = [];

merge2String(s1, s2);

function merge2String(str1, str2)
{
    if(str1.length < str2.length)
    {
        for(let i = 0; i < str1.length; i++)
        {
            scom[i*2] = str1[i];
        }
        for(let i = 0; i < str1.length; i++)
        {
            scom[i*2+1] = str2[i];
        }
        for(let i = str1.length; i < str2.length; i++)
        {
            scom[i*2] = str2[i];
        }
    }
    else if(str1.length > str2.length)
    {
        for(let i = 0; i < str1.length; i++)
        {
            scom[i*2] = str1[i];
        }
        for(let i = 0; i < str1.length; i++)
        {
            scom[i*2+1] = str2[i];
        }
        for(let i = str1.length; i < str1.length; i++)
        {
            scom[i*2] = str2[i];
        }
    }
    else
    {
        for(let i = 0; i < str1.length; i++)
        {
            scom[i*2] = str1[i];
        }
        for(let i = 0; i < str1.length; i++)
        {
            scom[i*2+1] = str2[i];
        }
    }
    console.log(scom.join(''));
    alert(scom.join(''));
}
