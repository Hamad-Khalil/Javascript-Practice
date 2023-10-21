function numToWords(n) {
    let ones = ['', 'one', 'two', 'three', ' four', 'five', 'six', 'seven', 'eight', 'nine']
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen']
    let tens = ['', '', 'Twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty ']
    if(n[1]=='0'){
        alert('Given Number should not start with zero');
    } else  if (n > 1 & n < 10) {
        let n1 = Math.floor(n / 1).toString()
        let result;
        result = ones[n1]
        console.log(result);
    }
    if (n > 9 && n < 100) {
        let result;
        let n1 = Math.floor(n / 10).toString()
        if (n1 == '1') {
            result = teens[n1[1]]
        } if (n1 !== 1) {
            let t = Math.floor(n / 10).toString()
            let t2 = Math.floor(n / 1).toString()
            result = `${tens[t]} ${ones[t2[1]]}`
        }
        console.log(result);
    }
    if (n > 99 && n < 1000) {
        let result;
        let n1 = Math.floor(n / 100).toString()
        let n2 = Math.floor(n / 10).toString()
        let n3 = Math.floor(n / 1).toString()
        let result1 = `${ones[n1]} hundred`
        if (n2[1] == '1') {
            result = ` ${teens[n3[2]]}`
        } else (result = ` ${tens[n2[1]]} ${ones[n3[2]]}`)
        console.log(result1 + result);
    }
    if (n > 999 && n < 10000) {
        let n1 = Math.floor(n / 1000).toString()
        let n2 = Math.floor(n / 100).toString()
        let n3 = Math.floor(n / 10).toString()
        let n4 = Math.floor(n / 1).toString()
        let n1Words;
        n1Words = `${ones[n1]} thousands`
        let n2Word;
        if(n2[1]=='0'){
            n2Word=''
        } else(n2Word = ` ${ones[n2[1]]} hundred`)
        let result;
        if (n3[2] == '1') {
            result = teens[n4[3]]
        } else (result = ` ${tens[n3[2]]} ${ones[n4[3]]}`)
        console.log(n1Words + n2Word + result);
    }
    if (n > 9999 && n < 100000 ) {
        let n1 = Math.floor(n / 1000).toString() //for lac
        let n2 ;
        if(n1[0]=='1'){
            n2=` ${teens[n1[1]]} thousands`
        } else ( n2=` ${tens[n1[0]]} ${ones[n1[1]]} thousands`)
        let hd = Math.floor(n / 1).toString().split('')
        let hd1 = hd[2] // for hundred 
        let hd2;
        if (hd1 == '0') {
            hd2 = ''
        } else (hd2 = ` ${ones[hd1]} hundred`)
        let tt = Math.floor(n / 1).toString().split('')
        let tt1 = tt[3]
        let tt2 = tt[4]
        if (tt1 == '0') {
            let tt3;
            tt3 = ` ${ones[tt2]}`
        } if (tt1 == '1') {
            tt3 = ` ${teens[tt2]}`
        } else (tt3 = ` ${tens[tt1]} ${ones[tt2]}`)

        console.log(n2 + hd2 + tt3);
    }

    if (n >99999 && n< 1000000) {
        let n1 = Math.floor(n / 100000).toString() //for lac
        let n2 = `${ones[n1]} lac`
        let td = Math.floor(n / 1000).toString().split('')
        let dt1 = td[1] // for thousand
        let dt2 = td[2]
        let dt3;
        if (dt1 == '0' && dt2 == '0') {
            dt3 = ''
        } if (dt1 == '0' && dt2 !== '0') {

            dt3 = ` ${ones[dt2]} thousands`
        } if (dt1 == '1') {

            dt3 = ` ${teens[dt2]} thousands`
        } if (dt1 !== '0' && dt1 !== '1') {
            dt3 = ` ${tens[dt1]} ${ones[dt2]} thousands`
        }
        let hd = Math.floor(n / 100).toString().split('')
        let hd1 = hd[3] // for hundred 
        let hd2;
        if (hd1 == '0') {
            hd2 = ''
        } else (hd2 = ` ${ones[hd1]} hundred`)
        let tt = Math.floor(n / 1).toString().split('')
        let tt1 = tt[4]
        let tt2 = tt[5]
        if (tt1 == '0') {
            let tt3;
            tt3 = ` ${ones[tt2]}`
        } if (tt1 == '1') {
            tt3 = ` ${teens[tt2]}`
        } else (tt3 = ` ${tens[tt1]} ${ones[tt2]}`)

        console.log(n2 + dt3 + hd2 + tt3);
    }
    if (n > 999999 && n < 10000000) {

        let oneMillion = Math.floor(n / 1000000).toString() //for lac
        let n2 = `${ones[oneMillion]} Millions`
        let td = Math.floor(n / 1000).toString().split('')
        let dt = td[1]
        let dtt = ` ${ones[dt]} hundred`
        let dt1 = td[2] // for thousand
        let dt2 = td[3]
        let dt3;
        if (dt1 == '0' && dt2 == '0') {
            dt3 = ' thousand'
        } if (dt1 == '0' && dt2 !== '0') {

            dt3 = ` ${ones[dt2]} thousands`
        } if (dt1 == '1') {

            dt3 = ` ${teens[dt2]} thousands`
        } if (dt1 !== '0' && dt1 !== '1') {
            dt3 = ` ${tens[dt1]} ${ones[dt2]} thousands`
        }
        let hd = Math.floor(n / 100).toString().split('')
        let hd1 = hd[4] // for hundred 
        let hd2;
        if (hd1 == '0') {
            hd2 = ''
        } else (hd2 = ` ${ones[hd1]} hundred`)
        let tt = Math.floor(n / 1).toString().split('')
        let tt1 = tt[5]
        let tt2 = tt[6]
        if (tt1 == '0') {
            let tt3;
            tt3 = ` ${ones[tt2]}`
        } if (tt1 == '1') {
            tt3 = `${teens[tt2]}`
        } else (tt3 = ` ${tens[tt1]} ${ones[tt2]}`)

        console.log(n2 + dtt + dt3 + hd2 + tt3);
    }
    if (n > 9999999 && n < 100000000) {

        let tenMiilions = Math.floor(n / 1000000).toString()//for thousands miilion
        let tm = tenMiilions[0]
        let tm1 = tenMiilions[1]
        let tmResult;
        if (tm == '1') {
            tmResult = ` ${teens[tm1]} millions `
        } if (tm !== '1') {
            tmResult = ` ${tens[tm]} ${ones[tm1]} millions`
        }
        let td = Math.floor(n / 1000).toString().split('')
        let dt = td[2]
        let dtresult = ` ${ones[dt]} hundred`
        let dt1 = td[3] // for thousand
        let dt2 = td[4]
        let dt3;
        if (dt1 == '0' && dt2 == '0') {
            dt3 = ' thousands'
        } if (dt1 == '0' && dt2 !== '0') {

            dt3 = ` ${ones[dt2]} thousands`
        } if (dt1 == '1') {

            dt3 = ` ${teens[dt2]} thousands`
        } if (dt1 !== '0' && dt1 !== '1') {
            dt3 = ` ${tens[dt1]} ${ones[dt2]} thousands`
        }
        let hd = Math.floor(n / 100).toString().split('')
        let hd1 = hd[5] // for hundred 
        let hd2;
        if (hd1 == '0') {
            hd2 = ''
        } else (hd2 = ` ${ones[hd1]} hundred`)
        let tt = Math.floor(n / 1).toString().split('')
        let tt1 = tt[6]
        let tt2 = tt[7]
        if (tt1 == '0') {
            let tt3;
            tt3 = ` ${ones[tt2]} `
        } if (tt1 == '1') {
            tt3 = ` ${teens[tt2]}`
        } else (tt3 = ` ${tens[tt1]} ${ones[tt2]}`)

        console.log(tmResult + dtresult + dt3 + hd2 + tt3);
    }

    if (n > 99999999 && n< 1000000000) {
        let thousandsMiilions = Math.floor(n / 1000000).toString()//for thousands miilion
        let hundredMillions = `${ones[thousandsMiilions[0]]} hundred`
        let tm1 = thousandsMiilions[1]
        let tm2 = thousandsMiilions[2]
        let tmResult;
        if (tm1 == '1') {
            tmResult = ` ${teens[tm1]} millions `
        } if (tm1 !== '1') {
            tmResult = ` ${tens[tm1]} ${ones[tm2]} millions`
        }
        let td = Math.floor(n / 1000).toString().split('')
        let dt = td[3]
        let dtresult = ` ${ones[dt]} hundred `
        let dt1 = td[4] // for thousand
        let dt2 = td[5]
        let dt3;
        if (dt1 == '0' && dt2 == '0') {
            dt3 = ' thousands'
        } if (dt1 == '0' && dt2 !== '0') {

            dt3 = ` ${ones[dt2]} thousands`
        } if (dt1 == '1') {

            dt3 = ` ${teens[dt2]} thousands`
        } if (dt1 !== '0' && dt1 !== '1') {
            dt3 = ` ${tens[dt1]} ${ones[dt2]} thousands`
        }
        let hd = Math.floor(n / 100).toString().split('')
        let hd1 = hd[6] // for hundred 
        let hd2;
        if (hd1 == '0') {
            hd2 = ''
        } else (hd2 = ` ${ones[hd1]} hundred`)
        let tt = Math.floor(n / 1).toString().split('')
        let tt1 = tt[7]
        let tt2 = tt[8]
        if (tt1 == '0') {
            let tt3;
            tt3 = ` ${ones[tt2]} `
        } if (tt1 == '1') {
            tt3 = ` ${teens[tt2]}`
        } else (tt3 = ` ${tens[tt1]} ${ones[tt2]}`)

        console.log(hundredMillions + tmResult + dtresult + dt3 + hd2 + tt3);
    }
    if (n > 999999999 && n < 10000000000) {
        let thousandsMiilions = Math.floor(n / 1000000).toString()//for thousands miilion
        let billions = `${ones[thousandsMiilions[0]]} Billion`
        let tm1 = thousandsMiilions[1]
        let hundredMillions = ` ${ones[tm1]} hundred`
        let tm2 = thousandsMiilions[2]
        let tm3 = thousandsMiilions[3]
        let tmResult;
        if (tm2 == '1') {
            tmResult = ` ${teens[tm3]} millions `
        } if (tm2 !== '1') {
            tmResult = ` ${tens[tm2]} ${ones[tm3]} millions`
        }
        let td = Math.floor(n / 1000).toString().split('')
        let dt = td[4]
        let dtresult = ` ${ones[dt]} hundred `
        let dt1 = td[5] // for thousand
        let dt2 = td[6]
        let dt3;
        if (dt1 == '0' && dt2 == '0') {
            dt3 = ' thousands'
        } if (dt1 == '0' && dt2 !== '0') {

            dt3 = ` ${ones[dt2]} thousands`
        } if (dt1 == '1') {

            dt3 = ` ${teens[dt2]} thousands`
        } if (dt1 !== '0' && dt1 !== '1') {
            dt3 = ` ${tens[dt1]} ${ones[dt2]} thousands`
        }
        let hd = Math.floor(n / 100).toString().split('')
        let hd1 = hd[7] // for hundred 
        let hd2;
        if (hd1 == '0') {
            hd2 = ''
        } else (hd2 = ` ${ones[hd1]} hundred`)
        let tt = Math.floor(n / 1).toString().split('')
        let tt1 = tt[8]
        let tt2 = tt[9]
        if (tt1 == '0') {
            let tt3;
            tt3 = ` ${ones[tt2]} `
        } if (tt1 == '1') {
            tt3 = ` ${teens[tt2]}`
        } else (tt3 = ` ${tens[tt1]} ${ones[tt2]}`)

        console.log(billions + hundredMillions + tmResult + dtresult + dt3 + hd2 + tt3);
    }
    if (n > 9999999999 && n < 100000000000) {

        let thousandsMiilions = Math.floor(n / 1000000).toString()//for thousands miilion
        let tensInbillions
        if (thousandsMiilions[0] == '1') {
            tensInbillions = ` ${teens[thousandsMiilions[1]]}billion`
        } else (tensInbillions = ` ${tens[tensInbillions[0]]} ${ones[thousandsMiilions[1]]} billion`)
        let tm1 = thousandsMiilions[2]
        let hundredMillions = ` ${ones[tm1]} hundred`
        let tm2 = thousandsMiilions[3]
        let tm3 = thousandsMiilions[4]
        let tmResult;
        if (tm2 == '1') {
            tmResult = ` ${teens[tm3]} millions `
        } if (tm2 !== '1') {
            tmResult = ` ${tens[tm2]} ${ones[tm3]} millions`
        }
        let td = Math.floor(n / 1000).toString().split('')
        let dt = td[5]
        let dtresult = ` ${ones[dt]} hundred `
        let dt1 = td[6] // for thousand
        let dt2 = td[7]
        let dt3;
        if (dt1 == '0' && dt2 == '0') {
            dt3 = ' thousands'
        } if (dt1 == '0' && dt2 !== '0') {

            dt3 = ` ${ones[dt2]} thousands`
        } if (dt1 == '1') {

            dt3 = ` ${teens[dt2]} thousands`
        } if (dt1 !== '0' && dt1 !== '1') {
            dt3 = ` ${tens[dt1]} ${ones[dt2]} thousands`
        }
        let hd = Math.floor(n / 100).toString().split('')
        let hd1 = hd[8] // for hundred 
        let hd2;
        if (hd1 == '0') {
            hd2 = ''
        } else (hd2 = ` ${ones[hd1]} hundred`)
        let tt = Math.floor(n / 1).toString().split('')
        let tt1 = tt[9]
        let tt2 = tt[10]
        if (tt1 == '0') {
            let tt3;
            tt3 = ` ${ones[tt2]} `
        } if (tt1 == '1') {
            tt3 = ` ${teens[tt2]}`
        } else (tt3 = ` ${tens[tt1]} ${ones[tt2]}`)

        console.log(tensInbillions + hundredMillions + tmResult + dtresult + dt3 + hd2 + tt3);

    }
    if (n > 99999999999 && n < 1000000000000) {

        let thousandsMiilions = Math.floor(n / 1000000).toString()//for thousands miilion
        let hundredInbillions = ` ${ones[thousandsMiilions[0]]} hundred`
        let tensInThousandsBillion = thousandsMiilions[1]
        let onesInThousandsBillions = thousandsMiilions[2]
        let tmResult;
        if (tensInThousandsBillion == '0') {
            tmResult = ` ${ones[onesInThousandsBillions]} Billions`
        } if (tensInThousandsBillion == '1') {
            tmResult = ` ${teens[onesInThousandsBillions]} Billions`
        } else (tmResult = ` ${tens[tensInThousandsBillion]} 
                        ${ones[onesInThousandsBillions]} Billions`)
        let hundredInhundredBillion = ` ${ones[thousandsMiilions[3]]} hundred`
        let tm1 = thousandsMiilions[4]
        let tm2 = thousandsMiilions[5]
        let tmResult1;
        if (tm1 == '0') {
            tmResult1 = ` ${ones[tm2]} Millions`
        } if (tm1 == '1') {
            tmResult1 = ` ${teens[tm2]} Millions`
        } else (tmResult1 = ` ${tens[tm1]} ${ones[tm2]} Millions`)

        let td = Math.floor(n / 1000).toString().split('')
        let dt = td[6]
        let dtresult = ` ${ones[dt]} hundred `
        let dt1 = td[7] // for thousand
        let dt2 = td[8]
        let dt3;
        if (dt1 == '0' && dt2 == '0') {
            dt3 = ' thousands '
        } if (dt1 == '0' && dt2 !== '0') {

            dt3 = ` ${ones[dt2]} thousands`
        } if (dt1 == '1') {

            dt3 = ` ${teens[dt2]} thousands`
        } if (dt1 !== '0' && dt1 !== '1') {
            dt3 = ` ${tens[dt1]} ${ones[dt2]} thousands`
        }
        let hd = Math.floor(n / 1).toString().split('')
        let hd1 = hd[9] // for hundred 
        let hd2;
        if (hd1 == '0') {
            hd2 = ''
        } else (hd2 = ` ${ones[hd1]} hundred`)
        let tt = Math.floor(n / 1).toString().split('')
        let tt1 = tt[10]
        let tt2 = tt[11]
        if (tt1 == '0') {
            let tt3;
            tt3 = ` ${ones[tt2]} `
        } if (tt1 == '1') {
            tt3 = ` ${teens[tt2]}`
        } else (tt3 = ` ${tens[tt1]} ${ones[tt2]}`)

        console.log(hundredInbillions + tmResult + hundredInhundredBillion + tmResult1 + dtresult + dt3 + hd2 + tt3);
    }
    
}
numToWords(123456789)

// result.replace(/\s{2,}/g, ' ').trim()
// numToWords(111111111)