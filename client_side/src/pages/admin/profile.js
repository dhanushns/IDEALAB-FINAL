import { useEffect, useState } from 'react'
import '../../assets/styles/profile.css'
import HostStudent from './profile/hostStudent'
import Complete from './profile/complete'
import HostFaculty from './profile/hostFaculty'
import Alumini from './profile/alumini'
import OtherStudent from './profile/otherStudent'
import OtherFaculty from './profile/otherFaculty'
import Entrepreneur from './profile/entrepreneur'
import SchoolLearner from './profile/schoolLearner'
import SchoolTeacher from './profile/schoolTeacher'
import Industry from './profile/industry'
import { useParams } from 'react-router-dom';
import axios from 'axios'


function Profile() {

  const { email } = useParams();

  const [value, setvalue] = useState('');
  console.log(email)

  useEffect(() => {
    axios.post("/findUser", { email })
      .then(response => {
        setvalue(response.data.result);
        localStorage.setItem("userInformation", JSON.stringify(response.data.result))
      })
      .catch(err => {
        console.log(err)
      });
  }, []);


  const showprofile = () => {
    switch (value.table) {
      case "hoststudent":
        return (<HostStudent />);

      case "hostinstitutefaculty":
        return (<HostFaculty />);

      case "alumini":
        return (<Alumini />);

      case "otherstudent":
        return (<OtherStudent />);

      case "otherfaculty":
        return (<OtherFaculty />);

      case "startup":
        return (<Entrepreneur />);

      case "schoolstudents":
        return (<SchoolLearner />);

      case "schoolteacher":
        return (<SchoolTeacher />);

      case "industry":
        return (<Industry />);

      default:
        return (<Complete />);

    }
  }



  return (
    <>
      <div>{showprofile()}</div>

    </>
  )
}

export default Profile;