const getreport = async(currentyear, deptName, studentdata) => {
    console.log(JSON.stringify(studentdata));
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    console.log("*****", deptName);
    let reportDefination2 = [{
            alignment: 'left',
            text: `OR.No/Admin/Stud_Certy/CI033/2022                                                                             Date:${today}`,
            fontSize: 18,
            bold: true
        },

        {
            alignment: 'center',
            text: 'TO WHOM IT MAY CONCERN',
            fontSize: 25,
            bold: true,
            margin: [0, 20],
        },

        {
            text: `This is to certify that ${studentdata.stuFirstname} ${studentdata.stuMiddlename} ${studentdata.stuLastname} (${studentdata.stuEnroll}) is a bonafide student of B.E. ${deptName} of this institute during the period ________ to till date as a regular mode - full time student. ${studentdata.stuGender="Female"?"She":"He"} is enrolled at Gujarat Technological University where all the Technical Courses leading to Degree Engineering are taught and assessed in English. ${studentdata.stuGender="Female"?"Her":"His"} result of B.E. semester I, II, III, IV, V, VI & VII examinations conducted by Gujarat Technological University have been declared and ${studentdata.stuGender="Female"?"she":"he"} has passed in all of them. ${studentdata.stuGender="Female"?"She":"He"} has no backlog in any semester examination.`,
            fontSize: 20,
        },

        {
            text: `${studentdata.stuGender="Female"?"Her":"His"} enrollment number is verified with office records and found correct. ${studentdata.stuGender="Female"?"Her":"His"} character is good during the tenure at Institute. This certificate is issued for further studies.`,
            fontSize: 20,
            margin: [0, 30],
        },

        {
            alignment: 'left',
            text: 'Dr.S.D. Toliwal                                                                                                                                    Principal                                                                                                                                    SVIT - Vasad',
            fontSize: 22,
            margin: [0, 50],
        },
    ]
    console.log(reportDefination2);
    return reportDefination2
}
export default getreport;