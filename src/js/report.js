import bonafiedreport from './bonafied'
import coursereport from './course'
import feereport from './fees'
import passreport from './passing'
import firstattempt from './firstattempt'
const getreport = (name, currentyear, deptName, studentdata) => {
    if (name == 'Bonafied Certificate')
        return bonafiedreport(currentyear, deptName, studentdata)
    if (name == 'Fee Structure Certificate')
        return feereport(currentyear, deptName, studentdata)
    if (name == 'MOI(Last Sem Students)')
        return coursereport(currentyear, deptName, studentdata)
    if (name == 'MOI(Passed Out Students)')
        return passreport(currentyear, deptName, studentdata)
    if (name == 'First attempt Certificate')
        return firstattempt(currentyear, deptName, studentdata)

}

export default getreport