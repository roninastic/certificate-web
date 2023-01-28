const getreport = async(currentyear, deptName, studentdata) => {
    console.log(JSON.stringify(studentdata));
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    console.log("*****", deptName);
    let reportDefination1 = [{
            alignment: 'center',
            text: ' Sardar Vallabhbhai Patel Institute of Technology',
            bold: true,
            fontSize: 22,
        },

        {
            alignment: 'center',
            text: 'Vasad - 388 306, Dist. Anand, Gujarat, India.',
            fontSize: 12,
        },

        {
            alignment: 'center',
            text: 'Estd : 1997',
            fontSize: 12,
        },

        {
            alignment: 'center',
            text: '(Managed by The New English School Trust - Vasad, Since : 1952)',
            fontSize: 12,
        },

        {
            alignment: 'center',
            text: '(An Institute Approved by the AICTE, New Delhi and',
            fontSize: 12,
        },

        {
            alignment: 'center',
            text: 'Affiliated to Gujarat Technological University (GTU),Ahembdabad)',
            fontSize: 12
        },

        {
            alignment: 'center',
            text: 'Phones : +91 2692 274766,274489 Fax : +91 2692 274540',
            fontSize: 12,
        },

        {
            alignment: 'center',
            text: 'Website : http://www.svitvasad.ac.in E-mail : svit_vasadgen@rediffmail.com',
            fontSize: 12,
        },

        {
            alignment: 'center',
            text: `OR.No: SVIT/Loan Certi/      /2022                                                                                      Date:${today}`,
            fontSize: 12,
            margin: [0, 40],
            bold: true,
        },

        {
            alignment: 'center',
            text: 'C   E   R   T   I   F   I   C   A   T   E',
            bold: true,
            fontSize: 18,
        },

        {
            alignment: 'center',
            text: `This is to certify that ${studentdata.stuGender="Female"?"Miss.":"Mr."} ${studentdata.stuFirstname} ${studentdata.stuMiddlename} ${studentdata.stuLastname} is a bonafide                                                       student of this college studying in ${currentyear} year/semester of                                             B.E./M.E./M.C.A. ${deptName} is bearing ID No: (${studentdata.stuEnroll}) of Two/Three/Four Year degree course for the academic year ${yyyy}.`,
            fontSize: 15,
            margin: [0, 20],
        },

        {
            alignment: 'center',

            text: 'The approximate expenditure during each year is estimated as under:',
            style: 'header',
            fontSize: 15,
        },

        {
            style: 'tableExample',
            margin: [10, 10, 10, 18],
            table: {
                widths: [70, 300, 100],

                body: [

                    ['Sr.No.', 'Particulars', 'Amount(Rs.)'],
                    ['1', 'Tution Fee ', ''],
                    ['2', 'Tution Fee (Revised)', '', ],
                    ['3', 'Other Fees', '', ],
                    [{ text: 'Please issue D.D. in favour of students Name.', bold: true, style: 'tableHeader', colSpan: 2, alignment: 'center' }, {}, { text: '', style: 'tableHeader', alignment: 'center' }],
                ],
            }
        },

        {
            style: 'tableExample',
            margin: [10, 10, 10, 0],
            table: {
                widths: [70, 300, 100],

                body: [
                    ['1', 'Stationary, Cost of Books & Instruments etc.... ', ''],
                    [{ text: 'Please issue D.D. in favour of students Name.', bold: true, style: 'tableHeader', colSpan: 2, alignment: 'center' }, {}, { text: '', style: 'tableHeader', alignment: 'center' }],
                ],
            }
        },

        {
            alignment: 'left',
            text: '*Subject to change in fees as per Government rules.',
            fontSize: 12,
            margin: [0, 5]
        },

        {
            alignment: 'left',
            text: 'This certificate is being issued for the purpose of _________________ only.',
            fontSize: 15,
            margin: [0, 20],
        },

        {
            alignment: 'left',
            text: 'Dr.S.D. Toliwal                                                                                                                                    Principal                                                                                                                                    SVIT - Vasad',
            fontSize: 16,
            margin: [0, 50],
        },
    ]
    console.log(reportDefination1);
    return reportDefination1
}
export default getreport;