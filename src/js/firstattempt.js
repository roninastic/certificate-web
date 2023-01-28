const getreport3 = async(currentyear, deptName, studentdata) => {
    console.log(JSON.stringify(studentdata));
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    let reportDefination3 = [{
            alignment: 'left',
            text: 'OR.No:',
            fontSize: 16,
        },
        {
            alingment: 'left',
            text: `DATE:${today}`,
            fontSize: 16,
            margin: [0, 20],
        },

        {
            alignment: 'center',
            text: 'FIRST ATTEMPT CERTIFICATE',
            fontSize: 25,
            bold: true,
            margin: [0, 20],
            style: Headers
        },

        {
            text: `This is to certify that ${studentdata.stuTitle} ${studentdata.stuFirstname} ${studentdata.stuMiddlename} ${studentdata.stuLastname} was a student of this college,who has passed ${studentdata.stuGender="Female"?"her":"his"} B.E. _____________________________ Exam in _________________ conducted by Gujrat University.`,
            fontSize: 18,
            margin: [0, 10],
        },
        {
            text: `The University result of B.E.  _____________________________ was declared on _________________________ by Gujrat University, Ahembdabad.${studentdata.stuGender="Female"?"She":"He"} has _______________ ${studentdata.stuGender="Female"?"her":"his"} Final Year Examination in first attempt.`,
            fontSize: 18,
            margin: [0, 20],
        },

        {
            alignment: 'left',
            text: 'Dr.S.D. Toliwal                                                                                                                                    Principal                                                                                                                                    SVIT - Vasad',
            fontSize: 22,
            margin: [0, 20],
        },
    ]
    console.log(reportDefination3);
    return reportDefination3
}
export default getreport3;